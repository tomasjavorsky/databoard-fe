import { useState } from 'react'
import { Bubble, BubbleContent, BubbleGroup } from '@/components/ui/bubble'
import { Button } from '@/components/ui/button'
import { ChatMarkdown } from '@/components/ChatMarkdown'
import { useChat } from '@/hooks/useChat'

const toolStatusLabel: Record<string, string> = {
  list_products: 'Looking up products…',
  get_product: 'Looking up product…',
  update_product: 'Updating product…',
}

export const ChatPanel = () => {
  const { messages, streamingText, toolStatus, isStreaming, error, sendMessage } = useChat()
  const [input, setInput] = useState('')

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const text = input.trim()
    if (!text || isStreaming) return
    setInput('')
    void sendMessage(text)
  }

  return (
    <div className="flex h-full flex-col gap-4">
      <BubbleGroup className="flex-1 overflow-y-auto">
        {messages.map((message, index) => (
          <Bubble
            key={index}
            align={message.role === 'user' ? 'end' : 'start'}
            variant={message.role === 'user' ? 'muted' : 'default'}
          >
            <BubbleContent>
              {message.role === 'assistant' ? <ChatMarkdown content={message.content} /> : message.content}
            </BubbleContent>
          </Bubble>
        ))}

        {streamingText && (
          <Bubble align="start" variant="default">
            <BubbleContent>
              <ChatMarkdown content={streamingText} />
            </BubbleContent>
          </Bubble>
        )}

        {toolStatus && (
          <Bubble align="start" variant="default">
            <BubbleContent
              className={toolStatus.isError ? 'text-destructive' : 'text-muted-foreground'}
            >
              {toolStatus.isError
                ? `Something went wrong calling ${toolStatus.name}.`
                : toolStatusLabel[toolStatus.name] ?? `Calling ${toolStatus.name}…`}
            </BubbleContent>
          </Bubble>
        )}

        {error && (
          <Bubble align="start" variant="destructive">
            <BubbleContent>{error}</BubbleContent>
          </Bubble>
        )}
      </BubbleGroup>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about or update a product…"
          disabled={isStreaming}
          className="h-8 flex-1 rounded-lg border-2 border-border bg-background px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50"
        />
        <Button type="submit" disabled={isStreaming || !input.trim()}>
          Send
        </Button>
      </form>
    </div>
  )
}
