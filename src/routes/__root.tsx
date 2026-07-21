import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Navigation } from '@/components/Navigation'

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <div className="flex-1 p-3">
        <Outlet />
      </div>
    </>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
