import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Fake delay for demo
    await new Promise(r => setTimeout(r, 800))
    setStatus('Thanks! Your message has been sent.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-blue-600 to-violet-600 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-violet-600 to-blue-600 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Let’s build something great</h2>
            <p className="mt-3 text-slate-300">Have a project in mind or want to collaborate? I’m open to freelance and full-time opportunities.</p>

            <div className="mt-6 flex items-center gap-4">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Github /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Linkedin /></a>
              <a href="mailto:abdullahtalib@example.com" className="text-slate-300 hover:text-white"><Mail /></a>
            </div>
          </div>

          <motion.form onSubmit={submit} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input required className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 ring-blue-500/40" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 ring-blue-500/40" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Message</label>
                <textarea rows={5} required className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 ring-blue-500/40" />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <button className="rounded-lg bg-gradient-to-tr from-blue-600 to-violet-600 px-5 py-3 font-semibold shadow-[0_0_30px_rgba(79,70,229,0.55)]">Send Message</button>
              <span className="text-sm text-blue-300">{status}</span>
            </div>
          </motion.form>
        </div>

        <div className="mt-16 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Abdullah Talib. All rights reserved.
        </div>
      </div>
    </section>
  )
}