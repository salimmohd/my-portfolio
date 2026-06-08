import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { contactDetails } from '../data/contact'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-sky-800/90 bg-white/95 py-3 shadow-sm backdrop-blur-xl site-header">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            Salim
          </span>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/MahammadSalim.docx"
            download="MahammadSalim.docx"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-800 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-700"
          >
            <ArrowDownTrayIcon className="w-4 h-4" aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-sky-700 hover:text-sky-700"
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        <nav className="hidden items-center justify-center gap-8 text-sm text-slate-700 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? 'text-sky-800 font-semibold'
                    : 'text-slate-600 hover:text-sky-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={contactDetails.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-700 bg-white transition hover:bg-slate-100"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.64.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.55 0-.27-.01-1-.02-1.95-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.72 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.72 0-1.27.45-2.32 1.2-3.14-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.19a11.1 11.1 0 012.91-.39c.99 0 1.98.13 2.91.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.58.23 2.75.12 3.04.75.82 1.2 1.87 1.2 3.14 0 4.45-2.7 5.43-5.28 5.72.42.36.8 1.08.8 2.18 0 1.58-.02 2.86-.02 3.24 0 .3.21.66.8.55A10.54 10.54 0 0023.5 12.02C23.5 5.64 18.35.5 12 .5z" />
            </svg>
          </a>

          <a
            href={contactDetails.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-800 text-sky-800 transition hover:bg-sky-800 hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M4.98 3.5C3.34 3.5 2 4.83 2 6.5c0 1.67 1.34 3 2.98 3S5.96 8.17 5.96 6.5C5.96 4.83 4.62 3.5 4.98 3.5zM2.4 21.5h5.16V8.96H2.4V21.5zM8.4 8.96h4.95v1.7h.07c.69-1.32 2.38-2.72 4.9-2.72 5.24 0 6.2 3.45 6.2 7.93v9.63h-5.16v-8.53c0-2.04-.04-4.68-2.86-4.68-2.86 0-3.3 2.24-3.3 4.56v8.65H8.4V8.96z" />
            </svg>
          </a>

          <a
            href="/MahammadSalim.docx"
            download="MahammadSalim.docx"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b2540] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
            style={{ boxShadow: '0 6px 18px rgba(11,37,64,0.15)' }}
          >
            <ArrowDownTrayIcon className="w-4 h-4" aria-hidden="true" />
            Resume
          </a>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-5 shadow-xl shadow-slate-900/10 md:hidden">
          <nav className="space-y-4 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-base font-semibold transition ${
                    isActive
                      ? 'bg-sky-100 text-sky-800'
                      : 'text-slate-800 hover:bg-slate-100 hover:text-sky-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
            <a
              href={contactDetails.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky-800 bg-sky-50 text-sky-800 transition hover:bg-sky-100 hover:text-sky-900"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.64.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.55 0-.27-.01-1-.02-1.95-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.72 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.72 0-1.27.45-2.32 1.2-3.14-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.19a11.1 11.1 0 012.91-.39c.99 0 1.98.13 2.91.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.58.23 2.75.12 3.04.75.82 1.2 1.87 1.2 3.14 0 4.45-2.7 5.43-5.28 5.72.42.36.8 1.08.8 2.18 0 1.58-.02 2.86-.02 3.24 0 .3.21.66.8.55A10.54 10.54 0 0023.5 12.02C23.5 5.64 18.35.5 12 .5z" />
              </svg>
            </a>
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky-800 bg-sky-50 text-sky-800 transition hover:bg-sky-100 hover:text-sky-900"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M4.98 3.5C3.34 3.5 2 4.83 2 6.5c0 1.67 1.34 3 2.98 3S5.96 8.17 5.96 6.5C5.96 4.83 4.62 3.5 4.98 3.5zM2.4 21.5h5.16V8.96H2.4V21.5zM8.4 8.96h4.95v1.7h.07c.69-1.32 2.38-2.72 4.9-2.72 5.24 0 6.2 3.45 6.2 7.93v9.63h-5.16v-8.53c0-2.04-.04-4.68-2.86-4.68-2.86 0-3.3 2.24-3.3 4.56v8.65H8.4V8.96z" />
              </svg>
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}



