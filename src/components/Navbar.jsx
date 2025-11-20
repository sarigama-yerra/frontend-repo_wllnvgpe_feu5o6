import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-slate-200/80 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-slate-900/60 border-b border-white/10' : 'bg-transparent'
    }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 shadow-[0_0_30px_rgba(99,102,241,0.6)]" />
            <span className="text-white font-semibold tracking-tight">Abdullah Talib</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="ml-2 text-slate-200/80 hover:text-white">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-200/80 hover:text-white">
              <Linkedin size={18} />
            </a>
            <a href="mailto:abdullahtalib@example.com" className="text-slate-200/80 hover:text-white">
              <Mail size={18} />
            </a>
          </div>

          <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur">
          <div className="px-4 py-3 flex flex-col">
            <NavLink href="#about" onClick={close}>About</NavLink>
            <NavLink href="#projects" onClick={close}>Projects</NavLink>
            <NavLink href="#services" onClick={close}>Services</NavLink>
            <NavLink href="#contact" onClick={close}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}