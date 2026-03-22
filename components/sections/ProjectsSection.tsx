"use client"

import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type Props = {
  id?: string
}

export default function ProjectsSection({ id }: Props) {
  return (
    <section id={id} className="px-6 py-32 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-24 md:mb-32 max-w-2xl"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Selected <span className="text-gradient">Works.</span>
        </h2>
        <p className="mt-6 text-xl text-zinc-400">
          A showcase of intelligent systems, machine learning models, and full-stack solutions.
        </p>
      </motion.div>

      <div className="flex flex-col gap-12 md:gap-24 relative">
        {projects.map((project, index) => {
          // Sticky offset ensures they stack beautifully
          const topOffset = `calc(100px + ${index * 30}px)`

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-10%" }}
              className="sticky w-full"
              style={{ top: topOffset }}
            >
              <div className="glass-card w-full p-8 md:p-14 min-h-[50vh] flex flex-col justify-between shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)] group border-t border-white/10" style={{ backgroundColor: '#0a0a0c' }}>
                
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                  <div className="max-w-2xl">
                    <div className="text-zinc-500 font-mono text-sm mb-4">0{index + 1}</div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xl text-zinc-400 leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 lg:justify-end items-start mt-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 text-zinc-300 rounded-full text-sm backdrop-blur-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-16 flex justify-between items-end border-t border-white/5 pt-8">
                  <Link 
                    href={project.href} 
                    className="inline-flex items-center gap-3 text-lg font-medium text-white hover:text-blue-400 transition-colors"
                  >
                    View Case Study
                    <span className="p-3 bg-white/10 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <ArrowUpRight size={20} />
                    </span>
                  </Link>
                </div>

              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
