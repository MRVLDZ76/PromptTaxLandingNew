import { createContext, useContext, useState, ReactNode } from 'react'
import contentData from '@/data/invest-content.json'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get from localStorage or default to 'en'
    const stored = localStorage.getItem('prompttax-investor-lang')
    return (stored === 'en' || stored === 'es') ? stored : 'en'
  })

  const [content] = useState<any>(contentData)

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('prompttax-investor-lang', lang)
  }

  const t = (key: string): any => {
    const keys = key.split('.')
    let value = content[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key // Return key if not found
      }
    }
    
    return value
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
