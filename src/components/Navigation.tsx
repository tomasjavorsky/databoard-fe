import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Navigation = () => {
  return (
    <nav className="flex gap-2 p-3">
      <Button asChild variant="outline" className="data-[status=active]:bg-muted">
        <Link to="/" activeOptions={{ exact: true }}>
          Overview
        </Link>
      </Button>
      <Button asChild variant="outline" className="data-[status=active]:bg-muted">
        <Link to="/about">About</Link>
      </Button>
    </nav>
  )
}
