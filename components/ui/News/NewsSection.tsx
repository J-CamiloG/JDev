import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useTranslation } from 'react-i18next'
import { Translations } from '@/types/i18n'

const news = [
  {
    text: "Acabo de lanzar un nuevo proyecto usando React y TypeScript. ¡Échale un vistazo!",
    image: "/placeholder.svg?height=50&width=50",
    link: "#proyecto-react"
  },
  {
    text: "Participé en un hackathon y mi equipo ganó el primer lugar con una innovadora app de IA.",
    image: "/placeholder.svg?height=50&width=50",
    link: "#hackathon-ia"
  },
  {
    text: "Publiqué un artículo sobre optimización de rendimiento en aplicaciones Next.js.",
    image: "/placeholder.svg?height=50&width=50",
    link: "#articulo-nextjs"
  },
  {
    text: "Contribuí a un proyecto de código abierto popular y mi PR fue aceptado.",
    image: "/placeholder.svg?height=50&width=50",
    link: "#contribucion-opensource"
  },
  {
    text: "Estoy aprendiendo sobre Web3 y blockchain. ¡Pronto compartiré mis hallazgos!",
    image: "/placeholder.svg?height=50&width=50",
    link: "#aprendizaje-web3"
  },
]

export function NewsSection() {
  const { t } = useTranslation<keyof Translations>()
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [isNewsDialogOpen, setIsNewsDialogOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length)
    }, 5000) // Cambia cada 5 segundos

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
              {news[currentNewsIndex].text}
            </p>
          </div>
          <Dialog open={isNewsDialogOpen} onOpenChange={setIsNewsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-4 text-white">
                {t('viewAllNews')} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white">
              <DialogHeader>
                <DialogTitle>{t('myLatestNews')}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {news.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Image
                      src={item.image}
                      alt={`Noticia ${index + 1}`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-sm">{item.text}</p>
                      <a
                        href={item.link}
                        className="text-xs text-violet-400 hover:underline mt-1 inline-block"
                        onClick={() => setIsNewsDialogOpen(false)}
                      >
                        {t('readMore')}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}