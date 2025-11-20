import { useState } from 'react'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    title: 'Smart Wheelchair',
    tag: 'IoT + AI',
    description: 'Voice recognition controlled wheelchair concept integrating IoT sensors and intelligent navigation.',
    image: 'https://images.unsplash.com/photo-1668983396705-3aa5deed5569?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbWFydCUyMFdoZWVsY2hhaXJ8ZW58MHwwfHx8MTc2MzYwNzE4OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'DiabFit Application',
    tag: 'HealthTech',
    description: 'A mobile/web system for diabetes management with tracking, reminders, and insights.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Space Exploration Website',
    tag: 'Experience',
    description: 'A visually rich, modern space-themed website with immersive visuals and data.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Mini Projects',
    tag: 'Collection',
    description: 'Landing pages, UI components, and small JavaScript apps demonstrating core skills.',
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop',
  },
]

function Card({ project, onClick }) {
  return (
    <motion.button
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-3 text-left overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/0 via-violet-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-violet-600/10 group-hover:to-blue-600/10 transition" />
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <div className="relative p-4">
        <div className="text-[10px] uppercase tracking-[0.2em] text-blue-300/80">{project.tag}</div>
        <div className="mt-1 text-lg font-semibold text-white">{project.title}</div>
        <p className="mt-1 text-sm text-slate-300/90 line-clamp-2">{project.description}</p>
      </div>
    </motion.button>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_at_80%_10%,rgba(59,130,246,0.08),transparent),radial-gradient(600px_at_10%_90%,rgba(139,92,246,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <a href="#" className="text-sm text-blue-300 hover:text-blue-200">View All Soon</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <Card key={i} project={p} onClick={() => setActive(p)} />
          ))}
        </div>

        {active && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur p-4" onClick={() => setActive(null)}>
            <div className="max-w-2xl w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-[16/9] overflow-hidden">
                <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-blue-300/80">{active.tag}</div>
                <h3 className="mt-1 text-2xl font-bold text-white">{active.title}</h3>
                <p className="mt-2 text-slate-300">{active.description}</p>
                <div className="mt-6 flex justify-end">
                  <button onClick={() => setActive(null)} className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10 transition">Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}