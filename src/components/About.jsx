const experience = [
  {
    role: 'Senior Web Frontend Developer',
    company: 'HashRoot Technologies Private Limited',
    period: '11/2023 - 09/2024',
    details:
      'Built responsive React applications, integrated dynamic APIs, and converted Figma designs into polished UI.',
  },
  {
    role: 'Senior Software Engineer UI/UX',
    company: 'Dietary Business Intelligence Private Limited (DBI 360)',
    period: '10/2017 - 10/2023',
    details:
      'Delivered UI/UX solutions and frontend enhancements that improved user engagement by 20%.',
  },
  {
    role: 'Senior Associate Designer',
    company: 'Tech Mahindra Limited',
    period: '01/2015 - 09/2017',
    details:
      'Created interactive visual content and campaign experiences across web and mobile.',
  },
]

const education = [
  {
    degree: 'Bachelor of Science',
    institution: 'University of Calcutta',
    years: '2008 - 2011',
  },
  {
    degree: 'Higher Secondary',
    institution: 'Mahesh Sri Ramkrishna Ashram Vidyalaya',
    years: '2006 - 2008',
  },
  {
    degree: 'Madhyamik',
    institution: 'Serampore Malina Lahiri Boys\' Academy',
    years: '2004 - 2006',
  },
]

const companies = [
  'HashRoot Technologies',
  'DBI 360',
  'Tech Mahindra',
  'Infoway Technology Solution',
  'Infoway India Web Solution',
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 space-y-14 animate-fade-in">
      <div className="rounded-lg border border-sky-500/10 bg-slate-950/85 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
          About Me
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          I am Salim, a Senior Frontend Developer with a strong UI/UX focus.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I craft clean, responsive frontend applications with React, Tailwind CSS, and modern web tools.
          My work bridges the gap between design and development, delivering polished products that feel intuitive.
        </p>
      </div>

      <div id="company" className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-lg border border-sky-500/10 bg-slate-950/85 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
            Work Experience
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Professional journey so far</h3>
          <div className="mt-8 space-y-6">
            {experience.map((item) => (
              <div key={item.role} className="rounded-lg border border-slate-800/90 bg-slate-900/90 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                  {item.period}
                </p>
                <h4 className="mt-4 text-xl font-semibold text-white">{item.role}</h4>
                <p className="mt-1 text-sm font-medium text-slate-300">{item.company}</p>
                <p className="mt-4 text-slate-300 leading-7">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div id="education" className="rounded-lg border border-sky-500/10 bg-slate-950/85 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
              Education
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Academic background</h3>
            <div className="mt-8 space-y-4">
              {education.map((item) => (
                <div key={item.degree} className="rounded-lg border border-slate-800/90 bg-slate-900/90 p-5">
                  <p className="text-xl font-semibold text-white">{item.degree}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.institution}</p>
                  <p className="mt-3 text-sm text-slate-400">{item.years}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-sky-500/10 bg-slate-950/85 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
              Company affiliations
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Companies I worked with</h3>
            <ul className="mt-8 space-y-3 text-slate-300">
              {companies.map((company) => (
                <li key={company} className="rounded-lg border border-slate-800/90 bg-slate-900/90 px-5 py-4">
                  {company}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}



