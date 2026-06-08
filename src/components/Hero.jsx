import { Link } from 'react-router-dom'
import { homeHeroContent } from '../content/portfolio'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  const { actions, focus } = homeHeroContent

  return (
    <ScrollReveal as="section" className="relative overflow-hidden bg-[#eff7ff] px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_1fr] items-center">
          <div className="space-y-8 max-w-2xl text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
              {homeHeroContent.eyebrow}
            </p>
            <div className="space-y-3">
              <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                {homeHeroContent.titlePrefix}{' '}
                <span className="text-sky-600">
                  {homeHeroContent.highlightedName}
                </span>
              </h1>
              <p className="text-lg font-semibold text-slate-800">
                {homeHeroContent.subtitle}
              </p>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-700">
              {homeHeroContent.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {actions.map((action) => {
                const className =
                  action.variant === 'primary'
                    ? 'bg-[#0b2540] text-white shadow-[0_16px_40px_rgba(11,37,64,0.18)] hover:opacity-95'
                    : 'border border-sky-600 bg-white text-sky-700 hover:bg-sky-50'

                return (
                  <Link
                    key={action.label}
                    className={`inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold transition ${className}`}
                    to={action.to}
                  >
                    {action.label}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -right-8 top-10 hidden h-[calc(100%-2rem)] w-full rounded-lg bg-[#d8edff] blur-3xl lg:block" />
            <div className="relative overflow-hidden border border-slate-200/70 bg-white p-8 shadow-[0_40px_90px_rgba(15,23,42,0.12)]">
              <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700">
                {focus.eyebrow}
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950">
                {focus.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                {focus.description}
              </p>
              <ul className="mt-8 space-y-4">
                {focus.items.map((item) => (
                  <li
                    key={item}
                    className="border border-slate-200/70 bg-white px-5 py-4 text-sm text-slate-700 shadow-[0_4px_12px_rgba(15,23,42,0.06)]"
                  >
                    <span className="mr-3 inline-flex h-2.5 w-2.5 rounded-full bg-sky-600 align-middle" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
