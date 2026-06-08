import {
  CodeBracketIcon,
  Squares2X2Icon,
  DevicePhoneMobileIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { servicesContent } from '../content/services'
import ScrollReveal from './ScrollReveal'

const serviceIcons = {
  code: CodeBracketIcon,
  squares: Squares2X2Icon,
  mobile: DevicePhoneMobileIcon,
  users: UsersIcon,
}

export default function Services() {
  return (
    <ScrollReveal as="section" id="services" className="scroll-mt-28 border-t border-sky-100 bg-slate-50 py-12 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">
            {servicesContent.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            {servicesContent.title}
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {servicesContent.items.map((service, index) => {
            const ServiceIcon = serviceIcons[service.icon] || CodeBracketIcon

            return (
              <ScrollReveal
                as="article"
                key={service.title}
                delay={index * 90}
                className="group min-h-[184px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50/40 hover:shadow-[0_18px_40px_rgba(14,116,144,0.16)]"
              >
                <h3 className="flex items-start gap-3 text-xl font-semibold text-sky-800 transition duration-300 group-hover:text-sky-700">
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-sky-50 text-sky-600 transition duration-300 group-hover:scale-110 group-hover:bg-slate-950 group-hover:text-white">
                    <ServiceIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="leading-snug">{service.title}</span>
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {service.description}
                </p>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </ScrollReveal>
  )
}
