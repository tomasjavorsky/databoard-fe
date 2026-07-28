import { createFileRoute } from '@tanstack/react-router'
import { Bubble, BubbleContent, BubbleGroup } from '@/components/ui/bubble'
import { PageHeader } from '@/components/PageHeader'

const frontendLibraries = [
  'React',
  'Typescript',
  'TanStack Router',
  'TanStack Table',
  'TanStack Query',
  'Tailwind CSS',
  'shadcn/ui',
]

const backendLibraries = [
  'Fastify',
  'Drizzle ORM',
  'Zod',
  'Supabase',
]

const About = () => {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="About" />
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </section>
      <section>
        <BubbleGroup className="flex flex-row flex-wrap gap-4">
          {frontendLibraries.map((library) => (
            <Bubble
              key={library}
              variant="outline"
            >
              <BubbleContent>{library}</BubbleContent>
            </Bubble>
          ))}
          {backendLibraries.map((library) => (
            <Bubble
              key={library}
              variant="outline"
            >
              <BubbleContent>{library}</BubbleContent>
            </Bubble>
          ))}
        </BubbleGroup>
      </section>
    </div>
  )
}

export const Route = createFileRoute('/about')({
  component: About,
})
