'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Navigation } from '@/components/ui/navigation/Navigation';
import { Button } from "@/components/ui/button"
import { Ghost, Play, Pause, History, BookOpen, Building } from 'lucide-react'
import HistorySection from '@/components/ui/about/HistorySection'
import EducationSection from '@/components/ui/about/EducationSection'
import WorkSection from '@/components/ui/about/WorkSection';



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
          <HistorySection/>
        )
      case 'education':
        return (
          <EducationSection/>
        )
      case 'work':
        return (
          <WorkSection/>
        )
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <Navigation />
        </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4 mb-12"
        >
          <Ghost className="w-8 h-8 text-violet-500" />
          <div>
            <h1 className="text-4xl font-bold">{t('aboutTitle')}</h1>
            <p className="text-gray-400 mt-1">{t('aboutSubtitle')}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 max-w-md group"
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                // src="/media/personal-video.mp4"
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