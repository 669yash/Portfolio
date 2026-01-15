import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const education = [
  {
    institution: 'MIT Academy of Engineering',
    period: '2022–2026',
    degree: 'Computer Engineering',
    cgpa: 'CGPA 8.1',
    icon: GraduationCap,
  },
  {
    institution: 'Kendriya Vidyalaya Varangaon',
    period: 'Completed',
    degree: 'High School',
    cgpa: '81.6%',
    icon: BookOpen,
  },
  {
    institution: 'Orion CBSE School',
    period: 'Completed',
    degree: 'School',
    cgpa: '90.8%',
    icon: Award,
  },
]

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/70 to-gray-500/70 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-gray-500/30 to-transparent rounded-2xl blur-3xl opacity-40" />
              <div className="relative bg-slate-950/70 border border-white/5 rounded-2xl p-8 shadow-2xl backdrop-blur">
                <p className="text-gray-100 leading-relaxed text-lg">
                  I'm a final-year Computer Engineering student with a passion for Machine Learning, Generative AI, and Data Analytics. I love solving real-world problems with AI-driven solutions, whether it's deep learning models, interactive dashboards, or cloud-based applications.
                </p>
                <p className="text-gray-100 leading-relaxed text-lg mt-4">
                  I'm self-driven, curious, and constantly learning whether it's building intelligent systems, experimenting with new ML architectures, or deploying solutions on AWS.
                </p>
                <p className="text-gray-100 leading-relaxed text-lg mt-4">
                  I strongly value teamwork, leadership, and clear communication. Whether leading student teams or collaborating in internships, I always focus on creativity, problem-solving, and helping teams achieve shared goals.
                </p>
                <p className="text-gray-100 leading-relaxed text-lg mt-4">
                  Beyond tech, I enjoy playing football, cooking, and traveling new places.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-100">
                Education Timeline
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {education.map((edu, index) => {
                  const Icon = edu.icon
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="relative pl-8 border-l-2 border-white/20"
                    >
                      <div className="absolute -left-3 top-0 w-6 h-6 bg-white rounded-full border-4 border-slate-900" />
                      <div className="bg-slate-950/60 border border-white/5 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow backdrop-blur">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-white/10 rounded-lg">
                            <Icon className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-white">
                              {edu.institution}
                            </h4>
                            <p className="text-gray-400 mt-1">
                              {edu.degree} • {edu.period}
                            </p>
                            <p className="text-white font-semibold mt-2">
                              {edu.cgpa}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

