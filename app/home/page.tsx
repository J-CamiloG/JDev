'use client'

import { Navigation, NewsProfile, InformationProfile } from '@/components/ui/index'


export default function HomePage() {

  return (
    <section className="flex flex-col h-[100vh] bg-black text-white">
      <Navigation />
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full">
          {/* Left Column - Main Content */}
          < InformationProfile />

          {/* Right Column - News Section */}
          < NewsProfile />
        </div>
      </div>
    </section>
  )
}