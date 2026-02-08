"use client"

import { motion } from "framer-motion"

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-4xl font-bold tracking-tight">Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Technologies and tools I actively use to build intelligent,
            real-world systems.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          
          <SkillCard
            title="AI & Data Science"
            skills={[
              { name: "Machine Learning", level: 90 },
              { name: "Deep Learning", level: 80 },
              { name: "Data Analysis", level: 80 },
              { name: "Computer Vision", level: 70 },
            ]}
          />

          <SkillCard
            title="Programming"
            skills={[
              { name: "Python", level: 90 },
              { name: "SQL", level: 75 },
              { name: "Java", level: 65 },
              { name: "C", level: 60 },
            ]}
          />

          <SkillCard
            title="Tools & Frameworks"
            skills={[
              { name: "TensorFlow", level: 75 },
              { name: "PyTorch", level: 65 },
              { name: "Scikit-learn", level: 80 },
              { name: "Git / GitHub", level: 85 },
            ]}
          />

        </div>
      </div>
    </section>
  )
}

/* ---------- Skill Card ---------- */

function SkillCard({
  title,
  skills,
}: {
  title: string
  skills: { name: string; level: number }[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-2xl border bg-background p-6 shadow-sm"
    >
      <h3 className="mb-6 text-xl font-semibold">{title}</h3>

      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-1 flex justify-between text-sm">
              <span>{skill.name}</span>
              <span className="text-muted-foreground">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-full rounded-full bg-muted">
              <div
                className="h-2 rounded-full bg-primary"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
