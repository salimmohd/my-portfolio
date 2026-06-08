import salimImage from '../assets/salim.jpeg'
import { socialLinks } from '../data/contact'

const experience = [
  {
    role: 'Senior Web Frontend Developer',
    company: 'HashRoot Technologies Private Limited',
    date: '07/2025 - PRESENT',
    summary:
      'Developing responsive browser-based applications using React and TypeScript. Implementing seamless API integration for dynamic data handling.',
  },
  {
    role: 'Senior Software Engineer UI/UX',
    company: 'Dietary Business Intelligence Private Limited (DBI 360)',
    date: '11/2023 - 09/2024',
    summary:
      'Architected complex dashboards using React and TypeScript, resulting in a 20% increase in user engagement.',
  },
  {
    role: 'Senior Associate Designer',
    company: 'Tech Mahindra Limited',
    date: '10/2017 - 10/2023',
    summary:
      'Specialized in creating interactive visual aid materials and digital marketing content for web and mobile campaigns.',
  },
  {
    role: 'Senior Web Designer',
    company: 'Infoway Technology Solution Limited',
    date: '01/2015 - 09/2017',
    summary:
      'Designed responsive websites, HTML prototypes, and polished UI assets for client projects.',
  },
  {
    role: 'Web Designer',
    company: 'Infoway India Web Solution Pvt. Limited',
    date: '07/2013 - 12/2014',
    summary:
      'Created websites and digital marketing collateral focused on usability, accessibility, and clean visual design.',
  },
]

const education = [
  {
    degree: 'Bachelor of Science',
    institution: 'University of Calcutta',
    years: '2008 - 2011',
    detail: 'Completed a science degree with a strong foundation in analytical thinking.',
  },
  {
    degree: 'Higher Secondary',
    institution: 'Mahesh Sri Ramkrishna Ashram Vidyalaya',
    years: '2006 - 2008',
    detail: 'Studied science and mathematics with a focus on logical problem solving.',
  },
  {
    degree: 'Madhyamik',
    institution: "Serampore Malina Lahiri Boys' Academy",
    years: '2004 - 2006',
    detail: 'Completed secondary education with strong academic performance.',
  },
]

const services = [
  {
    title: 'UI/UX Design',
    description: 'Crafting polished, usable interfaces with clarity and brand consistency.',
  },
  {
    title: 'Frontend Development',
    description: 'Building responsive React applications using Tailwind, Vite, and modern tooling.',
  },
  {
    title: 'Design Systems',
    description: 'Creating scalable component systems that maintain quality across products.',
  },
  {
    title: 'Performance',
    description: 'Optimizing load speed and interactivity for real-world web experiences.',
  },
  {
    title: 'Collaboration',
    description: 'Working with designers and product teams to deliver polished results quickly.',
  },
]

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
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="overflow-hidden rounded-sm bg-slate-200 shadow-[0_20px_45px_rgba(15,23,42,0.14)]">
          <img
            src={salimImage}
            alt="Mohammad Salim"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
            About Me
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Crafting Digital <span className="text-sky-600">Experiences</span>{' '}
            with Precision
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-700">
            I am Salim, a Senior Web Frontend Developer specializing in UI/UX
            with over 12 years of experience. My expertise lies in React,
            Next.js, and modern CSS architectures, focusing on performance and
            user-centricity.
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-700">
            My background spans both design and development, allowing me to
            bridge the gap between Figma prototypes and production code.
          </p>

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
    </section>
  )
}

function ExperienceItem({ item }) {
  return (
    <article className="relative pl-10">
      <span className="absolute left-1.5 top-1.5 h-3 w-3 rounded-sm border-2 border-sky-600 bg-white" />

      <p className="inline-flex rounded-sm bg-sky-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-sky-700">
        {item.date}
      </p>

      <h3 className="mt-3 text-xl font-bold text-slate-950">{item.role}</h3>
      <p className="mt-1 text-sm font-medium text-sky-700">{item.company}</p>
      <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
    </article>
  )
}

function ExperienceSection() {
  return (
    <section className={sectionContainer}>
      <SectionHeading
        title="Work Experience"
        subtitle="My professional journey so far"
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div className="absolute left-3 top-0 h-full w-px bg-slate-300" />

        <div className="space-y-10">
          {experience.map((item) => (
            <ExperienceItem key={`${item.role}-${item.company}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationCard({ item }) {
  return (
    <article className="group min-h-[245px] rounded-sm border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50/40 hover:shadow-[0_18px_40px_rgba(14,116,144,0.16)]">
      <p className="text-xs font-semibold uppercase tracking-wider text-sky-700 transition duration-300 group-hover:text-sky-800">
        {item.years}
      </p>

      <h3 className="mt-4 text-xl font-bold text-slate-950 transition duration-300 group-hover:text-sky-700">{item.degree}</h3>
      <p className="mt-2 text-sm font-medium text-slate-700">
        {item.institution}
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-600">{item.detail}</p>
    </article>
  )
}

function EducationSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className={sectionContainer}>
        <SectionHeading title="Education" subtitle="My academic background" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {education.map((item) => (
            <EducationCard key={item.degree} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  return (
    <article className="group min-h-[245px] rounded-sm border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50/40 hover:shadow-[0_18px_40px_rgba(14,116,144,0.16)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-sky-600 text-sm font-bold text-white transition duration-300 group-hover:scale-110 group-hover:bg-slate-950">
        {service.title.slice(0, 1)}
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-950 transition duration-300 group-hover:text-sky-700">
        {service.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">
        {service.description}
      </p>
    </article>
  )
}

function ServicesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <SectionHeading title="What I Do" subtitle="Services I deliver" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
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
