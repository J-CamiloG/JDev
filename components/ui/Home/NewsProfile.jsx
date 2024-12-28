
import { motion } from 'framer-motion'
import {ChevronRight, Bell, ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { NewsSection } from '@/components/ui/index'
import { useTranslation } from 'react-i18next'

export function NewsProfile() {
    const { t } = useTranslation()

    return (
        <motion.section
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="lg:col-span-5 h-full"
        >
        <div className="relative h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl" />
            <Card className="relative h-full bg-gray-900/40 backdrop-blur-sm border-white/10">
            <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-emerald-400" />
                    <h2 className="text-xl font-semibold text-gray-100">{t('myLatestNews')}</h2>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/10 text-emerald-400 font-medium">
                    3 new
                    </span>
                </div>
                <Button variant="ghost" className="text-emerald-400 hover:text-emerald-300 -mr-4">
                    {t('viewAllNews')}
                    <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
                </div>
                <div className="flex-1 relative">
                <NewsSection />
                </div>
                {/* Featured Link */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                <Button variant="ghost" className="w-full justify-between text-emerald-400 hover:text-emerald-300">
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
        </motion.section>
    )
}