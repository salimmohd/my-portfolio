import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#eff7ff] px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_1fr] items-center">
          <div className="space-y-8 max-w-2xl text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
              Welcome to my portfolio
            </p>
            <div className="space-y-3">
              <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Hi, I&apos;m <span className="text-sky-600">Salim</span>
              </h1>
              <p className="text-lg font-semibold text-slate-800">
                Senior Web Frontend Developer | React | Vite
              </p>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-700">
              I craft clean, performant web applications with polished UI using modern frontend technologies. My focus is on responsive layouts, smooth interactions, and professional digital presentation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center justify-center rounded-lg bg-[#0b2540] px-8 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(11,37,64,0.18)] transition hover:opacity-95"
                to="/projects"
              >
                View Projects
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-lg border border-sky-600 bg-white px-8 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
                to="/contact"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -right-8 top-10 hidden h-[calc(100%-2rem)] w-full rounded-lg bg-[#d8edff] blur-3xl lg:block" />
            <div className="relative overflow-hidden border border-slate-200/70 bg-white p-8 shadow-[0_40px_90px_rgba(15,23,42,0.12)]">
              <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700">
                Current Focus
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950">
                React Portfolio
              </h2>
              <p className="mt-4 text-slate-700 leading-7">
                Designing clean components, smooth layouts, and modern interfaces for engaging web experiences.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="border border-slate-200/70 bg-white px-5 py-4 text-sm text-slate-700 shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-600 mr-3 inline-block align-middle" />
                  React / Vite
                </li>
                <li className="border border-slate-200/70 bg-white px-5 py-4 text-sm text-slate-700 shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-600 mr-3 inline-block align-middle" />
                  Responsive layouts
                </li>
                <li className="border border-slate-200/70 bg-white px-5 py-4 text-sm text-slate-700 shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-600 mr-3 inline-block align-middle" />
                  Polished UI design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



