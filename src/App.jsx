import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import ScrollToTop from './components/ScrollToTop'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Studying from './sections/Studying'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import CaseStudies from './sections/CaseStudies'
import Achievements from './sections/Achievements'
import Publications from './sections/Publications'
import Leadership from './sections/Leadership'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import { profiles } from './data/profileData'

function App() {
  const [selectedProfile, setSelectedProfile] = useState('ai')

  useEffect(() => {
    // Prevent upward movement on refresh: disable smooth initially, then enable
    const el = document.documentElement
    const prev = el.style.scrollBehavior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    el.style.scrollBehavior = 'auto'
    const id = setTimeout(() => {
      el.style.scrollBehavior = 'smooth'
    }, 600)
    return () => {
      clearTimeout(id)
      el.style.scrollBehavior = prev
    }
  }, [])

  useEffect(() => {
    const savedProfile = window.localStorage.getItem('portfolio-profile')
    if (savedProfile && profiles[savedProfile]) {
      setSelectedProfile(savedProfile)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('portfolio-profile', selectedProfile)
  }, [selectedProfile])

  const profile = profiles[selectedProfile]

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white"
    >
      <Navigation selectedProfile={selectedProfile} />
      <ScrollToTop />
      <Hero
        profile={profile}
        selectedProfile={selectedProfile}
        onSelectProfile={setSelectedProfile}
      />
      <About profile={profile} />
      <Skills profile={profile} />
      <Studying profile={profile} />
      <Experience profile={profile} />
      <Projects profile={profile} />
      {selectedProfile === 'product' && <CaseStudies profile={profile} />}
      <Achievements />
      <Publications />
      <Leadership />
      <Certifications />
      <Contact />
      <Footer />
    </motion.div>
  )
}

export default App

