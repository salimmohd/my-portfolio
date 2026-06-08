import ScrollReveal from './ScrollReveal'
import { skillsContent } from '../content/portfolio'

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
  return (
    <ScrollReveal as="section" id="skills" className="scroll-mt-28 border-t border-sky-100 bg-slate-50 py-12 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">
            {skillsContent.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            {skillsContent.title}
          </h2>
        </div>
        <div className="flex flex-wrap gap-4">
          {skillsContent.items.map((skill, index) => (
            <ScrollReveal
              as="span"
              key={skill.label}
              delay={index * 45}
              direction="scale"
              className={pillClasses(
                skill.color,
                skill.label === skillsContent.activeSkill,
              )}
            >
              {skill.label}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}


