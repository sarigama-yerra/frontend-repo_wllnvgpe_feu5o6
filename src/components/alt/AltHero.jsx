import { motion } from 'framer-motion'

export default function AltHero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm text-neutral-600"
            >
              Portfolio — 2025
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight"
            >
              Abdullah Talib
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-neutral-600 max-w-xl"
            >
              Front‑end developer crafting clean, fast, accessible web experiences. Minimal aesthetics. Maximum clarity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#work" className="rounded-lg bg-neutral-900 text-white px-5 py-3 font-semibold hover:bg-neutral-800">See Work</a>
              <a href="#contact" className="rounded-lg border border-neutral-300 px-5 py-3 font-semibold text-neutral-800 hover:bg-neutral-100">Contact</a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-neutral-200 to-white border border-neutral-200 shadow-sm" />
            <div className="absolute -z-10 -top-10 -left-10 w-60 h-60 rounded-full bg-neutral-200 blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -right-10 w-72 h-72 rounded-full bg-neutral-300 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
