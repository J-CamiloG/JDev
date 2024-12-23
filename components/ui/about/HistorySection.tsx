import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Card, CardContent } from "@/components/ui/card"
import {  History, Star, Code, Globe } from 'lucide-react'

export default function HistorySection() {

    const { t } = useTranslation();
    
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
                      {t('storyPart1')}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-white/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Globe className="w-6 h-6 text-fuchsia-400 mt-1" />
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {t('storyPart2')}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-white/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Star className="w-6 h-6 text-yellow-400 mt-1" />
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {t('storyPart3')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      )
}