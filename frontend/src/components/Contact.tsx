import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import axios from 'axios'
import { personalInfo } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const initial: FormState = { name: '', email: '', subject: '', message: '' }

const contactInfo = [
  { Icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { Icon: FiMapPin, label: 'Location', value: personalInfo.location, href: '#' },
  { Icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
]

const socials = [
  { Icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
  { Icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { Icon: FaTwitter, href: personalInfo.twitter, label: 'Twitter' },
]

export default function Contact() {
  const { isDark } = useTheme()
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>()
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverMsg, setServerMsg] = useState('')

  const card = isDark
    ? 'bg-dark-card border border-dark-border'
    : 'bg-white border border-gray-200 shadow-card'

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm transition-all outline-none border ${
    isDark
      ? 'bg-dark-bg border-dark-border text-white placeholder-gray-600 focus:border-primary-500'
      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-400'
  } focus:ring-2 focus:ring-primary-500/20`

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      const res = await axios.post('/api/contact', form)
      setServerMsg(res.data.message)
      setStatus('success')
      setForm(initial)
      setErrors({})
    } catch {
      setStatus('error')
      setServerMsg('Something went wrong. Please try again or email me directly.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section
      id="contact"
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
          <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-2">Get in touch</p>
          <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-500" />
          <p className={`mt-4 max-w-xl mx-auto text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind, want to collaborate, or just say hi? Drop me a message — I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Contact cards */}
            {contactInfo.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className={`group flex items-center gap-4 p-4 rounded-2xl ${card} hover:ring-2 hover:ring-primary-500/30 transition-all`}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <p className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{label}</p>
                  <p className={`text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{value}</p>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className={`p-5 rounded-2xl ${card}`}>
              <p className={`text-sm font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Find me on social media
              </p>
              <div className="flex gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    aria-label={label}
                    className={`p-3 rounded-xl border transition-all ${
                      isDark
                        ? 'border-dark-border text-gray-400 hover:border-primary-500 hover:text-primary-400 hover:bg-primary-500/5'
                        : 'border-gray-200 text-gray-500 hover:border-primary-300 hover:text-primary-600 bg-white'
                    }`}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability notice */}
            <div className={`p-5 rounded-2xl ${card} border-l-4 border-l-green-500`}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Available for work</p>
              </div>
              <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                Currently open to full-time and freelance projects. Response time: &lt;10h.
              </p>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`lg:col-span-3 rounded-2xl p-6 sm:p-8 ${card}`}
          >
            <h3 className={`font-bold text-lg mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Send a Message
            </h3>

            {/* Success / Error banner */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 mb-5"
              >
                <FiCheck size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-green-400">{serverMsg}</p>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 mb-5"
              >
                <FiAlertCircle size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-red-400">{serverMsg}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Your Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ashish Kumar"
                    className={`${inputClass} ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ashish@gmail.com"
                    className={`${inputClass} ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Subject *
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Collaboration / Hello 👋"
                  className={`${inputClass} ${errors.subject ? 'border-red-500 focus:border-red-500' : ''}`}
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project, idea, or just say hi..."
                  className={`${inputClass} resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message ? (
                    <p className="text-red-400 text-xs">{errors.message}</p>
                  ) : (
                    <span />
                  )}
                  <span className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                    {form.message.length}/2000
                  </span>
                </div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold transition-all ${
                  status === 'loading'
                    ? 'bg-primary-500/50 text-white/70 cursor-not-allowed'
                    : 'bg-primary-500 hover:bg-primary-600 text-white shadow-glow hover:shadow-glow-lg'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={17} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
