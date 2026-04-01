import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import { testimonials } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function Testimonials() {
  const { isDark } = useTheme()
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (dir: number) => {
    setDirection(dir)
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length)
  }

  const t = testimonials[current]

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  }

  const card = isDark
    ? 'bg-dark-card border border-dark-border'
    : 'bg-white border border-gray-200 shadow-card'

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`section-padding ${isDark ? 'bg-dark-card/30' : 'bg-white'}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-2">Kind words</p>
          <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
            What People <span className="gradient-text">Say</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-500" />
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className={`p-8 sm:p-10 ${card}`}
              >
                {/* Quote icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center mb-6`}>
                  <FiMessageSquare size={22} className="text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} size={18} className="text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className={`text-lg sm:text-xl leading-relaxed mb-8 italic ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{t.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-bold text-sm">{t.initials}</span>
                  </div>
                  <div>
                    <p className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.name}</p>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2.5 bg-primary-500'
                      : `w-2.5 h-2.5 ${isDark ? 'bg-dark-border hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'}`
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => go(-1)}
                className={`p-2.5 rounded-xl border transition-all ${
                  isDark
                    ? 'border-dark-border text-gray-400 hover:border-primary-500 hover:text-primary-400'
                    : 'border-gray-200 text-gray-500 hover:border-primary-300 hover:text-primary-600 bg-white'
                }`}
              >
                <FiChevronLeft size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => go(1)}
                className={`p-2.5 rounded-xl border transition-all ${
                  isDark
                    ? 'border-dark-border text-gray-400 hover:border-primary-500 hover:text-primary-400'
                    : 'border-gray-200 text-gray-500 hover:border-primary-300 hover:text-primary-600 bg-white'
                }`}
              >
                <FiChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mini cards below */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {testimonials.map((t2, i) => (
            <motion.button
              key={t2.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className={`p-4 rounded-xl text-left transition-all border ${
                current === i
                  ? 'ring-2 ring-primary-500 ' + (isDark ? 'border-primary-500/30 bg-dark-card' : 'border-primary-200 bg-primary-50')
                  : isDark
                  ? 'border-dark-border bg-dark-card hover:border-primary-500/30'
                  : 'border-gray-200 bg-white hover:border-primary-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t2.avatarGradient} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-bold">{t2.initials}</span>
                </div>
                <div>
                  <p className={`text-xs font-semibold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>{t2.name}</p>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{t2.role}</p>
                </div>
              </div>
              <p className={`text-xs line-clamp-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>"{t2.text}"</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
