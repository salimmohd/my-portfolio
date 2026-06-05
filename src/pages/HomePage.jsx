import Hero from '../components/Hero'
import Services from '../components/Services'
import Skills from '../components/Skills'

export default function HomePage() {
  return (
    <div className="space-y-20">
      <Hero />
      <Services />
      <Skills />
    </div>
  )
}
