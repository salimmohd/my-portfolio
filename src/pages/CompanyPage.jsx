const roles = [
  {
    title: 'Senior Web Frontend Developer',
    company: 'HashRoot Technologies Private Limited',
    date: '11/2023 - 09/2024',
    description:
      'Built responsive React applications, integrated dynamic APIs, and converted Figma designs into polished UI.',
  },
  {
    title: 'Senior Software Engineer UI/UX',
    company: 'Dietary Business Intelligence Private Limited (DBI 360)',
    date: '10/2017 - 10/2023',
    description:
      'Delivered UI/UX solutions and frontend enhancements that improved user engagement by 20%.',
  },
  {
    title: 'Senior Associate Designer',
    company: 'Tech Mahindra Limited',
    date: '01/2015 - 09/2017',
    description:
      'Created interactive visual content and campaign experiences across web and mobile.',
  },
]

export default function CompanyPage() {
  return (
    <section className="animate-fade-in space-y-10 rounded-lg border border-sky-500/10 bg-slate-950/85 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
          Company
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Work experience highlights
        </h1>
      </div>
      <div className="space-y-6">
        {roles.map((role) => (
          <article key={role.title} className="rounded-lg border border-slate-800/90 bg-slate-900/90 p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xl font-semibold text-white">{role.title}</p>
                <p className="text-sm text-slate-300">{role.company}</p>
              </div>
              <p className="text-sm font-medium text-sky-300">{role.date}</p>
            </div>
            <p className="mt-4 text-slate-300 leading-7">{role.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}



