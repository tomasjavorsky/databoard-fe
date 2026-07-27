import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Navigation } from '@/components/Navigation'

const RootLayout = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-10 bg-[#eaeaea] opacity-10 bg-[repeating-linear-gradient(to_right,transparent_0,transparent_1.6666666666666667px,#eaeaea_1.6666666666666667px,#eaeaea_5px,transparent_5px,transparent_6.666666666666667px),repeating-linear-gradient(to_bottom,transparent_0,transparent_1.6666666666666667px,#eaeaea_1.6666666666666667px,#eaeaea_5px,transparent_5px,transparent_6.666666666666667px),linear-gradient(to_bottom,#696969_0.6px,transparent_0.6px),linear-gradient(to_right,#696969_0.6px,transparent_0.6px)] bg-[100%_100%,100%_100%,20px_20px,20px_20px] bg-[0_0,0_0,0_-0.2px,-0.2px_0]" />
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
