"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center text-center py-24">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
      >
        Hi, I’m <span className="text-primary">Vijay</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 max-w-2xl text-lg text-muted-foreground"
      >
        AI & Data Science Engineer specializing in Machine Learning, IoT, and
        full-stack development. I build intelligent systems that solve
        real-world problems.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8 flex gap-4"
      >
        <Button size="lg" asChild>
          <Link href="/projects">View Projects</Link>
        </Button>

        <Button size="lg" variant="outline" asChild>
          <Link href="/contact">Contact Me</Link>
        </Button>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 flex flex-col items-center text-muted-foreground"
      >
        <span className="text-sm mb-1">Scroll down</span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
