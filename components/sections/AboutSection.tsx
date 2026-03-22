"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CalendarDays, GraduationCap, Code2, Cpu, BrainCircuit, LineChart } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Behind the <span className="text-gradient">Code.</span>
        </h2>
        <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
          A blend of artificial intelligence, system-level engineering, and a passion for building impactful products.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px]">
        
        {/* Card 1: Main Profile (Spans 2 cols, 2 rows) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-card md:col-span-2 md:row-span-2 relative overflow-hidden group p-8 flex flex-col justify-end"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/profile.png"
              alt="Vijay profile"
              fill
              className="object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-2 text-white">Vijay R S</h3>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-md">
              Passionate about applying AI to healthcare, automation, and system-level engineering. I thrive at the intersection of hardware and machine learning.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Core Skills */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card md:col-span-2 p-8 relative overflow-hidden flex flex-col justify-center"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <BrainCircuit className="text-blue-400" /> Technical Arsenal
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1 text-zinc-300"><span className="flex items-center gap-2"><Cpu size={16}/> Machine Learning</span><span>90%</span></div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[90%]" /></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1 text-zinc-300"><span className="flex items-center gap-2"><LineChart size={16}/> Deep Learning</span><span>80%</span></div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 w-[80%]" /></div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1 text-zinc-300"><span className="flex items-center gap-2"><Code2 size={16}/> Python & Full-Stack</span><span>90%</span></div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-[90%]" /></div>
              </div>
               <div>
                <div className="flex justify-between text-sm mb-1 text-zinc-300"><span className="flex items-center gap-2"><Cpu size={16}/> IoT & Sensors</span><span>85%</span></div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-amber-500 w-[85%]" /></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Education Timeline */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card md:col-span-2 lg:col-span-1 p-8 relative overflow-hidden flex flex-col justify-center"
        >
           <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
            <GraduationCap className="text-emerald-400" /> Education
          </h3>
          <div className="space-y-6">
            <div className="relative pl-6 border-l border-zinc-700/50">
              <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-1.5 ring-4 ring-zinc-950" />
              <h4 className="font-semibold text-zinc-200">B.Tech in AI & DS</h4>
              <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1"><CalendarDays size={12}/> SRM Valliammai (2023 - 26)</p>
            </div>
            <div className="relative pl-6 border-l border-zinc-700/50">
              <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[6.5px] top-1.5 ring-4 ring-zinc-950" />
              <h4 className="font-semibold text-zinc-200">Diploma in ECE</h4>
              <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1"><CalendarDays size={12}/> SRM Valliammai (2019 - 23)</p>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Quick Fact */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 mb-2">5+</h3>
          <p className="text-zinc-400 text-sm uppercase tracking-widest font-medium">Major Projects Delivered</p>
        </motion.div>

      </div>
    </section>
  )
}
