import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'

export default function CaseStudies({ profile }) {
  return (
    <section
      id="case-studies"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/40 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
            Case Studies
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Snapshot-style cards for product and project thinking, ready for you to replace with your own PDFs.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-white/70 to-gray-500/70 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-slate-950/70 border border-white/5 rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-white/90 to-gray-400 shadow-lg">
                  <FileText className="text-slate-950" size={24} />
                </div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
                  Sample Card
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold text-white">{study.title}</h3>
              <p className="mt-3 text-gray-300 leading-relaxed">{study.summary}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {study.points.map((point) => (
                  <span
                    key={point}
                    className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full border border-white/10"
                  >
                    {point}
                  </span>
                ))}
              </div>

              <motion.a
                href={study.pdfHref}
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-950 font-semibold shadow-lg"
              >
                <Download size={18} />
                Download PDF
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
