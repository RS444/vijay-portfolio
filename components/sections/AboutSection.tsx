"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-[calc(100vh-80px)] items-center px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-24 md:grid-cols-2">
        
        {/* Left: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center md:justify-start"
        >
          <div className="relative h-[420px] w-[340px] overflow-hidden rounded-2xl border shadow-sm">
            <Image
              src="/images/pic.png"
              alt="Vijay profile"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 20%" }}
              priority
            />
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center text-center md:text-left"
        >
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Hi, I’m <span className="text-primary">Vijay R S</span>
          </h1>

          {/* ✅ Subtle Role Strip */}
          <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
            AI • Machine Learning • IoT • Full-Stack
          </p>

          <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted-foreground">
            AI & Data Science Engineer specializing in Machine Learning, IoT,
            and full-stack development. I build intelligent systems that solve
            real-world problems.
          </p>

          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Passionate about applying AI to healthcare, automation, and
            system-level engineering.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-5 md:justify-start">
            <Button size="lg" className="px-8 py-6 text-base" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base"
              asChild
            >
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator — untouched */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground">
        <Link
          href="#education"
          className="flex flex-col items-center gap-1 text-sm"
        >
          <span className="opacity-70">Scroll down</span>
          <ChevronDown className="h-5 w-5 animate-bounce opacity-70" />
        </Link>
      </div>
    </section>
  )
}
