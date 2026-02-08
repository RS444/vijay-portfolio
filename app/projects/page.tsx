import ProjectCard from "@/components/projects/ProjectCard"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  const [featuredProject, ...otherProjects] = projects

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A selection of projects showcasing my work in AI,
          Machine Learning, IoT, and full-stack development.
        </p>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Featured Project (LifeTrack) */}
          <div className="sm:col-span-2 lg:col-span-2">
            <ProjectCard
              featured
              title={featuredProject.title}
              description={featuredProject.description}
              tech={featuredProject.tech}
              href={featuredProject.href}
            />
          </div>

          {/* Remaining Projects */}
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              href={project.href}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
