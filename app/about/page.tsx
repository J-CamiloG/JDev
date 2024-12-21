'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { Navigation } from '@/components/ui/navigation/Navigation';
import { LanguageSwitcher } from '@/components/ui/language/LanguageSwitcher';
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Ghost, Briefcase, GraduationCap, GitFork, Play, Pause, History, BookOpen, Building, Star, Code, Globe } from 'lucide-react'

// Datos de ejemplo - Reemplazar con datos reales
const workExperience = [
  {
    company: "Empresa Actual",
    logo: "/placeholder.svg?height=40&width=40",
    period: "2022 - Presente",
    role: "Senior Frontend Developer",
    description: "Desarrollo de aplicaciones web modernas utilizando React, Next.js y TypeScript. Liderazgo técnico en proyectos clave."
  },
  {
    company: "Empresa Anterior",
    logo: "/placeholder.svg?height=40&width=40",
    period: "2020 - 2022",
    role: "Frontend Developer",
    description: "Implementación de interfaces de usuario responsivas y optimización del rendimiento de aplicaciones web."
  }
]

type ContentSection = 'history' | 'education' | 'work'

export default function AboutPage() {
  const { t } = useTranslation()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeSection, setActiveSection] = useState<ContentSection>('history')

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener('ended', () => setIsPlaying(false))
      return () => {
        video.removeEventListener('ended', () => setIsPlaying(false))
      }
    }
  }, [])

  const renderContent = () => {
    switch (activeSection) {
      case 'history':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-3xl" />
            <div className="relative p-8 backdrop-blur-sm rounded-3xl border border-white/10">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-2xl" />
              <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
                <History className="w-8 h-8 text-violet-500" />
                {t('myStory')}
              </h2>
              <div className="grid gap-6">
                <Card className="bg-gray-900/50 border-white/5 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Code className="w-6 h-6 text-violet-400 mt-1" />
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Apasionado por la tecnología desde temprana edad, comencé mi viaje en el desarrollo web construyendo pequeños proyectos que pronto se convirtieron en soluciones reales.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-white/5 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Globe className="w-6 h-6 text-fuchsia-400 mt-1" />
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Mi curiosidad por las nuevas tecnologías me ha llevado a explorar diversos campos, desde el desarrollo frontend hasta la arquitectura de sistemas.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-white/5 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Star className="w-6 h-6 text-yellow-400 mt-1" />
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Hoy, me dedico a crear experiencias digitales excepcionales y a compartir mi conocimiento con la comunidad.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        )
      case 'education':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-3xl" />
            <div className="relative p-8 backdrop-blur-sm rounded-3xl border border-white/10">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
              <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-blue-500" />
                {t('education')}
              </h2>
              <div className="space-y-8">
                <Card className="bg-gray-900/50 border-white/5 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <GraduationCap className="w-12 h-12 text-blue-400" />
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{t('degree')}</h3>
                        <p className="text-lg text-blue-400">{t('university')}</p>
                        <p className="text-gray-400">{t('graduationYear')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-gray-900/50 border-white/5 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <h4 className="font-medium">Certificación Frontend</h4>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-900/50 border-white/5 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <Globe className="w-8 h-8 text-violet-400 mx-auto mb-2" />
                        <h4 className="font-medium">Certificación Cloud</h4>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        )
      case 'work':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-3xl" />
            <div className="relative p-8 backdrop-blur-sm rounded-3xl border border-white/10">
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
              <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
                <Building className="w-8 h-8 text-emerald-500" />
                {t('workExperience')}
              </h2>
              <div className="space-y-6">
                {workExperience.map((job, index) => (
                  <Card key={index} className="bg-gray-900/50 border-white/5 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="relative w-16 h-16">
                          <Image
                            src={job.logo}
                            alt={job.company}
                            fill
                            className="rounded-xl object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{job.company}</h3>
                          <p className="text-emerald-400 font-medium mb-1">{job.role}</p>
                          <p className="text-sm text-gray-400 mb-3">{job.period}</p>
                          <p className="text-gray-300">{job.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Navigation />
          <LanguageSwitcher />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <Ghost className="w-8 h-8 text-violet-500" />
          <h1 className="text-4xl font-bold">{t('aboutTitle')}</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 max-w-md group"
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                src="/your-video.mp4"
                playsInline
                loop
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={toggleVideo}
                className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {isPlaying ? (
                  <Pause className="w-12 h-12 text-white" />
                ) : (
                  <Play className="w-12 h-12 text-white" />
                )}
              </button>
            </motion.div>

            <div className="flex gap-4">
              {[
                { id: 'history', icon: History, label: t('myStory') },
                { id: 'education', icon: BookOpen, label: t('education') },
                { id: 'work', icon: Building, label: t('workExperience') }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'outline'}
                  onClick={() => setActiveSection(item.id as ContentSection)}
                  className={`flex items-center gap-2 transition-all ${
                    activeSection === item.id 
                      ? 'bg-violet-500 hover:bg-violet-600' 
                      : 'hover:border-violet-500 hover:text-violet-500'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="min-h-[500px]"
          >
            <AnimatePresence mode="wait">
              {renderContent()}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </div>
  )
}