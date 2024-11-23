import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useTranslation } from 'react-i18next'
import { news } from '@/utils/index'; 

export function NewsSection() {
  const { t, i18n } = useTranslation();
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [isNewsDialogOpen, setIsNewsDialogOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length)
    }, 5000) 

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="z-10 max-w-2xl mx-auto text-center mt-12"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentNewsIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="flex items-center gap-4">
            <Image
              src={news[currentNewsIndex].image}
              alt="Noticia"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="text-lg text-gray-300">
              {news[currentNewsIndex].text[i18n.language as 'en' | 'es']}
            </p>
          </div>
          {/* futuro link al blog personasl de noticias */}
          <Button variant="outline" className="mt-4 text-black">
            {t('viewAllNews')} <ChevronRight className="ml-2 h-4 w-4" /> 
          </Button>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}