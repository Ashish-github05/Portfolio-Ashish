import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const categories = ['All', 'Full Stack', 'Frontend', 'Backend']

export default function Projects() {
  const { isDark } = useTheme()
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>()
  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(filter))

  const countFor = (cat: string) =>
    cat === 'All' ? projects.length : projects.filter((p) => p.tags.includes(cat)).length

  const card = isDark
    ? 'bg-dark-card border border-dark-border'
    : 'bg-white border border-gray-200 shadow-card'

  return (
    <section
      id="projects"
      ref={ref}
      className={`section-padding ${isDark ? 'bg-dark-card/30' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-2">What I've built</p>
          <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-500" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all border ${
                filter === cat
                  ? 'bg-primary-500 text-white border-transparent shadow-glow'
                  : isDark
                  ? 'border-dark-border text-gray-400 hover:text-white hover:border-primary-500/40'
                  : 'border-gray-200 text-gray-600 hover:text-gray-900 hover:border-primary-300 bg-white'
              }`}
            >
              {cat}
              <span className={`ml-1.5 text-xs ${filter === cat ? 'opacity-80' : 'opacity-50'}`}>
                ({countFor(cat)})
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className={`group rounded-2xl overflow-hidden ${card} hover:shadow-glow-lg transition-all duration-300`}
              >
                {/* Gradient banner */}
                <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-semibold border border-white/20">
                      ⭐ Featured
                    </div>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-semibold">
                    {project.category}
                  </div>

                  {/* Dot pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      style={{ backgroundImage: `radial-gradient(white 1.5px, transparent 1.5px)`, backgroundSize: '20px 20px' }}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Project number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/25 font-black text-6xl select-none">
                      {project.id.toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Hover overlay — only Live Demo */}
                  <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.94 }}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold hover:bg-white/30 transition-colors"
                    >
                      <FiExternalLink size={16} />
                      View Live
                    </motion.a>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className={`font-bold text-base mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                          isDark
                            ? 'bg-dark-bg text-primary-300 border border-dark-border'
                            : 'bg-primary-50 text-primary-700 border border-primary-100'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Live link row */}
                  <div className={`pt-3 border-t ${isDark ? 'border-dark-border' : 'border-gray-100'}`}>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      <FiExternalLink size={14} />
                      Visit Live Site
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
