import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setResult({ ok: true })
        setFormData({ name: '', email: '', message: '' })
      } else {
        const data = await res.json().catch(() => ({}))
        setResult({ ok: false, error: data?.error || 'Failed to send' })
      }
    } catch (err) {
      setResult({ ok: false, error: 'Network error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-screen filter blur-2xl opacity-50 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/20 rounded-full mix-blend-screen filter blur-2xl opacity-40 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/70 to-gray-500/70 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:maliyash1050@gmail.com"
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-4 p-4 bg-slate-950/70 border border-white/5 rounded-xl shadow-lg hover:shadow-2xl transition-all group backdrop-blur"
              >
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">maliyash1050@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919511970363"
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-4 p-4 bg-slate-950/70 border border-white/5 rounded-xl shadow-lg hover:shadow-2xl transition-all group backdrop-blur"
              >
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-medium">+91 9511970363</p>
                </div>
              </motion.a>

              <div className="flex gap-4 pt-4">
                <motion.a
                  href="https://github.com/669yash"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-slate-950/70 border border-white/5 rounded-xl shadow-lg hover:shadow-2xl transition-all backdrop-blur"
                >
                  <Github className="text-white" size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yashanilmali"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-slate-950/70 border border-white/5 rounded-xl shadow-lg hover:shadow-2xl transition-all backdrop-blur"
                >
                  <Linkedin className="text-white" size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-slate-950/70 border border-white/5 rounded-2xl p-8 shadow-2xl backdrop-blur">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/40 focus:border-transparent bg-slate-950/60 text-white placeholder-gray-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/40 focus:border-transparent bg-slate-950/60 text-white placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/40 focus:border-transparent bg-slate-950/60 text-white placeholder-gray-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-3 md:gap-2 px-5 md:px-6 py-4 md:py-3 bg-gradient-to-r from-white to-gray-400 text-gray-900 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
                {result && (
                  <div className={`mt-4 text-sm font-medium ${result.ok ? 'text-green-400' : 'text-red-400'}`}>
                    {result.ok ? 'Message sent successfully.' : result.error}
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}

