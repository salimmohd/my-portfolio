import { Link } from 'react-router-dom'

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

export default function AboutPage() {
  return (
    <main className="w-full bg-white text-slate-950">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="overflow-hidden rounded-sm bg-slate-200 shadow-[0_20px_45px_rgba(15,23,42,0.14)]">
            <img
              src="https://via.placeholder.com/520x520/e5e7eb/0f172a?text=Profile"
              alt="Salim"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
              About Me
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Crafting Digital{' '}
              <span className="text-sky-600">Experiences</span> with
              Precision
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-700">
              I am Salim, a Senior Web Frontend Developer specializing in
              UI/UX with over 12 years of experience. My expertise lies in
              React, Next.js, and modern CSS architectures, focusing on
              performance and user-centricity.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-700">
              My background spans both design and development, allowing me to
              bridge the gap between Figma prototypes and production code.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-slate-950 px-5 py-3 text-xs font-semibold text-white transition hover:bg-slate-800"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-sm border border-sky-600 px-5 py-3 text-xs font-semibold text-sky-700 transition hover:bg-sky-50"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-950">
            Work Experience
          </h2>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-500">
            My professional journey so far
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute left-3 top-0 h-full w-px bg-slate-300" />

          <div className="space-y-10">
            {experience.map((item) => (
              <article key={item.role} className="relative pl-10">
                <span className="absolute left-1.5 top-1.5 h-3 w-3 rounded-sm border-2 border-sky-600 bg-white" />

                <p className="inline-flex rounded-sm bg-sky-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-sky-700">
                  {item.date}
                </p>

                <h3 className="mt-3 text-xl font-bold text-slate-950">
                  {item.role}
                </h3>

                <p className="mt-1 text-sm font-medium text-sky-700">
                  {item.company}
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION - SEPARATE SECTION */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-950">Education</h2>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-500">
              My academic background
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {education.map((item) => (
              <article
                key={item.degree}
                className="rounded-sm border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                  {item.years}
                </p>

                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  {item.degree}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-700">
                  {item.institution}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO - SEPARATE SECTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-950">What I Do</h2>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-500">
              Services I deliver
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-sm border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-sky-600 text-sm font-bold text-white">
                  {service.title.slice(0, 1)}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}