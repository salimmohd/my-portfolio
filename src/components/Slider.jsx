const slides = [
  {
    title: 'Portfolio Launch',
    description: 'A clean React portfolio design with separate header, sidebar, and slider sections.',
  },
  {
    title: 'Project Showcase',
    description: 'Highlight recent work with simple cards and responsive layout.',
  },
  {
    title: 'Design System',
    description: 'Use consistent spacing, color, and typography for a polished feel.',
  },
]

export default function Slider() {
  return (
    <section className="app-slider">
      <h2>Featured Sections</h2>
      <div className="slide-list">
        {slides.map((slide) => (
          <div key={slide.title} className="slide-card">
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
