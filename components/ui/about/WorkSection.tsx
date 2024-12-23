import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Card, CardContent } from "@/components/ui/card"
import { Building } from 'lucide-react'
import Image from 'next/image'


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

export default function WorkSection() {

    const { t } = useTranslation();
    
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