import { Link } from 'react-router-dom'

const experience = [
  {
    role: 'Senior Web Frontend Developer',
    company: 'HashRoot Technologies Private Limited',
    date: '11/2023 - 09/2024',
    summary:
      'Built responsive dashboards and converted Figma designs into React-based frontend experiences.',
  },
  {
    role: 'Senior Software Engineer UI/UX',
    company: 'Dietary Business Intelligence Private Limited (DBI 360)',
    date: '10/2017 - 10/2023',
    summary:
      'Delivered frontend solutions and UX improvements that increased engagement by over 20%.',
  },
  {
    role: 'Senior Associate Designer',
    company: 'Tech Mahindra Limited',
    date: '01/2015 - 09/2017',
    summary:
      'Created interactive visual content and campaign experiences across web and mobile.',
  },
  {
    role: 'Senior Web Designer',
    company: 'Infoway Technology Solution Limited',
    date: '07/2013 - 12/2014',
    summary:
      'Developed UI assets, HTML prototypes, and polished interfaces for web projects.',
  },
  {
    role: 'Web Designer',
    company: 'Infoway India Web Solution Pvt. Limited',
    date: '01/2013 - 06/2013',
    summary:
      'Designed websites and digital marketing collateral with a focus on usability and speed.',
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
    institution: 'Serampore Malina Lahiri Boys\' Academy',
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

export default function AboutPage() {
  return (
    <div className="w-full space-y-12">
      <section className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)] animate-fade-in sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.08),_transparent_18%),radial-gradient(circle_at_20%_25%,_rgba(59,130,246,0.06),_transparent_16%)] opacity-90" />
        <div className="relative space-y-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="rounded-lg bg-slate-50 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                <img
                  src="https://via.placeholder.com/560x560/0f172a/22d3ee?text=About+Image"
                  alt="Portfolio hero"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6 space-y-4 text-center">
                <p className="text-sm uppercase tracking-[0.26em] text-[#001F3F]">About Me</p>
                <h2 className="text-3xl font-semibold text-slate-950">Salim</h2>
                <p className="text-sm text-slate-600">Senior Web Frontend Developer</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#001F3F]">About Me</p>
                <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
                  I build polished digital experiences with beautiful UI and strong frontend architecture.
                </h1>
              </div>
              <div className="space-y-5 text-slate-700 leading-8">
                <p>
                  I am a frontend developer who turns complex product ideas into responsive, high-performance React applications.
                  Every page I build is designed for clarity, speed, and better user interaction.
                </p>
                <p>
                  My experience includes building end-to-end UI solutions in enterprise and product teams, working with designers and stakeholders to ship clean, modern interfaces.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-full bg-sky-800 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-700"
                >
                  View Projects
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-sky-700 hover:text-[#001F3F]"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-slate-50 p-6 text-center shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
              <p className="text-sm uppercase tracking-[0.24em] text-[#001F3F]">Experience</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">12+</p>
              <p className="mt-2 text-sm text-slate-600">Years in frontend development</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-6 text-center shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
              <p className="text-sm uppercase tracking-[0.24em] text-[#001F3F]">Projects</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">30+</p>
              <p className="mt-2 text-sm text-slate-600">Completed UI and web apps</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-6 text-center shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
              <p className="text-sm uppercase tracking-[0.24em] text-[#001F3F]">Tools</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">React</p>
              <p className="mt-2 text-sm text-slate-600">Tailwind, Vite, TypeScript</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-slate-50 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#001F3F]">Work Experience</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">My professional journey so far</h2>
        </div>
        <div className="space-y-6">
          {experience.map((item, index) => (
            <div
              key={item.role}
              className="relative overflow-hidden rounded-lg bg-white p-6 sm:p-8 shadow-[0_15px_30px_rgba(15,23,42,0.06)]"
            >
              <div className="absolute left-5 top-8 h-[calc(100%-3rem)] w-0.5 bg-sky-200" />
              <div className="relative flex gap-5 sm:gap-8">
                <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-sky-800 text-white shadow-lg shadow-sky-500/20">
                  {index + 1}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{item.date}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.role}</h3>
                  <p className="mt-1 text-sm text-[#001F3F]">{item.company}</p>
                  <p className="mt-4 text-slate-700 leading-7">{item.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-slate-50 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#001F3F]">Education</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">My academic background</h2>
        </div>
        <div className="space-y-6">
          {education.map((item) => (
            <div key={item.degree} className="rounded-lg bg-white p-6 sm:p-8 shadow-[0_15px_30px_rgba(15,23,42,0.06)]">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{item.years}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.degree}</h3>
              <p className="mt-2 text-sm text-[#001F3F]">{item.institution}</p>
              <p className="mt-4 text-slate-700 leading-7">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-slate-50 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-600">What I Do</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Services I deliver</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group overflow-hidden rounded-lg bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition hover:border-sky-200 hover:bg-slate-50">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-800 text-white shadow-lg shadow-sky-500/20">
                <span className="text-sm font-semibold">{service.title.slice(0, 1)}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-4 text-slate-700 leading-7">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}


