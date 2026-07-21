import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <nav>
        <Link to="/" activeOptions={{ exact: true }}>
          Overview
        </Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </>
  )
}
