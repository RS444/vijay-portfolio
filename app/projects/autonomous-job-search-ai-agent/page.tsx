"use client"

import { motion } from "framer-motion"
import { CheckCircle2, UserCheck, Bot, BarChart, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function JobSearchAgentCaseStudy() {
  return (
    <div className="bg-[#0a0a0c] min-h-screen text-white pb-32">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-10 transition-colors">
            <ArrowLeft size={18} /> Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
              Autonomous <br/> <span className="text-gradient">Job Search Agent.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
              Automating the entire job search lifecycle by perfectly matching user profiles with job descriptions using LLMs.
            </p>
          </motion.div>

          {/* Tech Stack Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-14 glass-card p-6 md:p-8 flex flex-wrap gap-3"
          >
            {["AI Agent", "LLM", "Python", "Web Automation", "Data Parsing"].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-zinc-300 text-sm font-medium">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 grid gap-16">
        
        {/* Core Architecture Diagram */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 mt-10"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Bot className="text-yellow-400" /> System Architecture
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-yellow-500/20 via-pink-500/20 to-blue-500/20 hidden md:block -z-10" />
            
            <div className="glass flex flex-col items-center p-6 rounded-2xl w-full md:w-1/3 border-t-yellow-500/50">
              <UserCheck size={32} className="text-yellow-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Profile Engine</h3>
              <p className="text-sm text-zinc-400 text-center">Ingests candidate resume, skills, and exact job preferences.</p>
            </div>

            <div className="glass flex flex-col items-center p-6 rounded-2xl w-full md:w-1/3 border-t-pink-500/50">
              <Bot size={32} className="text-pink-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Web Automation</h3>
              <p className="text-sm text-zinc-400 text-center">Scrapes daily job listings from multiple career portals.</p>
            </div>

            <div className="glass flex flex-col items-center p-6 rounded-2xl w-full md:w-1/3 border-t-blue-500/50">
              <BarChart size={32} className="text-blue-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">AI Matching</h3>
              <p className="text-sm text-zinc-400 text-center">LLM calculates JD vs Profile match score and autofills forms.</p>
            </div>
          </div>
        </motion.div>

        {/* Narrative */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Manually searching for jobs, reading through countless descriptions, and figuring out if one's profile is a good fit is a highly repetitive, soul-crushing, and time-consuming process.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-4">The Solution</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              This AI Agent fully automates the job search workflow by deeply understanding candidate details, scraping relevant job portals, and applying to jobs that perfectly align with their role.
            </p>
          </motion.div>
        </div>

        <div className="my-8 h-px bg-white/10" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Key Capabilities</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Role-based automated searching",
              "Intelligent JD parsing & matching",
              "Profile scoring via LLMs",
              "Multi-platform job scraping",
              "Daily/Weekly opportunity reporting",
              "Automated application assistance"
            ].map((feature, i) => (
              <div key={i} className="flex gap-3 items-start p-4 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 className="text-yellow-500 shrink-0 mt-0.5" size={20} />
                <span className="text-zinc-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </section>
    </div>
  )
}
