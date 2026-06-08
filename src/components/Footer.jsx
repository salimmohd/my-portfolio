import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import ScrollReveal from './ScrollReveal'
import { contactDetails, footerContent, siteContent } from '../content/portfolio'

export default function Footer() {
  return (
    <ScrollReveal
      as="footer"
      id="contact"
      className="bg-slate-50 shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
    >
      <div className="mx-auto w-full max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="space-y-8 text-center">
          <p className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            {footerContent.cta}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${contactDetails.email}`}
              className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-lg bg-sky-800 px-8 py-4 text-base font-semibold text-white shadow-[0_24px_60px_rgba(14,65,128,0.18)] transition hover:bg-sky-700"
            >
              <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
              {footerContent.emailButton}
            </a>
            <a
              href={contactDetails.phoneHref}
              className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-lg border border-sky-800 bg-white px-8 py-4 text-base font-semibold text-sky-800 shadow-[0_24px_60px_rgba(14,65,128,0.08)] transition hover:bg-sky-50"
            >
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
              {contactDetails.phone}
            </a>
          </div>
        </div>

        <div className="mx-auto flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
          <a
            href={contactDetails.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-1 transition hover:border-sky-700 hover:text-sky-700"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.64.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.55 0-.27-.01-1-.02-1.95-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.72 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.72 0-1.27.45-2.32 1.2-3.14-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.19a11.1 11.1 0 012.91-.39c.99 0 1.98.13 2.91.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.58.23 2.75.12 3.04.75.82 1.2 1.87 1.2 3.14 0 4.45-2.7 5.43-5.28 5.72.42.36.8 1.08.8 2.18 0 1.58-.02 2.86-.02 3.24 0 .3.21.66.8.55A10.54 10.54 0 0023.5 12.02C23.5 5.64 18.35.5 12 .5z" />
            </svg>
            GitHub
          </a>
          <a
            href={contactDetails.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-1 transition hover:border-sky-700 hover:text-sky-700"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M4.98 3.5C3.34 3.5 2 4.83 2 6.5c0 1.67 1.34 3 2.98 3S5.96 8.17 5.96 6.5C5.96 4.83 4.62 3.5 4.98 3.5zM2.4 21.5h5.16V8.96H2.4V21.5zM8.4 8.96h4.95v1.7h.07c.69-1.32 2.38-2.72 4.9-2.72 5.24 0 6.2 3.45 6.2 7.93v9.63h-5.16v-8.53c0-2.04-.04-4.68-2.86-4.68-2.86 0-3.3 2.24-3.3 4.56v8.65H8.4V8.96z" />
            </svg>
            LinkedIn
          </a>
        </div>

        <div className="border-t border-slate-200 pt-6">
          <div className="mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500 sm:px-6 lg:px-8">
            <p className="text-base font-semibold text-slate-900">
              {siteContent.name}
            </p>
            <p className="mx-auto text-center text-slate-500">
              &copy; {siteContent.copyrightYear} {siteContent.copyrightName}.
              All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-sky-700"
              >
                LinkedIn
              </a>
              <a
                href={contactDetails.github}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-sky-700"
              >
                GitHub
              </a>
              <a
                href={contactDetails.phoneHref}
                className="transition hover:text-sky-700"
              >
                Mobile
              </a>
              <a
                href={`mailto:${contactDetails.email}`}
                className="transition hover:text-sky-700"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
