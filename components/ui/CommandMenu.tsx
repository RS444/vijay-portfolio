"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Command } from "cmdk"
import { Code, FileText, Home, Mail, User } from "lucide-react"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md pt-[15vh] flex justify-center items-start text-left" onClick={() => setOpen(false)}>
      <Command 
        className="w-[90vw] max-w-2xl bg-[#0a0a0c] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false)
        }}
      >
        <div className="flex items-center border-b border-white/5 px-4 h-16">
          <Command.Input 
            autoFocus
            placeholder="Type a command or search..." 
            className="w-full bg-transparent outline-none border-none text-white text-lg placeholder:text-zinc-500"
          />
        </div>
        <Command.List className="max-h-[350px] overflow-y-auto p-3 scrollbar-none">
          <Command.Empty className="p-6 text-center text-zinc-500 text-sm">No results found.</Command.Empty>
          
          <Command.Group heading="Navigation" className="text-zinc-500 text-xs px-2 py-3 font-semibold uppercase tracking-wider">
            <Command.Item onSelect={() => runCommand(() => router.push("/"))} className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer aria-selected:bg-white/10 aria-selected:text-white text-zinc-300 transition-colors">
              <Home size={18} /> Home
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push("/#projects"))} className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer aria-selected:bg-white/10 aria-selected:text-white text-zinc-300 transition-colors">
              <Code size={18} /> Projects
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push("/#about"))} className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer aria-selected:bg-white/10 aria-selected:text-white text-zinc-300 transition-colors">
              <User size={18} /> About Me
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push("/#contact"))} className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer aria-selected:bg-white/10 aria-selected:text-white text-zinc-300 transition-colors">
              <Mail size={18} /> Contact
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Quick Actions" className="text-zinc-500 text-xs px-2 py-3 font-semibold uppercase tracking-wider">
            <Command.Item onSelect={() => runCommand(() => window.open("/resume/Vijay_RS_Resume.pdf", "_blank"))} className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer aria-selected:bg-white/10 aria-selected:text-white text-zinc-300 transition-colors">
              <FileText size={18} /> Download Resume
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => {
              navigator.clipboard.writeText("vijayrs834@gmail.com")
            })} className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer aria-selected:bg-white/10 aria-selected:text-white text-zinc-300 transition-colors">
              <Mail size={18} /> Copy Email Address
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  )
}
