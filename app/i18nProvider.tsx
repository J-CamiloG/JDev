'use client'

import { useEffect } from 'react'
import '../i18n'

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Cualquier inicialización adicional del lado del cliente si es necesaria
  }, [])

  return <>{children}</>
}