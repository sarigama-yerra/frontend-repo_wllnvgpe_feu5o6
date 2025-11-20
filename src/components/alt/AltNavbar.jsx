import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function AltNavbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'bg-white/80 backdrop-blur border-b border-neutral-200' : ''}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">A.Talib</a>
          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-neutral-600 hover:text-neutral-900 transition">{l.label}</a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-1 rounded-lg bg-neutral-900 text-white px-3 py-1.5 text-sm hover:bg-neutral-800">
              Hire Me <ArrowUpRight size={16} />
            </a>
          </div>
          <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-3 flex flex-col">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-neutral-700">{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
