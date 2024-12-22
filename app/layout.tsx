import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Importamos i18n en un componente cliente separado
import I18nProvider from './i18nProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JDev',
  description: 'Portfolio Desarrollador web, Juan Camilo Campillo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}