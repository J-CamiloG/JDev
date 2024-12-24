import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next'
import { Languages } from 'lucide-react'


export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div 
      className="flex items-center gap-2 justify-center"
      >
      <Languages />
      {['es', 'en'].map((lang) => (
        <Button
          key={lang}
          variant="ghost"
          size="sm"
          className={`text-white hover:text-white hover:bg-emerald-300 ${i18n.language === lang ? 'bg-emerald-600 text-white' : ''}`}
          onClick={() => changeLanguage(lang)}
        >
          {lang.toUpperCase()}
        </Button>
      ))}
    </div>
  )
}