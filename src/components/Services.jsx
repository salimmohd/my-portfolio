import {
  CodeBracketIcon,
  Squares2X2Icon,
  DevicePhoneMobileIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Frontend Development',
    description:
      'Build fast, interactive UI with React, component architecture, and modern frontend tooling.',
    icon: CodeBracketIcon,
  },
  {
    title: 'UI Implementation',
    description:
      'Translate design systems into polished, reusable interface components with attention to detail.',
    icon: Squares2X2Icon,
  },
  {
    title: 'Mobile-First Design',
    description:
      'Create responsive applications that look great on desktop and mobile devices.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Collaboration',
    description:
      'Work with Git, GitHub, and team workflows to keep projects organized and maintainable.',
    icon: UsersIcon,
  },
]

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 animate-fade-in border-t border-sky-100 bg-slate-50 py-12 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">
          What I Offer
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
          Services I provide to bring your ideas to life
        </h2>
      </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <article key={service.title} className="border border-slate-200 bg-white p-6 transition hover:border-sky-200 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
            <h3 className="text-xl font-semibold text-sky-800 flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sky-600 flex-shrink-0">
                <service.icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className="leading-snug">{service.title}</span>
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">{service.description}</p>
          </article>
        ))}
      </div>
      </div>
    </section>
  )
}


