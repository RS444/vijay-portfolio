"use client"

import { motion } from "framer-motion"
import { CalendarDays, GraduationCap } from "lucide-react"

export default function EducationSection() {
  return (
    <section id="education" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-4xl font-bold tracking-tight">
            Education
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A progressive academic journey building strong foundations in
            engineering, electronics, and artificial intelligence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative grid grid-cols-1 gap-14 md:grid-cols-[160px_1fr]">

          {/* Timeline Line */}
          <div className="relative hidden md:flex justify-center">
            <div className="absolute -top-16 h-[calc(100%+3rem)] w-px bg-muted-foreground/30" />
          </div>

          {/* Timeline Items */}
          <div className="space-y-14">

            <TimelineItem
              year="2023 – 2026"
              title="B.Tech — Artificial Intelligence & Data Science"
              institution="SRM Valliammai Engineering College"
              score="CGPA: 8.13"
            />

            <TimelineItem
              year="2019 – 2023"
              title="Diploma — Electronics & Communication Engineering"
              institution="SRM Valliammai Polytechnic College"
              score="82%"
            />

            <TimelineItem
              year="2018 – 2019"
              title="Secondary School Leaving Certificate (SSLC)"
              institution="St. Joseph Matric Hr Sec School"
              score="80%"
            />

          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Timeline Item Component ---------- */

function TimelineItem({
  year,
  title,
  institution,
  score,
}: {
  year: string
  title: string
  institution: string
  score: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Dot */}
      <div className="absolute -left-[74px] top-5 hidden h-3.5 w-3.5 rounded-full bg-primary md:block" />

      {/* Card */}
      <div className="rounded-2xl border bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="mt-1 font-medium text-muted-foreground">
          {institution}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            {year}
          </span>
          <span className="flex items-center gap-1">
            <GraduationCap className="h-4 w-4" />
            {score}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
