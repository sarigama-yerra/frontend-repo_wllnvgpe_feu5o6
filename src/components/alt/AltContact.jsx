export default function AltContact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl border border-neutral-200 p-8 bg-neutral-50">
          <h2 className="text-2xl font-semibold">Let’s talk</h2>
          <p className="mt-2 text-neutral-700">Interested in working together or have a question? Drop a line and I’ll get back to you.</p>
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input placeholder="Name" className="rounded-lg border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 ring-neutral-900/10" />
            <input placeholder="Email" type="email" className="rounded-lg border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 ring-neutral-900/10" />
            <textarea placeholder="Message" rows={5} className="sm:col-span-2 rounded-lg border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 ring-neutral-900/10" />
            <div className="sm:col-span-2">
              <button className="rounded-lg bg-neutral-900 text-white px-5 py-3 font-semibold hover:bg-neutral-800">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
