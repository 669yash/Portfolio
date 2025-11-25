import { useEffect } from 'react'
import Navigation from './components/Navigation'
import ScrollToTop from './components/ScrollToTop'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Studying from './sections/Studying'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Publications from './sections/Publications'
import Leadership from './sections/Leadership'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">
      <Navigation />
      <ScrollToTop />
      <Hero />
      <About />
      <Skills />
      <Studying />
      <Experience />
      <Projects />
      <Achievements />
      <Publications />
      <Leadership />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

