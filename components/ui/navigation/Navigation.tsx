'use client'

import { useState } from 'react'
import Link from 'next/link';
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Home, User, Briefcase, Trophy, Mail, Ghost } from 'lucide-react'
import { LanguageSwitcher } from '@/components/ui/index'

export function Navigation() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', icon: Home, label: t('home') },
    { href: '/about', icon: User, label: t('aboutMe') },
    { href: '/projects', icon: Briefcase, label: t('projects') },
    { href: '/achievements', icon: Trophy, label: t('achievements') },
    { href: '/contact', icon: Mail, label: t('contact') },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Desktop Navigation */}
          <div className="flex items-center gap-8">
            <Ghost className="w-8 h-8 text-emerald-500" />
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-white px-2 py-1 rounded-md"
                    >
                      <link.icon className="h-4 w-4" />
                      {link.label}
                    </Link>
                  ))}
            </nav>
          </div>

          {/* Right side - Language and Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetContent side="left" className="w-72 bg-gray-900/95 backdrop-blur-md border-gray-800">
                <div className="flex items-center justify-between pt-4 pb-8">
                  <div className="flex items-center gap-4">
                    <Ghost className="w-8 h-8 text-emerald-500" />
                    <h2 className="text-lg font-semibold">Menu</h2>
                  </div>
                  {/* Language Switcher in Mobile Menu */}
                  <div className="lg:hidden">
                    <LanguageSwitcher />
                  </div>
                </div>
                <nav className="flex flex-col gap-2">
                {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-white px-2 py-1 rounded-md"
                    >
                      <link.icon className="h-4 w-4" />
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
            </Sheet>
            {/* Desktop Language Switcher */}
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}