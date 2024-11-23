import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <motion.div 
      className="absolute bottom-4 right-4 z-20 flex gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      {['es', 'en'].map((lang) => (
        <Button
          key={lang}
          variant="ghost"
          size="sm"
          className={`text-gray-400 hover:text-white hover:bg-gray-800 ${i18n.language === lang ? 'bg-gray-800 text-white' : ''}`}
          onClick={() => changeLanguage(lang)}
        >
          {lang.toUpperCase()}
        </Button>
      ))}
    </motion.div>
  )
}