import { motion } from 'framer-motion'
import { Code2, Palette, Boxes, Database, Rocket, PenTool, Layers } from 'lucide-react'

const SERVICES = [
  { title: 'Web Development', icon: Code2, desc: 'Clean, scalable, high-performance websites.' },
  { title: 'Front-End UI/UX', icon: Palette, desc: 'Modern interfaces with thoughtful interactions.' },
  { title: 'WordPress Development', icon: Layers, desc: 'Custom themes, plugins, and CMS setups.' },
  { title: 'Database Design', icon: Database, desc: 'Schema design and data modeling.' },
  { title: 'API Integration', icon: Boxes, desc: 'REST integrations and data flows.' },
  { title: '3D & Interactive Web', icon: Rocket, desc: 'Spline/Three.js immersive experiences.' },
  { title: 'Branding & Graphics', icon: PenTool, desc: 'Figma/Canva assets and visual systems.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ title, icon: Icon, desc }) => (
            <motion.div key={title} whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-tr from-blue-600/30 to-violet-600/30 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}