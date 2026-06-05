export default function ContactPage() {
  return (
    <section className="animate-fade-in rounded-lg border border-sky-500/10 bg-slate-950/85 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
          Contact
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Let&apos;s work together
        </h1>
      </div>
      <div className="mt-8 space-y-6 text-slate-300">
        <p>
          I&apos;m available for frontend development and UI/UX projects. Reach out for React, Tailwind, and web app work.
        </p>
        <a
          href="mailto:salim@example.com"
          className="inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
        >
          Email Me
        </a>
      </div>
    </section>
  )
}



