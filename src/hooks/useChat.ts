import { useCallback, useRef, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'

const CHAT_ENDPOINT = import.meta.env.VITE_CHAT_URL

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface ToolStatus {
  name: string
  isError: boolean
}

type ChatSseEvent =
  | { type: 'text'; delta: string }
  | { type: 'tool_call'; id: string; name: string; input: unknown }
  | { type: 'tool_result'; id: string; name: string; isError: boolean; text: string }
  | { type: 'done'; text: string }
  | { type: 'error'; message: string }

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [streamingText, setStreamingText] = useState('')
  const [toolStatus, setToolStatus] = useState<ToolStatus | null>(null)
  const [isStreaming, setIsStreaming] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)
  const queryClient = useQueryClient()

  const sendMessage = useCallback(
    async (text: string) => {
      const history = messages
      setMessages((prev) => [...prev, { role: 'user', content: text }])
      setStreamingText('')
      setToolStatus(null)
      setError(null)
      setIsStreaming(true)

      const controller = new AbortController()
      abortRef.current = controller

      try {
        const response = await fetch(CHAT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text, history }),
          signal: controller.signal,
        })

        if (!response.ok || !response.body) {
          throw new Error(`Chat request failed: ${response.status} ${response.statusText}`)
        }

        const reader = response.body.getReader()
        const decoder = new TextDecoder()
        let buffer = ''

        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          buffer += decoder.decode(value, { stream: true })

          const frames = buffer.split('\n\n')
          buffer = frames.pop() ?? ''

          for (const frame of frames) {
            const dataLine = frame.split('\n').find((line) => line.startsWith('data: '))
            if (!dataLine) continue
            const event = JSON.parse(dataLine.slice('data: '.length)) as ChatSseEvent

            switch (event.type) {
              case 'text':
                setStreamingText((prev) => prev + event.delta)
                break
              case 'tool_call':
                setToolStatus({ name: event.name, isError: false })
                break
              case 'tool_result':
                setToolStatus({ name: event.name, isError: event.isError })
                if (event.name === 'update_product' && !event.isError) {
                  queryClient.invalidateQueries({ queryKey: ['products'] })
                }
                break
              case 'done':
                setMessages((prev) => [...prev, { role: 'assistant', content: event.text }])
                setStreamingText('')
                setToolStatus(null)
                break
              case 'error':
                setError(event.message)
                break
            }
          }
        }
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return
        setError(err instanceof Error ? err.message : String(err))
      } finally {
        setIsStreaming(false)
        abortRef.current = null
      }
    },
    [messages, queryClient],
  )

  const cancel = useCallback(() => {
    abortRef.current?.abort()
  }, [])

  return { messages, streamingText, toolStatus, isStreaming, error, sendMessage, cancel }
}
