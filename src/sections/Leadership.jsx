import { motion } from 'framer-motion'
import { Users, Calendar } from 'lucide-react'

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
            Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/70 to-gray-500/70 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-slate-950/70 border border-white/5 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-r from-white/80 to-gray-500 rounded-xl">
                <Users className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  ASSCET Member
                </h3>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar size={18} />
                  <span className="font-medium">Since August 2023</span>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  Active member of ASSCET (Association of Students for Social Change and Engineering Technology), contributing to organizational initiatives and student leadership activities. Focused on driving positive change through technology and collaborative efforts.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

