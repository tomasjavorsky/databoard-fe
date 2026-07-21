import type { router } from './types'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
