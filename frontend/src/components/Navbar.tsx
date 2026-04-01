import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Achievements', href: 'achievements' },
  { label: 'Contact', href: 'contact' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // detect active section
      const sections = links.map((l) => l.href)
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const navBg = scrolled
    ? isDark
      ? 'bg-dark-bg/90 backdrop-blur-md border-b border-dark-border shadow-xl'
      : 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-md'
    : 'bg-transparent'

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2.5"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-glow">
            <span className="text-white font-black text-sm tracking-tight">AK</span>
          </div>
          <span className={`font-bold text-lg hidden sm:block ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Ashish<span className="text-primary-500"> Kumar</span>
          </span>
        </motion.button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === l.href
                  ? 'text-primary-400 bg-primary-500/10'
                  : isDark
                  ? 'text-gray-400 hover:text-white hover:bg-white/5'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'text-yellow-400 hover:bg-white/5' : 'text-gray-500 hover:bg-gray-100'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun size={19} /> : <FiMoon size={19} />}
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/17Pu1TyPxrTzAHbUblmH6eIOq_yZGW6LJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold transition-colors shadow-glow"
          >
            <FiDownload size={15} />
            Resume
          </motion.a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isDark ? 'text-white hover:bg-white/5' : 'text-gray-900 hover:bg-gray-100'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden overflow-hidden ${
              isDark ? 'bg-dark-bg/95 border-t border-dark-border' : 'bg-white border-t border-gray-100'
            }`}
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active === l.href
                      ? 'text-primary-400 bg-primary-500/10'
                      : isDark
                      ? 'text-gray-300 hover:text-white hover:bg-white/5'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {l.label}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1Jjx3s-XdSLrKE9EmHNkvSfBsZ6GOgTwY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-3 py-2.5 rounded-xl bg-primary-500 text-white text-sm font-semibold"
              >
                <FiDownload size={15} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
