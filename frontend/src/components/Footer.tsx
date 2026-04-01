import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Achievements', href: 'achievements' },
  { label: 'Contact', href: 'contact' },
]

const socials = [
  { Icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
  { Icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { Icon: FaTwitter, href: personalInfo.twitter, label: 'Twitter' },
]

export default function Footer() {
  const { isDark } = useTheme()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={`relative ${isDark ? 'bg-dark-card border-t border-dark-border' : 'bg-gray-100 border-t border-gray-200'}`}>
      {/* Back to top button */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-primary-500 hover:bg-primary-600 text-white flex items-center justify-center shadow-glow transition-colors"
          aria-label="Back to top"
        >
          <FiArrowUp size={20} />
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-glow">
                <span className="text-white font-black text-sm">AK</span>
              </div>
              <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Ashish<span className="text-primary-500"> Kumar</span>
              </span>
            </div>
            <p className={`text-sm leading-relaxed max-w-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Full Stack Developer crafting elegant solutions with modern technologies. Available for freelance & full-time.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className={`font-bold text-sm mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className={`text-left text-sm transition-colors link-underline ${
                    isDark ? 'text-gray-500 hover:text-primary-400' : 'text-gray-500 hover:text-primary-600'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact + social */}
          <div>
            <h4 className={`font-bold text-sm mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h4>
            <a
              href={`mailto:${personalInfo.email}`}
              className={`block text-sm mb-1 transition-colors ${
                isDark ? 'text-gray-500 hover:text-primary-400' : 'text-gray-500 hover:text-primary-600'
              }`}
            >
              {personalInfo.email}
            </a>
            <p className={`text-sm mb-4 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{personalInfo.location}</p>

            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  aria-label={label}
                  className={`p-2.5 rounded-xl border transition-all ${
                    isDark
                      ? 'border-dark-border text-gray-500 hover:border-primary-500 hover:text-primary-400'
                      : 'border-gray-300 text-gray-400 hover:border-primary-300 hover:text-primary-600 bg-white'
                  }`}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px ${isDark ? 'bg-dark-border' : 'bg-gray-200'}`} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6">
          <p className={`text-sm ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} Ashish Kumar. All rights reserved.
          </p>
          <p className={`text-sm flex items-center gap-1.5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            Built with
            <FaHeart size={13} className="text-red-500 animate-pulse" />
            using React & NestJS
          </p>
        </div>
      </div>
    </footer>
  )
}
