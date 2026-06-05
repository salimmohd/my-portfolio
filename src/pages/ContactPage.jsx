export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
            Contact
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something
            <span className="text-sky-600"> Great Together</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-700">
            Have a project in mind or want to discuss frontend development,
            UI/UX design, React, Tailwind, or performance optimization? Send me
            a message and I&apos;ll get back to you.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="space-y-6">
          <div className="rounded-sm border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              Email
            </p>
            <a
              href="mailto:salim@example.com"
              className="mt-3 block text-lg font-bold text-slate-950 hover:text-sky-600"
            >
              salim@example.com
            </a>
          </div>

          <div className="rounded-sm border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              Location
            </p>
            <p className="mt-3 text-lg font-bold text-slate-950">
              India
            </p>
          </div>

          <div className="rounded-sm border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              Social
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-sm bg-slate-950 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border border-sky-600 px-4 py-2 text-xs font-semibold text-sky-700 hover:bg-sky-50"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <form className="rounded-sm border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-slate-800">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-sm border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-600"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-800">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="mt-2 w-full rounded-sm border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-600"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm font-semibold text-slate-800">
              Subject
            </label>
            <input
              type="text"
              placeholder="Project inquiry"
              className="mt-2 w-full rounded-sm border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-600"
            />
          </div>

          <div className="mt-6">
            <label className="text-sm font-semibold text-slate-800">
              Message
            </label>
            <textarea
              rows="6"
              placeholder="Tell me about your project..."
              className="mt-2 w-full resize-none rounded-sm border border-slate-300 px-4 py-3 text-sm outline-none focus:border-sky-600"
            />
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex rounded-sm bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  )
}