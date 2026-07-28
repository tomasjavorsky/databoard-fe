import { Menu, MessageCircle } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
import { ChatPanel } from './ChatPanel'

export const Navigation = () => {
  return (
    <nav className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-2 p-3">
      <div className="flex gap-2">
        <div className="hidden gap-2 sm:flex">
          <Button asChild>
            <Link to="/" activeOptions={{ exact: true }}>
              Overview
            </Link>
          </Button>
          <Button asChild>
            <Link to="/about">About</Link>
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="sm:hidden">
            <Button size="icon" aria-label="Open menu">
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
              <Link to="/about">About</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button>
            <MessageCircle />
            Product Assistant
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-full">
          <DrawerHeader className="mb-4 bg-button-background rounded-tl-lg border-sidebar border-b-1 shadow-[2px_2px_0_0_var(--button-shadow)]">
            <DrawerTitle className="text-l text-center">Product Assistant</DrawerTitle>
          </DrawerHeader>
          <div className="min-h-0 flex-1 p-4 pt-0">
            <ChatPanel />
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  )
}
