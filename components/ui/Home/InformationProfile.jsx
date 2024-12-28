import Image from 'next/image'
import { images } from '@/utils/index'
import { useTranslation } from 'react-i18next'
import { Download, Github, Linkedin, ArrowRight,  } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'




export function InformationProfile(){
    const { t } = useTranslation()

    return(
        <section className="lg:col-span-7 flex flex-col">
            <div className="space-y-12 flex-1">
                {/* Profile Section */}
                <div className="flex items-start gap-8">
                    {/* Profile Image */}
                    <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="relative w-48 h-48 mt-8 md:mt-0 rounded-full overflow-hidden border-4 border-emerald-500 shadow-lg shadow-emerald-500/50"
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
                        <h2 className="text-lg text-emerald-400">{t('welcome')}</h2>
                        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
                        {t('name')}
                        </h1>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xl text-gray-300">{t('fullStackDev')}</p>
                        {/* <p className="text-xl text-gray-400">{t('uiuxEnthusiast')}</p> */}
                        {/* <p className="text-xl text-gray-500">{t('webCreator')}</p> */}
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
                    <div className="group relative p-4 rounded-xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 hover:from-emerald-500/10 hover:to-teal-500/10 transition-all duration-300">
                    <div className="text-2xl font-bold text-emerald-400">5+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                    <ArrowRight className="w-4 h-4 text-emerald-500 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="group relative p-4 rounded-xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 hover:from-emerald-500/10 hover:to-teal-500/10 transition-all duration-300">
                    <div className="text-2xl font-bold text-emerald-400">50+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                    <ArrowRight className="w-4 h-4 text-emerald-500 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="group relative p-4 rounded-xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 hover:from-emerald-500/10 hover:to-teal-500/10 transition-all duration-300">
                    <div className="text-2xl font-bold text-emerald-400">20+</div>
                    <div className="text-sm text-gray-400">Happy Clients</div>
                    <ArrowRight className="w-4 h-4 text-emerald-500 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                <Button className="bg-emerald-500 border-none hover:bg-emerald-600  ">
                    <Download className="w-4 h-4 mr-2" />
                    {t('downloadCV')}
                </Button>
                <Button  className="bg-emerald-500 border-none  hover:bg-emerald-600  ">
                    <Linkedin className="w-4 h-4 mr-2" />
                    {t('visitLinkedIn')}
                </Button>
                <Button  className="bg-emerald-500 border-none   hover:bg-emerald-600 ">
                    <Github className="w-4 h-4 mr-2" />
                    {t('visitGitHub')}
                </Button>
            </motion.div>
        </section>
    )
}