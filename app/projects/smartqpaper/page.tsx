import { CheckCircle } from "lucide-react"

export default function SmartQpaperCaseStudy() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-4xl font-bold">
          SmartQpaper – AI Question Paper Generator
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          An AI-powered academic automation system that generates question
          papers and evaluates descriptive answers using NLP techniques.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Python", "NLP", "LLMs", "Rule-Based AI"].map((tech) => (
            <span key={tech} className="rounded-md bg-muted px-3 py-1 text-sm">
              {tech}
            </span>
          ))}
        </div>

        <div className="my-12 h-px bg-border" />

        <section>
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <p className="mt-4 text-muted-foreground">
            Manual question paper creation and answer evaluation are
            time-consuming and inconsistent in academic institutions.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="mt-4 text-muted-foreground">
            SmartQpaper automates question generation and answer evaluation
            using NLP models and predefined academic rules.
          </p>
        </section>

      </div>
    </section>
  )
}
