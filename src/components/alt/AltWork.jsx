import { motion } from 'framer-motion'

const WORKS = [
  {
    title: 'E‑commerce UI Kit',
    desc: 'A modular component system for online stores built with accessibility and performance in mind.',
  },
  {
    title: 'Health Tracker Dashboard',
    desc: 'Data‑dense yet readable dashboards. Clean charts, filters, and responsive layouts.',
  },
  {
    title: 'Portfolio Generator',
    desc: 'A starter template to spin up beautiful portfolios in minutes with modern tooling.',
  },
]

export default function AltWork() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
          <a href="#contact" className="text-sm text-neutral-600 hover:text-neutral-900">Request case studies</a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {WORKS.map((w, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="aspect-[4/3] rounded-lg bg-neutral-100" />
              <div className="mt-4">
                <div className="font-semibold">{w.title}</div>
                <p className="mt-1 text-neutral-600 text-sm">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
