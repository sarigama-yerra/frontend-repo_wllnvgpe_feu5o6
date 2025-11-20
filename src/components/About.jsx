import { motion } from 'framer-motion'
import { Code2, Brush, Cpu, Database, Globe, Lego, GitBranch, Workflow, PanelsTopLeft } from 'lucide-react'

const skills = [
  { name: 'HTML', icon: Globe },
  { name: 'CSS', icon: Brush },
  { name: 'JavaScript', icon: Code2 },
  { name: 'Python', icon: Cpu },
  { name: 'Databases (SQL)', icon: Database },
  { name: 'WordPress', icon: PanelsTopLeft },
  { name: 'Figma', icon: Brush },
  { name: 'Canva', icon: Brush },
  { name: 'Git / GitHub', icon: GitBranch },
  { name: 'APIs', icon: Lego },
  { name: 'Responsive UI', icon: Workflow },
  { name: 'Accessibility (a11y)', icon: Workflow },
  { name: 'TypeScript', icon: Code2 },
  { name: 'React', icon: Code2 },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950 text-slate-100">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_at_10%_20%,rgba(59,130,246,0.08),transparent),radial-gradient(600px_at_90%_80%,rgba(139,92,246,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I’m Abdullah Talib, a passionate IT graduate and creative developer focused on building high-quality, modern web experiences. I combine a strong technical background with a keen eye for design to craft responsive, accessible, and visually striking interfaces.
            </p>
            <p className="mt-3 text-slate-300 leading-relaxed">
              My interests span 3D interfaces, UI animations, and intelligent, data-driven solutions. I love taking ideas from concept to polished, production-ready products.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map(({ name, icon: Icon }) => (
                <div key={name} className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-tr from-blue-600/30 to-violet-600/30 text-blue-300 group-hover:from-blue-600/50 group-hover:to-violet-600/50 transition">
                      <Icon size={18} />
                    </div>
                    <span className="text-sm font-medium text-slate-200">{name}</span>
                  </div>
                  <div className="mt-3 h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-blue-500 to-violet-600 shadow-[0_0_15px_rgba(59,130,246,0.7)]" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}