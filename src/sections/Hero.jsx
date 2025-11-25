import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state with more dramatic values
      gsap.set('.hero-text', { opacity: 0, y: 100, scale: 0.8 })
      
      // Animate in with more visible effects
      gsap.to('.hero-text', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.4,
        ease: 'power4.out',
        delay: 0.3,
      })

      // Floating emoji animation - more dramatic
      gsap.to('.floating', {
        y: isMobile ? -20 : -30,
        rotation: isMobile ? 6 : 10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      })

      // Animated background blobs - more movement
      gsap.to('.blob-1', {
        x: isMobile ? 90 : 150,
        y: isMobile ? -90 : -150,
        scale: isMobile ? 1.15 : 1.3,
        opacity: isMobile ? 0.6 : 0.7,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.blob-2', {
        x: isMobile ? -80 : -120,
        y: isMobile ? 80 : 120,
        scale: isMobile ? 1.1 : 1.2,
        opacity: isMobile ? 0.5 : 0.6,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5,
      })

      gsap.to('.blob-3', {
        x: isMobile ? 50 : 80,
        y: isMobile ? 50 : 80,
        scale: isMobile ? 1.05 : 1.1,
        opacity: isMobile ? 0.45 : 0.5,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 3,
      })

      // Add pulsing glow effect to hero text
      gsap.to('.hero-glow', {
        opacity: isMobile ? 0.5 : 0.6,
        scale: isMobile ? 1.05 : 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [isMobile])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-24 md:pb-32"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob-1 absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-white/30 to-gray-400/20 rounded-full mix-blend-screen filter blur-3xl opacity-60" />
        <div className="blob-2 absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-gray-300/25 to-white/15 rounded-full mix-blend-screen filter blur-3xl opacity-50" />
        <div className="blob-3 absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-gradient-to-r from-white/20 to-gray-500/25 rounded-full mix-blend-screen filter blur-3xl opacity-40" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(isMobile ? 8 : 15)].map((_, i) => {
            const randomLeft = Math.random() * 100
            const randomTop = Math.random() * 100
            const randomDelay = Math.random() * 3
            const randomDuration = 3 + Math.random() * 3
            
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/60 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                style={{
                  left: `${randomLeft}%`,
                  top: `${randomTop}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1.5, 0.5],
                  x: [0, (Math.random() - 0.5) * 50, 0],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: "easeInOut",
                }}
              />
            )
          })}
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="hero-text mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.img
            src="/landing-photo.jpg"
            alt="Profile image"
            className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover border border-white/10 shadow-2xl mx-auto"
            initial={{ y: 0 }}
            animate={{ y: [0, isMobile ? -4 : -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="hero-text">
          <motion.p
            className="text-lg md:text-xl text-gray-200 font-semibold mb-4 tracking-[0.2em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm
          </motion.p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight relative"
        >
          <div className="relative inline-block">
            <motion.div
              className="hero-glow absolute inset-0 bg-gradient-to-r from-white/20 via-gray-300/20 to-gray-500/20 blur-3xl rounded-full"
              style={{ filter: 'blur(40px)' }}
            />
            <motion.span
              initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.5)]"
            >
              Yash Anil Mali
            </motion.span>
          </div>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <TypingAnimation />
        </motion.div>

        

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6 md:mt-10 hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, staggerChildren: 0.1 }}
        >
          <motion.a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 px-5 py-3 md:px-6 md:py-3 bg-gradient-to-r from-white to-gray-200 text-gray-900 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1, y: -5, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Download size={20} />
            </motion.div>
            Download Resume
          </motion.a>

          <motion.a
            href="https://github.com/669yash"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 md:px-6 md:py-3 bg-slate-900/70 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl border border-white/10 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -5, borderColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Github size={20} />
            </motion.div>
            GitHub
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/yashanilmali"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 md:px-6 md:py-3 bg-slate-900/70 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl border border-white/10 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -5, borderColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Linkedin size={20} />
            </motion.div>
            LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="hidden sm:block absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none md:pointer-events-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.a
          href="#about"
          className="text-white/60 hover:text-white transition-colors"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.a>
      </motion.div>

    </section>
  )
}

function TypingAnimation() {
  const texts = [
    'Machine Learning Developer',
    'Data Analytics Specialist',
  ]
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[textIndex]

      if (!isDeleting && currentIndex < fullText.length) {
        setCurrentText(fullText.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      } else if (isDeleting && currentIndex > 0) {
        setCurrentText(fullText.substring(0, currentIndex - 1))
        setCurrentIndex(currentIndex - 1)
      } else if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false)
        setTextIndex((textIndex + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, textIndex, texts])

  return (
    <motion.h2
      className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-200 min-h-[60px] md:min-h-[80px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <motion.span
        className="inline-block ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        |
      </motion.span>
    </motion.h2>
  )
}
