import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMapPin, FiBriefcase, FiClock, FiChevronDown, FiCheck, FiStar } from 'react-icons/fi'
import { experience } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function Experience() {
  const { isDark } = useTheme()
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>()
  const [expanded, setExpanded] = useState<number | null>(0)

  const card = isDark
    ? 'bg-dark-card border border-dark-border'
    : 'bg-white border border-gray-200 shadow-card'

  return (
    <section
      id="experience"
      ref={ref}
      className={`section-padding ${isDark ? 'bg-dark-bg' : 'bg-gray-50'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-2">Where I've worked</p>
          <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-500" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/60 via-purple-500/40 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experience.map((job, i) => {
              const isOpen = expanded === i
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative sm:grid sm:grid-cols-2 sm:gap-8 ${!isLeft ? 'sm:direction-rtl' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-6 z-10 hidden sm:block">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${job.gradient} ring-4 ${
                      isDark ? 'ring-dark-bg' : 'ring-gray-50'
                    }`} />
                  </div>

                  {/* Card (full width on mobile, half on desktop) */}
                  <div className={`${isLeft ? 'sm:col-start-1' : 'sm:col-start-2'} sm:pl-4 sm:pr-0`}>
                    <div
                      className={`rounded-2xl overflow-hidden ${card} transition-all duration-300 ${
                        isOpen ? 'ring-2 ring-primary-500/50' : ''
                      }`}
                    >
                      {/* Card header */}
                      <button
                        onClick={() => setExpanded(isOpen ? null : i)}
                        className="w-full p-5 text-left"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-4">
                            {/* Company logo */}
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.gradient} flex items-center justify-center flex-shrink-0 shadow-glow text-white font-black text-sm`}
                            >
                              {job.logo}
                            </div>
                            <div>
                              <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {job.role}
                              </h3>
                              <p className="text-primary-400 font-semibold text-sm">{job.company}</p>

                              <div className="flex flex-wrap gap-3 mt-2">
                                <span className={`flex items-center gap-1 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                                  <FiClock size={12} />
                                  {job.duration}
                                </span>
                                <span className={`flex items-center gap-1 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                                  <FiMapPin size={12} />
                                  {job.location}
                                </span>
                                <span className={`flex items-center gap-1 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                                  <FiBriefcase size={12} />
                                  {job.type}
                                </span>
                              </div>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className={`flex-shrink-0 mt-1 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}
                          >
                            <FiChevronDown size={20} />
                          </motion.div>
                        </div>

                        {/* Tech tags always visible */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {job.tech.map((t) => (
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
                      </button>

                      {/* Expanded content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className={`px-5 pb-5 space-y-4 border-t ${isDark ? 'border-dark-border' : 'border-gray-100'}`}>
                              {/* Responsibilities */}
                              <div className="pt-4">
                                <h4 className={`text-sm font-bold mb-2.5 flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                  <FiBriefcase size={14} className="text-primary-400" />
                                  Responsibilities
                                </h4>
                                <ul className="space-y-1.5">
                                  {job.responsibilities.map((r, j) => (
                                    <li key={j} className={`flex items-start gap-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                                      {r}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Achievements */}
                              <div>
                                <h4 className={`text-sm font-bold mb-2.5 flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                  <FiStar size={14} className="text-yellow-400" />
                                  Key Achievements
                                </h4>
                                <ul className="space-y-1.5">
                                  {job.achievements.map((a, j) => (
                                    <li key={j} className={`flex items-start gap-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                      <FiCheck size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                                      {a}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Empty column for alternating layout */}
                  <div className={isLeft ? 'sm:col-start-2' : 'sm:col-start-1'} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
