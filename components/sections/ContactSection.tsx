"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, ArrowUpRight, Send, Loader2, CheckCircle2 } from "lucide-react"
import { submitContact } from "@/app/actions/contact"
import { useActionState, useEffect, useRef } from "react"

const initialState = {
  success: false,
  message: "",
}

export default function ContactSection() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
    }
  }, [state.success])

  return (
    <section id="contact" className="relative pt-32 pb-10 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/10 blur-[150px] rounded-b-full pointer-events-none opacity-50" />

      <div className="mx-auto max-w-7xl px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full grid lg:grid-cols-2 gap-16"
        >
          {/* Left Side: Statement */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm mb-10 w-fit mx-auto lg:mx-0 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-zinc-300">Open for work & collaborations</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-white">
              Let&apos;s build <br/> something <span className="text-gradient">epic.</span>
            </h2>

            <p className="text-xl text-zinc-400 max-w-md mx-auto lg:mx-0 leading-relaxed mb-10">
              Whether you have a question, a project idea, or just want to connect over coffee, my inbox is always open.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link 
                href="mailto:vijayrs834@gmail.com"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors py-2 px-4 rounded-full bg-white/5 border border-white/10"
              >
                <Mail size={18} /> vijayrs834@gmail.com
              </Link>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass-card p-8 md:p-10 w-full max-w-xl mx-auto lg:mx-0">
            <form ref={formRef} action={formAction} className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={4}
                  className="bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {state.message && (
                <div className={`p-4 rounded-xl text-sm flex items-center gap-3 ${state.success ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                  {state.success ? <CheckCircle2 size={18} /> : null}
                  {state.message}
                </div>
              )}

              <Button 
                type="submit" 
                disabled={isPending}
                className="w-full rounded-xl h-14 text-base font-bold bg-white text-black hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 mt-2"
              >
                {isPending ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} className="ml-1" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="w-full mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm font-medium">
            © {new Date().getFullYear()} Vijay R S. Crafted with Impact.
          </p>

          <div className="flex gap-4">
            <Link 
              href="https://github.com/RS444" 
              target="_blank" 
              className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <Github size={20} />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/vijay-rs-385387271" 
              target="_blank" 
              className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
