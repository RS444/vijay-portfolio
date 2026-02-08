"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t bg-background px-6 py-24"
    >
      <div className="mx-auto max-w-4xl text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight">
            Let’s Build Something Meaningful
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            I’m open to internships, collaborations, and interesting
            problem-solving opportunities in AI, Data Science, and
            full-stack development.
          </p>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <Button size="lg" asChild>
            <Link href="mailto:vijayrs834@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Link>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <Link
              href="https://github.com/RS444"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <Link
              href="https:www.linkedin.com/in/vijay-rs-385387271"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
        </motion.div>

        {/* Footer Note */}
        <p className="mt-16 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vijay. Built with Next.js & Tailwind CSS.
        </p>

      </div>
    </section>
  )
}
