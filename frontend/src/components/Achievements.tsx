import { motion } from 'framer-motion'
import { FiAward, FiStar, FiTarget } from 'react-icons/fi'
import { achievements } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const typeIcon: Record<string, React.ElementType> = {
  Certification: FiTarget,
  Award: FiStar,
  Achievement: FiAward,
}

export default function Achievements() {
  const { isDark } = useTheme()
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>()

  const card = isDark
    ? 'bg-dark-card border border-dark-border'
    : 'bg-white border border-gray-200 shadow-card'

  return (
    <section
      id="achievements"
      ref={ref}
      className={`section-padding ${isDark ? 'bg-dark-bg' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-2">Recognition</p>
          <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Achievements &{' '}
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-500" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, i) => {
            const TypeIcon = typeIcon[ach.type] || FiAward
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`group rounded-2xl p-5 ${card} hover:shadow-glow transition-all duration-300 cursor-default`}
              >
                {/* Icon + year row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ach.gradient} flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform`}
                  >
                    <TypeIcon size={22} className="text-white" />
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        isDark ? 'bg-dark-bg text-primary-300' : 'bg-primary-50 text-primary-700'
                      }`}
                    >
                      {ach.type}
                    </span>
                    <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{ach.year}</p>
                  </div>
                </div>

                {/* Content */}
                <h3 className={`font-bold text-sm mb-1 leading-snug ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {ach.title}
                </h3>
                <p className={`text-xs font-semibold mb-2 ${
                  isDark ? 'text-primary-400' : 'text-primary-600'
                }`}>
                  {ach.org}
                </p>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  {ach.description}
                </p>

                {/* Bottom accent line */}
                <div className={`mt-4 h-0.5 rounded-full bg-gradient-to-r ${ach.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
