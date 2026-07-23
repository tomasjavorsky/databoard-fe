import { Menu } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export const Navigation = () => {
  return (
    <nav className="mx-auto flex w-full max-w-screen-xl gap-2 p-3">
      <div className="hidden gap-2 sm:flex">
        <Button asChild variant="outline" className="data-[status=active]:bg-muted">
          <Link to="/" activeOptions={{ exact: true }}>
            Overview
          </Link>
        </Button>
        <Button asChild variant="outline" className="data-[status=active]:bg-muted">
          <Link to="/chat">Chat</Link>
        </Button>
        <Button asChild variant="outline" className="data-[status=active]:bg-muted">
          <Link to="/about">About</Link>
        </Button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="sm:hidden">
          <Button variant="outline" size="icon" aria-label="Open menu">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem asChild>
            <Link to="/" activeOptions={{ exact: true }}>
              Overview
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/chat">Chat</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/about">About</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}
