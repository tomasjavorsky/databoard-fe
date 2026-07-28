import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Navigation } from '@/components/Navigation'

const RootLayout = () => {
  return (
    <div className="flex w-screen h-screen flex-col bg-background">
      <Navigation />
      <div className="flex-1 mx-auto w-full max-w-screen-xl p-3">
        <Outlet />
      </div>
    </div>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
