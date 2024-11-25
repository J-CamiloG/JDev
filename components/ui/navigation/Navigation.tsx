import { motion } from 'framer-motion'
import { navItems } from '@/data/index';
import { useTranslation } from 'react-i18next';
import { Translations } from '@/types/i18n';

export function Navigation() {
  const { t } = useTranslation<keyof Translations>();

  const items = navItems(t);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="flex justify-center gap-6 z-10 mt-12"
    >
      {items.map((item ) => (
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