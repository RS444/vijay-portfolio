"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-24">
      {/* Dynamic Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-70 mix-blend-screen" />
        <div className="absolute top-[30%] left-[60%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
      </div>

      <div className="z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-[-10vh]">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-white/5 text-sm backdrop-blur-md shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-300">Available for new opportunities</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl sm:text-8xl lg:text-[7rem] font-extrabold tracking-tighter leading-[1.1]"
        >
          Building <br className="sm:hidden" />
          <span className="text-gradient">Intelligence.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed"
        >
          I am Vijay, an AI & Data Science Engineer specializing in Machine Learning, IoT, and
          Full-Stack Development. I build systems that solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="rounded-full h-14 px-8 text-base group" asChild>
            <Link href="#projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-white/5 border-white/10 hover:bg-white/10" asChild>
            <Link href="#contact">Let&apos;s Talk</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-zinc-500"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"
        />
      </motion.div>
    </section>
  )
}
