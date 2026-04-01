import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiTailwindcss, SiNextdotjs,
  SiNodedotjs, SiNestjs, SiPhp, SiExpress,
  SiMysql, SiMongodb, SiPostgresql, SiRedis,
  SiGit, SiDocker, SiLinux, SiNginx,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { FiMonitor, FiServer, FiDatabase, FiTool } from 'react-icons/fi'
import { skillCategories } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const iconMap: Record<string, { Icon: React.ElementType; color: string }> = {
  'React': { Icon: SiReact, color: '#61DAFB' },
  'TypeScript': { Icon: SiTypescript, color: '#3178C6' },
  'JavaScript': { Icon: SiJavascript, color: '#F7DF1E' },
  'HTML / CSS': { Icon: SiHtml5, color: '#E34F26' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06B6D4' },
  'Next.js': { Icon: SiNextdotjs, color: '#ffffff' },
  'Node.js': { Icon: SiNodedotjs, color: '#339933' },
  'NestJS': { Icon: SiNestjs, color: '#E0234E' },
  'PHP': { Icon: SiPhp, color: '#777BB4' },
  'CakePHP': { Icon: SiPhp, color: '#D33C44' },
  'Express.js': { Icon: SiExpress, color: '#ffffff' },
  'REST APIs': { Icon: FiServer, color: '#10b981' },
  'MySQL': { Icon: SiMysql, color: '#4479A1' },
  'MongoDB': { Icon: SiMongodb, color: '#47A248' },
  'PostgreSQL': { Icon: SiPostgresql, color: '#4169E1' },
  'Redis': { Icon: SiRedis, color: '#DC382D' },
  'Git & GitHub': { Icon: SiGit, color: '#F05032' },
  'Docker': { Icon: SiDocker, color: '#2496ED' },
  'AWS': { Icon: FaAws, color: '#FF9900' },
  'CI/CD': { Icon: FiTool, color: '#10b981' },
  'Linux': { Icon: SiLinux, color: '#FCC624' },
  'Nginx': { Icon: SiNginx, color: '#009639' },
}

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: FiMonitor,
  Backend: FiServer,
  Database: FiDatabase,
  'Tools & DevOps': FiTool,
}

function SkillBar({ name, level, visible, delay }: {
  name: string; level: number; visible: boolean; delay: number
}) {
  const { isDark } = useTheme()
  const meta = iconMap[name]

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {meta && (
            <meta.Icon
              size={16}
              style={{ color: meta.color }}
              className={name === 'Next.js' || name === 'Express.js' ? 'opacity-80' : ''}
            />
          )}
          <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{name}</span>
        </div>
        <span className="text-xs text-primary-400 font-semibold tabular-nums">{level}%</span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-dark-bg' : 'bg-gray-200'}`}>
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: visible ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { isDark } = useTheme()
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>()
  const [activeIdx, setActiveIdx] = useState(0)

  const card = isDark
    ? 'bg-dark-card border border-dark-border'
    : 'bg-white border border-gray-200 shadow-card'

  const active = skillCategories[activeIdx]
  const CatIcon = categoryIcons[active.category]

  return (
    <section
      id="skills"
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
          <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-2">What I know</p>
          <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-500" />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {skillCategories.map((cat, i) => {
            const Icon = categoryIcons[cat.category]
            const isActive = i === activeIdx
            return (
              <motion.button
                key={cat.category}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveIdx(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                  isActive
                    ? `bg-gradient-to-r ${cat.gradient} text-white border-transparent shadow-glow`
                    : isDark
                    ? 'border-dark-border text-gray-400 hover:text-white hover:border-primary-500/40'
                    : 'border-gray-200 text-gray-600 hover:text-gray-900 hover:border-primary-300'
                }`}
              >
                <Icon size={16} />
                {cat.category}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Skills panel */}
        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`rounded-2xl p-6 sm:p-8 ${card}`}
        >
          {/* Panel header */}
          <div className="flex items-center gap-3 mb-7">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${active.gradient} flex items-center justify-center`}>
              <CatIcon size={20} className="text-white" />
            </div>
            <div>
              <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {active.category}
              </h3>
              <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                {active.skills.length} technologies
              </p>
            </div>
          </div>

          {/* Skill bars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {active.skills.map((s, i) => (
              <SkillBar
                key={s.name}
                name={s.name}
                level={s.level}
                visible={isVisible}
                delay={0.1 + i * 0.08}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom overview cards */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => {
            const Icon = categoryIcons[cat.category]
            const avgLevel = Math.round(cat.skills.reduce((s, k) => s + k.level, 0) / cat.skills.length)
            return (
              <motion.button
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.04, y: -2 }}
                onClick={() => setActiveIdx(i)}
                className={`p-4 rounded-2xl text-left transition-all ${card} ${
                  activeIdx === i ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-r ${cat.gradient} flex items-center justify-center mb-3`}>
                  <Icon size={18} className="text-white" />
                </div>
                <p className={`text-sm font-semibold mb-0.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {cat.category}
                </p>
                <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  Avg {avgLevel}% · {cat.skills.length} skills
                </p>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
