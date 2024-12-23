'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Download, Github, Linkedin, ChevronRight, Bell, ArrowRight, ExternalLink } from 'lucide-react'
import { Navigation } from '@/components/ui/index'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { NewsSection } from '@/components/ui/index'
import { images } from '@/utils'
import Image from 'next/image'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col h-[100vh] bg-black text-white">
      {/* Header with gradient */}
        <Navigation />
      

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="space-y-12 flex-1">
              {/* Profile Section */}
              <div className="flex items-start gap-8">
                {/* Profile Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative w-48 h-48 mt-8 md:mt-0 rounded-full overflow-hidden border-4 border-violet-500 shadow-lg shadow-violet-500/50"
                >
                  <Image
                    src={images.profile}
                    alt="Profile photo"
                    fill={true}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>

                {/* Main Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 space-y-4"
                >
                  <div className="space-y-2">
                    <h2 className="text-lg text-violet-400">{t('welcome')}</h2>
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                      {t('name')}
                    </h1>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl text-gray-300">{t('fullStackDev')}</p>
                    <p className="text-xl text-gray-400">{t('uiuxEnthusiast')}</p>
                    <p className="text-xl text-gray-500">{t('webCreator')}</p>
                  </div>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-lg leading-relaxed max-w-2xl"
              >
                {t('description')}
              </motion.p>

              {/* Interactive Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-3 gap-6"
              >
                <div className="group relative p-4 rounded-xl bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 hover:from-violet-500/10 hover:to-fuchsia-500/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-violet-400">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                  <ArrowRight className="w-4 h-4 text-violet-500 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="group relative p-4 rounded-xl bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 hover:from-violet-500/10 hover:to-fuchsia-500/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-violet-400">50+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                  <ArrowRight className="w-4 h-4 text-violet-500 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="group relative p-4 rounded-xl bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 hover:from-violet-500/10 hover:to-fuchsia-500/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-violet-400">20+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                  <ArrowRight className="w-4 h-4 text-violet-500 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </div>

            {/* Buttons Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Button className="bg-violet-500 hover:bg-violet-600">
                <Download className="w-4 h-4 mr-2" />
                {t('downloadCV')}
              </Button>
              <Button variant="outline" className="hover:text-violet-500 hover:border-violet-500">
                <Linkedin className="w-4 h-4 mr-2" />
                {t('visitLinkedIn')}
              </Button>
              <Button variant="outline" className="hover:text-violet-500 hover:border-violet-500">
                <Github className="w-4 h-4 mr-2" />
                {t('visitGitHub')}
              </Button>
            </motion.div>
          </div>

          {/* Right Column - News Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-5 h-full"
          >
            <div className="relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-2xl blur-xl" />
              <Card className="relative h-full bg-gray-900/40 backdrop-blur-sm border-white/10">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <Bell className="w-5 h-5 text-violet-400" />
                      <h2 className="text-xl font-semibold">{t('myLatestNews')}</h2>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-violet-500/10 text-violet-400 font-medium">
                        3 new
                      </span>
                    </div>
                    <Button variant="ghost" className="text-violet-400 hover:text-violet-300 -mr-4">
                      {t('viewAllNews')}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                  <div className="flex-1 relative">
                    <NewsSection />
                  </div>
                  {/* Featured Link */}
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <Button variant="ghost" className="w-full justify-between text-violet-400 hover:text-violet-300">
                      <span className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Featured Project
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}