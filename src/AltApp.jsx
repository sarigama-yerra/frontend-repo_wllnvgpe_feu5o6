import AltNavbar from './components/alt/AltNavbar'
import AltHero from './components/alt/AltHero'
import AltWork from './components/alt/AltWork'
import AltAbout from './components/alt/AltAbout'
import AltContact from './components/alt/AltContact'

export default function AltApp() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <AltNavbar />
      <main>
        <AltHero />
        <AltWork />
        <AltAbout />
        <AltContact />
      </main>
      <footer className="border-t border-neutral-200 py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Abdullah Talib — Crafted with care.
      </footer>
    </div>
  )
}
