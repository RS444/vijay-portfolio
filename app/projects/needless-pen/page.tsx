import { CheckCircle } from "lucide-react"

export default function NeedlessPenCaseStudy() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-4xl font-bold">
          Needless Pen – Smart Writing Reduction System
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          An IoT-based smart pen that detects unnecessary writing behavior
          and provides feedback to reduce paper wastage.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "IoT",
            "ESP32",
            "Sensors",
            "Embedded Systems",
            "Data Analysis",
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
            Excessive and unnecessary writing leads to paper wastage in
            educational environments.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="mt-4 text-muted-foreground">
            The system uses sensor data from a smart pen to analyze writing
            behavior and provide feedback for sustainable usage.
          </p>
        </section>

      </div>
    </section>
  )
}
