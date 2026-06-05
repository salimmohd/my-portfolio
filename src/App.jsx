import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import EducationPage from './pages/EducationPage'
import CompanyPage from './pages/CompanyPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sky-100/90 via-transparent to-transparent pointer-events-none" />
        <Navigation />
        <div className="relative z-10 pt-20">
          <div>
            <main className="space-y-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
