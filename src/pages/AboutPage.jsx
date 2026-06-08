import salimImage from '../assets/salim.jpeg'
import ScrollReveal from '../components/ScrollReveal'
import { aboutPageContent } from '../content/about'
import { socialLinks } from '../content/contact'

const sectionContainer = 'mx-auto max-w-5xl px-6 py-20 lg:px-8'

function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-slate-950">{title}</h2>
      <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-500">
        {subtitle}
      </p>
    </div>
  )
}

function RichParagraph({ parts }) {
  return (
    <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-700 first:mt-6">
      {parts.map((part, index) =>
        part.strong ? (
          <strong key={`${part.text}-${index}`}>{part.text}</strong>
        ) : (
          <span key={`${part.text}-${index}`}>{part.text}</span>
        ),
      )}
    </p>
  )
}

function SocialLink({ href, label, variant }) {
  const className =
    variant === 'primary'
      ? 'bg-slate-950 text-white hover:bg-slate-800'
      : 'border border-sky-600 text-sky-700 hover:bg-sky-50'

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-sm px-5 py-3 text-xs font-semibold transition ${className}`}
    >
      {label}
    </a>
  )
}

function HeroSection() {
  const { hero } = aboutPageContent

  return (
    <ScrollReveal as="section" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="overflow-hidden rounded-sm bg-slate-200 shadow-[0_20px_45px_rgba(15,23,42,0.14)]">
          <img
            src={salimImage}
            alt={hero.imageAlt}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
            {hero.eyebrow}
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-5xl">
            {hero.titlePrefix}{' '}
            <span className="text-sky-600">{hero.highlightedTitle}</span>{' '}
            {hero.titleSuffix}
          </h1>

          <div>
            {hero.paragraphs.map((paragraph, index) => (
              <RichParagraph key={index} parts={paragraph} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.label}
                {...link}
                variant={link.label === 'GitHub' ? 'primary' : 'secondary'}
              />
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

function ExperienceItem({ item, delay }) {
  return (
    <ScrollReveal as="article" delay={delay} className="relative pl-10">
      <span className="absolute left-1.5 top-1.5 h-3 w-3 rounded-sm border-2 border-sky-600 bg-white" />

      <p className="inline-flex rounded-sm bg-sky-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-sky-700">
        {item.date}
      </p>

      <h3 className="mt-3 text-xl font-bold text-slate-950">{item.role}</h3>
      <p className="mt-1 text-sm font-medium text-sky-700">{item.company}</p>
      <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
    </ScrollReveal>
  )
}

function ExperienceSection() {
  const { experienceSection } = aboutPageContent

  return (
    <ScrollReveal as="section" className={sectionContainer}>
      <SectionHeading
        title={experienceSection.title}
        subtitle={experienceSection.subtitle}
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div className="absolute left-3 top-0 h-full w-px bg-slate-300" />

        <div className="space-y-10">
          {experienceSection.items.map((item, index) => (
            <ExperienceItem
              key={`${item.role}-${item.company}`}
              item={item}
              delay={index * 80}
            />
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}

function EducationCard({ item, delay }) {
  return (
    <ScrollReveal
      as="article"
      delay={delay}
      className="group min-h-[245px] rounded-sm border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50/40 hover:shadow-[0_18px_40px_rgba(14,116,144,0.16)]"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-sky-700 transition duration-300 group-hover:text-sky-800">
        {item.years}
      </p>

      <h3 className="mt-4 text-xl font-bold text-slate-950 transition duration-300 group-hover:text-sky-700">
        {item.degree}
      </h3>
      <p className="mt-2 text-sm font-medium text-slate-700">
        {item.institution}
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-600">{item.detail}</p>
    </ScrollReveal>
  )
}

function EducationSection() {
  const { educationSection } = aboutPageContent

  return (
    <ScrollReveal as="section" className="border-t border-slate-200 bg-slate-50">
      <div className={sectionContainer}>
        <SectionHeading
          title={educationSection.title}
          subtitle={educationSection.subtitle}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {educationSection.items.map((item, index) => (
            <EducationCard
              key={item.degree}
              item={item}
              delay={index * 90}
            />
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}

function ServiceCard({ service, delay }) {
  return (
    <ScrollReveal
      as="article"
      delay={delay}
      className="group min-h-[245px] rounded-sm border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50/40 hover:shadow-[0_18px_40px_rgba(14,116,144,0.16)]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-sky-600 text-sm font-bold text-white transition duration-300 group-hover:scale-110 group-hover:bg-slate-950">
        {service.title.slice(0, 1)}
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-950 transition duration-300 group-hover:text-sky-700">
        {service.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">
        {service.description}
      </p>
    </ScrollReveal>
  )
}

function ServicesSection() {
  const { servicesSection } = aboutPageContent

  return (
    <ScrollReveal as="section" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <SectionHeading
          title={servicesSection.title}
          subtitle={servicesSection.subtitle}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesSection.items.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              delay={index * 85}
            />
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function AboutPage() {
  return (
    <main className="w-full bg-white text-slate-950">
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <ServicesSection />
    </main>
  )
}
