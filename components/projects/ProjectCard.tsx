import Link from "next/link"
import { Button } from "@/components/ui/button"

type ProjectCardProps = {
  title: string
  description: string
  tech: string[]
  href: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  tech,
  href,
  featured = false,
}: ProjectCardProps) {
  return (
    <div
      className={`rounded-xl border p-6 transition hover:shadow-md ${
        featured ? "border-primary/40 shadow-sm" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        {featured && (
          <span className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
            Featured
          </span>
        )}
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-md bg-muted px-2 py-1 text-xs"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <a
          href={href}
          className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm text-background"
        >
          View Case Study
        </a>
      </div>
    </div>
  )
}
