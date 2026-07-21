import { createFileRoute } from '@tanstack/react-router'

const About = () => {
  return <h1>About</h1>
}

export const Route = createFileRoute('/about')({
  component: About,
})
