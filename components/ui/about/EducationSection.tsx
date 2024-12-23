'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Code, Globe } from 'lucide-react'
export default function EducationSection(){

    const { t } = useTranslation();

    return(
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
                        <h4 className="font-medium">{t('frontendCert')}</h4>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-900/50 border-white/5 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <Globe className="w-8 h-8 text-violet-400 mx-auto mb-2" />
                        <h4 className="font-medium">{t('cloudCert')}</h4>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
        </motion.div>
    )
}