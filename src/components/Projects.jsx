import { projectsContent } from '../content/projects'
import ScrollReveal from './ScrollReveal'

export default function Projects() {
  return (
    <ScrollReveal as="section" id="projects" className="scroll-mt-28 border-t border-sky-100 bg-slate-50 py-12 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">
              {projectsContent.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
              {projectsContent.title}
            </h2>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projectsContent.items.map((project, index) => (
            <ScrollReveal
              as="article"
              key={project.title}
              delay={index * 110}
              className="group min-h-[220px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50/40 hover:shadow-[0_18px_40px_rgba(14,116,144,0.16)]"
            >
              <h3 className="text-xl font-semibold text-slate-950 transition duration-300 group-hover:text-sky-700">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800 transition duration-300 group-hover:bg-sky-600 group-hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
