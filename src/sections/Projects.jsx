import { motion } from 'framer-motion'
import { Code } from 'lucide-react'

const projects = [
  {
    title: 'CrayFit – AI Diet Planner',
    description: 'An intelligent diet planning system powered by deep learning algorithms, built with MERN stack for personalized nutrition recommendations.',
    tech: ['Deep Learning', 'MERN', 'TensorFlow', 'React', 'Node.js'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'BrandSnap AI – GenAI Content Creator',
    description: 'A generative AI-powered content creation platform using React and Gemini API for automated marketing content generation.',
    tech: ['React', 'Gemini API', 'Generative AI', 'JavaScript'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Sentimental Analysis using Python',
    description: 'NLP-based sentiment analysis system that processes RSS feeds to extract and analyze emotional sentiment from text data.',
    tech: ['Python', 'NLP', 'RSS Feeds', 'Machine Learning'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'EdTech Career Counseling Chatbot',
    description: 'An intelligent ML-powered chatbot that provides personalized career counseling and guidance for students in the education sector.',
    tech: ['ML', 'NLP', 'Chatbot', 'Python'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Weather Forecasting using ML',
    description: 'Machine learning model for accurate weather prediction using historical meteorological data and advanced forecasting algorithms.',
    tech: ['Machine Learning', 'Python', 'Data Science', 'Scikit-learn'],
    color: 'from-indigo-500 to-purple-500',
  },
]

export default function Projects() {
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
            Projects
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-slate-950/70 border border-white/5 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group backdrop-blur"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="uppercase text-[11px] tracking-[0.3em] text-gray-500">
                Featured Build
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

