import { motion } from 'framer-motion'
import { Trophy, Award, Star } from 'lucide-react'

const achievements = [
  {
    title: 'Datathon 2025',
    position: '2nd Runner-Up',
    description:
      'Built a blockchain-based carbon credit marketplace ensuring transparent tracking, secure transactions, emissions verification, and incentivized sustainability.',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'VytoHack',
    position: 'Finalist',
    description:
      'Developed CNN and YOLO models to predict Indian ragas using audio-visual features and deep learning classification.',
    icon: Award,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Atos Srijan 2025',
    position: 'Jury Round',
    description:
      'Created GenAI-driven brand campaign content including marketing copy, visuals, and audience-focused engagement strategies.',
    icon: Star,
    color: 'from-purple-500 to-pink-500',
  },
]

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/70 to-gray-500/70 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -15, scale: 1.05, rotateY: 5 }}
                className="relative bg-slate-950/70 border border-white/5 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group backdrop-blur"
              >
                <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={40} />
                </div>
                <div className="pt-10">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                    {achievement.position}
                  </p>
                  <p className="mt-4 text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

