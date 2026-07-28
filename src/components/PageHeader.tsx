interface PageHeaderProps {
  title: string
}

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-heading text-3xl font-bold mb-1">{title}</h1>
      <div className="p-1 mb-6 bg-button-background flex-grow-1 shadow-[2px_2px_0_0_var(--button-shadow)]" />
    </div>
  )
}
