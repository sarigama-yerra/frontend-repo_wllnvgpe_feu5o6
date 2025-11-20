export default function AltAbout() {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              I build human‑centered interfaces with a focus on clarity, motion, and performance. My toolkit includes React, TypeScript, Tailwind, and modern design systems.
            </p>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              When not designing or coding, I explore 3D interactions and refine micro‑animations that make products feel alive.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Node', 'MongoDB'].map((s) => (
              <div key={s} className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <div className="text-sm font-medium">{s}</div>
                <div className="mt-3 h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
                  <div className="h-full w-4/5 rounded-full bg-neutral-900" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
