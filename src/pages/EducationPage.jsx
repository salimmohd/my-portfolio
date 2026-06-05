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

export default function EducationPage() {
  return (
    <section className="animate-fade-in space-y-10 rounded-lg border border-sky-500/10 bg-slate-950/85 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
          Education
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          My academic background
        </h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {education.map((item) => (
          <article key={item.degree} className="rounded-lg border border-slate-800/90 bg-slate-900/90 p-6">
            <p className="text-xl font-semibold text-white">{item.degree}</p>
            <p className="mt-3 text-sm text-slate-300">{item.institution}</p>
            <p className="mt-4 text-sm text-slate-400">{item.years}</p>
          </article>
        ))}
      </div>
    </section>
  )
}



