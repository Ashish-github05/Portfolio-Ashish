import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiArrowDown, FiExternalLink, FiMail } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'

const roles = [
  'Full Stack Developer',
  'Software Engineer',
  'Node.js Specialist',
  'Problem Solver',
]

const terminalLines = [
  { text: '$ developer --profile', color: 'text-green-400', delay: 0 },
  { text: '', delay: 400 },
  { text: '  Name    : Ashish Kumar', color: 'text-slate-300', delay: 700 },
  { text: '  Role    : Full Stack Developer', color: 'text-slate-300', delay: 1000 },
  { text: '  Stack   : React · NestJS · TypeScript', color: 'text-slate-300', delay: 1300 },
  { text: '  Based   : Bangalore, India', color: 'text-slate-300', delay: 1600 },
  { text: '  Status  :  Open to opportunities', color: 'text-green-400', delay: 1900 },
  { text: '', delay: 2200 },
  { text: '$ skills --top', color: 'text-green-400', delay: 2500 },
  { text: '', delay: 2700 },
  { text: '  React    ████████████ 95%', color: 'text-blue-400', delay: 2900 },
  { text: '  NestJS   ██████████░░ 85%', color: 'text-red-400', delay: 3100 },
  { text: '  Node.js  ███████████░ 90%', color: 'text-green-400', delay: 3300 },
  { text: '  Docker   █████████░░░ 82%', color: 'text-cyan-400', delay: 3500 },
  { text: '', delay: 3700 },
  { text: '$ _', color: 'text-green-400', delay: 3900, cursor: true },
]

function TerminalWindow({ isDark }: { isDark: boolean }) {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setShown(i + 1), line.delay),
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-2xl border font-mono text-sm ${
        isDark ? 'bg-[#0d1117] border-gray-700/60' : 'bg-gray-900 border-gray-700'
      }`}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800/60 border-b border-gray-700/60">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/90" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/90" />
          <span className="w-3 h-3 rounded-full bg-green-500/90" />
        </div>
        <span className="text-gray-500 text-xs">portfolio.sh</span>
        <div className="w-16" />
      </div>

      {/* Content */}
      <div className="p-5 min-h-[300px]">
        {terminalLines.slice(0, shown).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`leading-6 ${line.color || 'text-gray-600'}`}
          >
            {line.text || '\u00A0'}
            {line.cursor && <span className="cursor-blink ml-0.5">█</span>}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const { isDark } = useTheme()
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = roles[roleIdx]
    const speed = deleting ? 40 : 90
    const timer = setTimeout(() => {
      if (!deleting && displayed === full) {
        setTimeout(() => setDeleting(true), 1800)
      } else if (deleting && displayed === '') {
        setDeleting(false)
        setRoleIdx((i) => (i + 1) % roles.length)
      } else {
        setDisplayed(
          deleting ? full.slice(0, displayed.length - 1) : full.slice(0, displayed.length + 1),
        )
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [displayed, deleting, roleIdx])

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden ${
        isDark
          ? 'bg-gradient-to-br from-dark-bg via-dark-card to-[#130f3e]'
          : 'bg-gradient-to-br from-slate-50 via-indigo-50/50 to-purple-50/50'
      }`}
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { className: 'top-16 right-[5%] w-80 h-80 bg-primary-600/10', x: [0, 60, 0], y: [0, -40, 0], dur: 22 },
          { className: 'bottom-16 left-[5%] w-96 h-96 bg-purple-600/10', x: [0, -50, 0], y: [0, 50, 0], dur: 28 },
          { className: 'top-1/2 left-1/3 w-64 h-64 bg-cyan-600/5', x: [0, 30, 0], y: [0, -20, 0], dur: 18 },
        ].map((b, i) => (
          <motion.div
            key={i}
            animate={{ x: b.x, y: b.y }}
            transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
            className={`absolute rounded-full blur-3xl ${b.className}`}
          />
        ))}
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(${isDark ? '#6366f1' : '#4f46e5'} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left ── */}
          <div>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-lg mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
            >
              Hello, I'm 👋
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-5xl sm:text-6xl xl:text-7xl font-black mb-4 leading-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Ashish{' '}
              <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Kumar
              </span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-2xl sm:text-3xl font-bold mb-6 h-10 ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              {displayed}
              <span className="text-primary-400 cursor-blink">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-lg leading-relaxed mb-8 max-w-lg ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {personalInfo.tagline}. Passionate about clean architecture, open source, and
              shipping products people love.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-colors shadow-glow"
              >
                View Projects
                <FiExternalLink size={17} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border-2 font-semibold transition-all ${
                  isDark
                    ? 'border-primary-500/60 text-primary-400 hover:bg-primary-500/10'
                    : 'border-primary-500 text-primary-600 hover:bg-primary-50'
                }`}
              >
                <FiMail size={17} />
                Contact Me
              </motion.button>

            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3"
            >
              <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Follow:</span>
              {[
                { Icon: FaGithub, href: personalInfo.github, label: 'GitHub', hover: 'hover:text-white' },
                { Icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', hover: 'hover:text-blue-400' },
                { Icon: FaTwitter, href: personalInfo.twitter, label: 'Twitter', hover: 'hover:text-sky-400' },
              ].map(({ Icon, href, label, hover }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                  className={`p-2 rounded-lg transition-all ${
                    isDark
                      ? `text-gray-400 hover:bg-white/5 ${hover}`
                      : `text-gray-500 hover:bg-gray-100 ${hover}`
                  }`}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Terminal ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            {/* Floating badges */}
            {['React', 'NestJS', 'Node.js', 'TypeScript', 'Express'].map((t, i) => (
              <motion.span
                key={t}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                className={`absolute z-10 px-3 py-1 rounded-full text-xs font-bold border shadow-lg select-none ${
                  isDark
                    ? 'bg-dark-card border-dark-border text-primary-300'
                    : 'bg-white border-gray-200 text-primary-700 shadow-card'
                }`}
                style={{
                  top: `${[2, 72, 5, 62, 38][i]}%`,
                  right: `${[-2, -6, 88, 83, 92][i]}%`,
                }}
              >
                {t}
              </motion.span>
            ))}

            <TerminalWindow isDark={isDark} />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl border ${
            isDark
              ? 'bg-dark-card/50 border-dark-border backdrop-blur-sm'
              : 'bg-white/80 border-gray-200 backdrop-blur-sm shadow-card'
          }`}
        >
          {[
            { v: '2+', l: 'Years Experience', c: 'text-blue-400' },
            { v: '5+', l: 'Projects Delivered', c: 'text-purple-400' },
            { v: '3+', l: 'Happy Clients', c: 'text-green-400' },
            { v: '10+', l: 'Technologies', c: 'text-pink-400' },
          ].map(({ v, l, c }) => (
            <div key={l} className="text-center">
              <div className={`text-3xl sm:text-4xl font-black ${c} mb-1`}>{v}</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Scroll down</span>
        <FiArrowDown className="text-primary-500" size={18} />
      </motion.div>
    </section>
  )
}
