import { motion } from 'framer-motion'
import {
  BarChart3,
  Brain,
  Briefcase,
  Cloud,
  Code,
  Rocket,
  Terminal,
  Wrench,
} from 'lucide-react'

const iconMap = {
  brain: Brain,
  briefcase: Briefcase,
  'bar-chart': BarChart3,
  cloud: Cloud,
  code: Code,
  rocket: Rocket,
  terminal: Terminal,
  toolbox: Wrench,
}

export default function Skills({ profile }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/70 to-gray-500/70 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {profile.skills.map((category, index) => {
            const Icon = iconMap[category.icon]
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-950/70 border border-white/5 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group backdrop-blur"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${category.color} text-white shadow-md`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

