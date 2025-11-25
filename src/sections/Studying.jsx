import { motion } from 'framer-motion'
import { Brain, Cloud } from 'lucide-react'

const studyingItems = [
  {
    title: 'GenAI',
    icon: Brain,
    color: 'from-purple-500 via-fuchsia-500 to-pink-500',
    points: [
      'LLMs and prompt engineering',
      'RAG pipelines and embeddings',
      'Fine-tuning and evaluation',
    ],
  },
  {
    title: 'ML-Ops',
    icon: Cloud,
    color: 'from-cyan-500 via-blue-500 to-indigo-500',
    points: [
      'Model serving and monitoring',
      'CI/CD for ML systems',
      'Containerization and cloud deploys',
    ],
  },
]

export default function Studying() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const card = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="studying" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
            Studying Now
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A peek into areas I’m actively exploring and building projects in.
          </p>
          <div className="w-28 h-1 bg-gradient-to-r from-white/70 to-gray-500/70 mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {studyingItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                variants={card}
                whileHover={{ rotateX: 2, rotateY: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-slate-950/70 border border-white/5 rounded-2xl p-8 shadow-lg backdrop-blur overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-white/20 to-transparent" />
                </div>

                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.color} mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <div className="space-y-2">
                  {item.points.map((p, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 w-2 h-2 rounded-full bg-white" />
                      <span className="text-gray-200">{p}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="mt-6 p-4 rounded-xl bg-slate-900/60 border border-white/10"
                >
                  <p className="text-gray-300 text-sm">
                    Try moving your cursor over the card — it gently tilts and glows.
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

