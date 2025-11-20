import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/95 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 h-[100svh] flex items-center">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-blue-300/80"
          >
            IT Specialist & Front-End Developer
            <span className="inline-block h-1 w-1 rounded-full bg-blue-400 shadow-[0_0_12px_theme(colors.blue.500)]" />
            BSc in Information Technology
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Hi, I’m Abdullah Talib — IT Graduate & Creative Developer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-4 text-slate-300 text-lg max-w-2xl"
          >
            Specializing in web development, modern UI/UX, 3D interfaces, and intelligent solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="relative inline-flex items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-violet-600 px-5 py-3 font-semibold shadow-[0_0_30px_rgba(79,70,229,0.55)]">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-semibold text-slate-100 hover:bg-white/10 transition">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}