import { motion } from 'framer-motion'
import {
  FaGithub, FaLinkedin, FaTwitter,
} from 'react-icons/fa'
import { FiDownload, FiMapPin, FiMail } from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiTypescript, SiNestjs, SiDocker, SiMongodb, SiMysql } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const techStack = [
  { Icon: SiReact, name: 'React', color: '#61DAFB' },
  { Icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { Icon: SiNestjs, name: 'NestJS', color: '#E0234E' },
  { Icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { Icon: FaAws, name: 'AWS', color: '#FF9900' },
  { Icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { Icon: SiMysql, name: 'MySQL', color: '#4479A1' },
]

const strengths = [
  { icon: '🏗️', title: 'System Architecture', desc: 'Designing scalable, maintainable systems' },
  { icon: '⚡', title: 'Performance Optimization', desc: 'Profiling and optimizing for speed' },
  { icon: '🔐', title: 'Security Best Practices', desc: 'Building secure, robust applications' },
  { icon: '🤝', title: 'Team Collaboration', desc: 'Mentoring and knowledge sharing' },
]

export default function About() {
  const { isDark } = useTheme()
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>()

  const card = isDark
    ? 'bg-dark-card border border-dark-border'
    : 'bg-white border border-gray-200 shadow-card'

  return (
    <section
      id="about"
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
          <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-2">Get to know me</p>
          <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-500" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ── Left: Profile card ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Avatar + name card */}
            <div className={`rounded-2xl p-6 ${card} flex items-start gap-5`}>
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-glow">
                  <span className="text-white text-3xl font-black">AK</span>
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-dark-bg" />
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-0.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {personalInfo.name}
                </h3>
                <p className="text-primary-400 font-medium text-sm mb-3">{personalInfo.title}</p>
                <div className={`flex items-center gap-1.5 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <FiMapPin size={14} className="text-primary-400" />
                  {personalInfo.location}
                </div>
                <div className={`flex items-center gap-1.5 text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <FiMail size={14} className="text-primary-400" />
                  {personalInfo.email}
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className={`rounded-2xl p-6 ${card}`}>
              <h4 className={`font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Professional Summary</h4>
              <p className={`leading-relaxed text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {personalInfo.bio}
              </p>
            </div>

            {/* Social + Download */}
            <div className={`rounded-2xl p-6 ${card} flex flex-wrap items-center justify-between gap-4`}>
              <div className="flex gap-3">
                {[
                  { Icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
                  { Icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
                  { Icon: FaTwitter, href: personalInfo.twitter, label: 'Twitter', color: 'hover:text-sky-400' },
                ].map(({ Icon, href, label, color = 'hover:text-white' }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    aria-label={label}
                    className={`p-2.5 rounded-xl transition-all ${
                      isDark
                        ? `text-gray-400 hover:bg-white/5 ${color}`
                        : `text-gray-500 hover:bg-gray-100 ${color}`
                    }`}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold transition-colors"
              >
                <FiDownload size={15} />
                Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* ── Right ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Key strengths */}
            <div className={`rounded-2xl p-6 ${card}`}>
              <h4 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Strengths</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {strengths.map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className={`flex items-start gap-3 p-3 rounded-xl ${
                      isDark ? 'bg-dark-bg/60' : 'bg-gray-50'
                    }`}
                  >
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</p>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className={`rounded-2xl p-6 ${card}`}>
              <h4 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Technologies I Work With
              </h4>
              <div className="grid grid-cols-4 gap-3">
                {techStack.map(({ Icon, name, color }) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl cursor-default transition-all ${
                      isDark ? 'bg-dark-bg/60 hover:bg-dark-bg' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={28} style={{ color }} />
                    <span className={`text-xs font-medium text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: '2+', l: 'Years Coding', g: 'from-blue-500 to-cyan-500' },
                { v: '5+', l: 'Projects Done', g: 'from-purple-500 to-pink-500' },
                { v: '3+', l: 'Happy Clients', g: 'from-green-500 to-emerald-500' },
                { v: '10+', l: 'Technologies', g: 'from-orange-500 to-red-500' },
              ].map(({ v, l, g }) => (
                <div key={l} className={`rounded-2xl p-5 ${card} text-center`}>
                  <div className={`text-3xl font-black bg-gradient-to-r ${g} bg-clip-text text-transparent mb-1`}>
                    {v}
                  </div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
