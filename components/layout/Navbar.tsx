"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [active, setActive] = useState("")

  useEffect(() => {
    const sections = ["projects", "skills", "contact"]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Vijay R S
        </Link>

        <div className="flex items-center gap-6">
          {["projects", "skills", "contact"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className={`text-sm capitalize transition ${
                active === item
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item}
            </Link>
          ))}

          <ThemeToggle />

          <Link
            href="/resume/Vijay_RS_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Resume</Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}
