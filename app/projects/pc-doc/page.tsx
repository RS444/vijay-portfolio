import { CheckCircle } from "lucide-react"

export default function PCDocCaseStudy() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-4xl font-bold">
          PC Doc – Offline PC Health Diagnostic Tool
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          An offline desktop application that analyzes system performance,
          identifies health issues, and provides actionable recommendations.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Python",
            "System Monitoring",
            "Desktop Application",
            "Tkinter / PyQt",
            "OS APIs",
          ].map((tech) => (
            <span key={tech} className="rounded-md bg-muted px-3 py-1 text-sm">
              {tech}
            </span>
          ))}
        </div>

        <div className="my-12 h-px bg-border" />

        <section>
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <p className="mt-4 text-muted-foreground">
            Many users lack visibility into system health, leading to slow
            performance, crashes, and inefficient resource usage.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="mt-4 text-muted-foreground">
            PC Doc provides offline diagnostics by monitoring CPU, RAM, disk,
            and startup programs, delivering insights without internet access.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li>• CPU & memory usage analysis</li>
            <li>• Disk health monitoring</li>
            <li>• Startup optimization suggestions</li>
            <li>• Offline operation</li>
          </ul>
        </section>

      </div>
    </section>
  )
}
