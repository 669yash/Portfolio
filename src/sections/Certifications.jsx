import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'AWS Cloud Foundations',
    provider: 'Amazon Web Services',
    link: 'https://drive.google.com/file/d/1aF1qdYbY_vQxIT4YjvxSq87Zdx6TamhW/view?usp=sharing', // Replace with actual link
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'AWS Cloud Architecting',
    provider: 'Amazon Web Services',
    link: 'https://drive.google.com/file/d/12Ngvp_g0Q2dKEBtdUx0mhdUdYwa-SFoq/view?usp=sharing', // Replace with actual link
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Cloud Computing (NPTEL)',
    provider: 'NPTEL',
    link: 'https://drive.google.com/file/d/1cyJeSgHF2U9HF4jCy4KVb8v-PKLSRWI_/view?usp=sharing', // Replace with actual link
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Business Development (NPTEL)',
    provider: 'NPTEL',
    link: 'https://drive.google.com/file/d/1P8za3ZkmnQwCULerZvn3Wa7hac_B_Az0/view?usp=sharing', // Replace with actual link
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Software Testing (NPTEL)',
    provider: 'NPTEL',
    link: 'https://drive.google.com/file/d/1mk5QSddOuDoCsSdLaHWu4BaJzwxh8iC5/view?usp=sharing', // Replace with actual link
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Enterprise Data Science (IBM)',
    provider: 'IBM',
    link: 'https://drive.google.com/file/d/1kxxTZh5bhl1C-_tlPfF_mLxJpiZhYhgM/view?usp=sharing', // Replace with actual link
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Infosys Power BI',
    provider: 'Infosys',
    link: 'https://drive.google.com/file/d/1S8PnhZ10GWPaUu44HobBBbyDAmmJrGWT/view?usp=sharing', // Replace with actual link
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'CCNA',
    provider: 'Cisco',
    link: 'https://drive.google.com/drive/folders/1G-le2C4hN5AHcU7UDHXCVz1Lae7aGKwY?usp=sharing', // Replace with actual link
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Infosys Blockchain',
    provider: 'Infosys',
    link: 'https://drive.google.com/file/d/1eGUTZcikf5Gg07Yggcs64bSofcdH_eGz/view?usp=sharing', // Replace with actual link
    color: 'from-cyan-500 to-blue-500',
  },
]

export default function Certifications() {
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
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
            Certifications
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
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
              className="group bg-slate-950/70 border border-white/5 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden backdrop-blur"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-r ${cert.color} opacity-10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform`} />
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${cert.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {cert.provider}
                </p>
                <div className="flex items-center gap-2 text-gray-300 font-medium">
                  <span className="text-sm">View Certificate</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

