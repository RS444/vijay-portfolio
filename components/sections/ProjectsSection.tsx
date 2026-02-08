import ProjectCard from "@/components/projects/ProjectCard"
import { projects } from "@/data/projects"

type Props = {
  id?: string
}

export default function ProjectsSection({ id }: Props) {
  const [featured, ...rest] = projects

  return (
    <section id={id} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A selection of projects showcasing my work in AI, Machine Learning,
          IoT, and full-stack development.
        </p>

        {/* Featured project */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <ProjectCard
              {...featured}
              featured
            />
          </div>
        </div>

        {/* Other projects */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
