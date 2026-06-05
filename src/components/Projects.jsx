const projects = [
  {
    title: 'Bold Fashion Website',
    description:
      'A modern e-commerce landing page with product highlights, responsive sections, and bold visuals.',
    tags: ['React', 'Vite', 'Responsive'],
  },
  {
    title: 'Glow Beauty',
    description:
      'A polished beauty products frontend with clean layout, smooth interactions, and product sections.',
    tags: ['React', 'Tailwind', 'UI'],
  },
  {
    title: 'Edu Prime',
    description:
      'A school website concept with modern presentation, service cards, and content-driven layout.',
    tags: ['React', 'HTML', 'CSS'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 animate-fade-in border-t border-sky-100 bg-slate-50 py-12 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">
            Featured Projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            A selection of recent work
          </h2>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="border border-slate-200 bg-white p-6 transition hover:border-sky-200 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
            <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  )
}


