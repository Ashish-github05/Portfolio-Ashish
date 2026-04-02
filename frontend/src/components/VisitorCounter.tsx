import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiEye } from 'react-icons/fi'
import axios from 'axios'
import { useTheme } from '../context/ThemeContext'

const API_BASE = 'https://porfolio-ashish.onrender.com/api'

export default function VisitorCounter() {
  const { isDark } = useTheme()
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    axios
      .post<{ count: number }>(`${API_BASE}/portfolio/visitors`)
      .then((res) => setCount(res.data.count))
      .catch(() => {
        // fallback: try GET
        axios
          .get<{ count: number }>(`${API_BASE}/portfolio/visitors`)
          .then((res) => setCount(res.data.count))
          .catch(() => {})
      })
  }, [])

  return (
    <div
      className={`flex items-center gap-1.5 text-sm ${
        isDark ? 'text-gray-600' : 'text-gray-400'
      }`}
    >
      <FiEye size={14} />
      <AnimatePresence mode="wait">
        {count !== null ? (
          <motion.span
            key={count}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.3 }}
          >
            {count.toLocaleString()} visitors
          </motion.span>
        ) : (
          <motion.span
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-16 h-3.5 rounded bg-current opacity-20 animate-pulse"
          />
        )}
      </AnimatePresence>
    </div>
  )
}
