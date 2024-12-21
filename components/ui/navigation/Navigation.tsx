import { motion } from 'framer-motion'
import { Home, User, Briefcase, Award, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Translations } from '@/types/i18n'

export function Navigation() {
  const { t } = useTranslation<keyof Translations>()

  const navItems = [
    { icon: Home, label: t('home') },
    { icon: User, label: t('about') },
    { icon: Briefcase, label: t('projects') },
    { icon: Award, label: t('achievements') },
    { icon: Mail, label: t('contact') },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="flex justify-center gap-6 z-10 mt-12"
    >
      {navItems.map((item, index) => (
        <motion.a
          key={item.label}
          href={`${item.label.toLowerCase()}`}
          className="flex flex-col items-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <item.icon className="w-6 h-6 mb-1 group-hover:text-violet-500 transition-colors" />
          <span className="text-sm">{item.label}</span>
        </motion.a>
      ))}
    </motion.nav>
  )
}