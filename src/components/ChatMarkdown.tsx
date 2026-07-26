import ReactMarkdown from 'react-markdown'

const components = {
  p: ({ ...props }) => <p className="[&:not(:first-child)]:mt-2" {...props} />,
  ul: ({ ...props }) => <ul className="list-disc space-y-1 pl-4 [&:not(:first-child)]:mt-2" {...props} />,
  ol: ({ ...props }) => <ol className="list-decimal space-y-1 pl-4 [&:not(:first-child)]:mt-2" {...props} />,
  a: ({ ...props }) => <a className="underline underline-offset-2 hover:no-underline" target="_blank" rel="noreferrer" {...props} />,
  code: ({ ...props }) => <code className="rounded bg-black/10 px-1 py-0.5 font-mono text-[0.85em] dark:bg-white/10" {...props} />,
  pre: ({ ...props }) => <pre className="overflow-x-auto rounded-md bg-black/10 p-2 font-mono text-[0.85em] dark:bg-white/10" {...props} />,
}

export const ChatMarkdown = ({ content }: { content: string }) => (
  <ReactMarkdown components={components}>{content}</ReactMarkdown>
)
