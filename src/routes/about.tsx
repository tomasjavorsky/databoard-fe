import { createFileRoute } from '@tanstack/react-router'
import { Bubble, BubbleContent, BubbleGroup } from '@/components/ui/bubble'

const frontendLibraries = [
  'React',
  'Typescript',
  'TanStack Router',
  'TanStack Table',
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
    <div>
      <h1>About</h1>
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="max-w-[250px]">
          <h2>Frontend</h2>
          <BubbleGroup className="mt-2">
            {frontendLibraries.map((library, index) => (
              <Bubble
                key={library}
                variant="outline"
                align={index % 2 === 1 ? 'end' : 'start'}
              >
                <BubbleContent>{library}</BubbleContent>
              </Bubble>
            ))}
          </BubbleGroup>
        </div>
        <div className="max-w-[300px]">
          <h2>Backend</h2>
          <BubbleGroup className="mt-2">
            {backendLibraries.map((library, index) => (
              <Bubble
                key={library}
                variant="outline"
                align={index % 2 === 1 ? 'end' : 'start'}
              >
                <BubbleContent>{library}</BubbleContent>
              </Bubble>
            ))}
          </BubbleGroup>
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/about')({
  component: About,
})
