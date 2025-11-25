import { motion } from 'framer-motion'
import { FileText, Calendar } from 'lucide-react'

export default function Publications() {
  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
            Publications
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
                <FileText className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  AI-Based Diet Planning System
                </h3>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar size={18} />
                  <span className="font-medium">IPR Published on 04 July 2025</span>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  A comprehensive patent publication detailing an innovative AI-driven diet planning system that leverages machine learning algorithms to provide personalized nutrition recommendations and meal delivery at your doorstep.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

