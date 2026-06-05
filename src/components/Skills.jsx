const skills = [
  { label: 'React', color: 'blue' },
  { label: 'Next Js', color: 'slate' },
  { label: 'Redux', color: 'violet' },
  { label: 'TypeScript', color: 'blue' },
  { label: 'JavaScript', color: 'amber' },
  { label: 'Tailwind CSS', color: 'emerald' },
  { label: 'HTML5', color: 'orange' },
  { label: 'CSS3', color: 'blue' },
  { label: 'REST APIs', color: 'emerald' },
  { label: 'Git', color: 'rose' },
  { label: 'Figma', color: 'fuchsia' },
  { label: 'VS Code', color: 'blue' },
  { label: 'Adobe', color: 'red' },
  { label: 'Veeva', color: 'amber' },
]

function pillClasses(color) {
  const styles = {
    blue: { border: 'border-sky-600', text: 'text-sky-700', hover: 'hover:bg-sky-200' },
    slate: { border: 'border-slate-400', text: 'text-slate-700', hover: 'hover:bg-slate-200' },
    violet: { border: 'border-violet-500', text: 'text-violet-700', hover: 'hover:bg-violet-200' },
    amber: { border: 'border-amber-500', text: 'text-amber-700', hover: 'hover:bg-amber-200' },
    emerald: { border: 'border-emerald-500', text: 'text-emerald-700', hover: 'hover:bg-emerald-200' },
    orange: { border: 'border-orange-500', text: 'text-orange-700', hover: 'hover:bg-orange-200' },
    rose: { border: 'border-rose-500', text: 'text-rose-700', hover: 'hover:bg-rose-200' },
    fuchsia: { border: 'border-fuchsia-500', text: 'text-fuchsia-700', hover: 'hover:bg-fuchsia-200' },
    red: { border: 'border-red-500', text: 'text-red-700', hover: 'hover:bg-red-200' },
  }

  const style = styles[color]
  if (!style) return 'inline-flex min-w-[110px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition bg-white hover:bg-slate-200'

  return `inline-flex min-w-[110px] items-center justify-center rounded-lg border ${style.border} px-5 py-2 text-sm font-semibold transition bg-white ${style.text} ${style.hover}`
}

export default function Skills() {
  const activeSkill = 'React'

  return (
    <section id="skills" className="scroll-mt-28 animate-fade-in border-t border-sky-100 bg-slate-50 py-12 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">
            Skills & Tools
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Technologies I work with on a daily basis
          </h2>
        </div>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span key={skill.label} className={pillClasses(skill.color, skill.label === activeSkill)}>
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}


