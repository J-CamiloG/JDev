import { motion } from 'framer-motion'
import Image from 'next/image'
import { Ghost, Code, Zap, Globe, Download, Linkedin, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useTranslation } from 'react-i18next'
import { Translations } from '@/types/i18n'

export function Header() {
  const { t } = useTranslation<keyof Translations>()

  return (
    <header className="z-10 flex flex-col md:flex-row justify-between items-center md:items-start">
      <div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <Ghost className="text-violet-500" />
          <span>{t('welcome')}</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500"
        >
          {t('name')}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl font-semibold mt-2 text-gray-300 flex items-center gap-2 flex-wrap"
        >
          <span className="flex items-center gap-1"><Code className="w-5 h-5" /> {t('fullStackDev')}</span>
          <span className="flex items-center gap-1"><Zap className="w-5 h-5" /> {t('uiuxEnthusiast')}</span>
          <span className="flex items-center gap-1"><Globe className="w-5 h-5" /> {t('webCreator')}</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-sm text-gray-400 mt-2"
        >
          {t('description')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-4 flex gap-4"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="text-white" onClick={() => window.open('/tu-cv.pdf', '_blank')}>
                  <Download className="h-4 w-4" />
                  <span className="sr-only">{t('downloadCV')}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('downloadCV')}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="text-white" onClick={() => window.open('https://linkedin.com/in/tu-perfil', '_blank')}>
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">{t('visitLinkedIn')}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('visitLinkedIn')}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="text-white" onClick={() => window.open('https://github.com/tu-usuario', '_blank')}>
                  <Github className="h-4 w-4" />
                  <span className="sr-only">{t('visitGitHub')}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('visitGitHub')}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative w-48 h-48 mt-8 md:mt-0 rounded-full overflow-hidden border-4 border-violet-500 shadow-lg shadow-violet-500/50"
      >
        <Image
          src="/placeholder.svg?height=192&width=192"
          alt={t('name')}
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
    </header>
  )
}