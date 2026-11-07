import { useState, useEffect } from 'react'
import { LanguageContext } from './LanguageContext'
import vi from './locales/vi.json'
import en from './locales/en.json'

const translations = { vi, en }
const DEFAULT_LANGUAGE = 'vi'

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language')
    return saved in translations ? saved : DEFAULT_LANGUAGE
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  /** Looks up `path`; `{name}` placeholders in strings are filled from `params`. */
  const t = (path, params) => {
    const keys = path.split('.')
    let value = translations[language]

    for (const key of keys) {
      value = value?.[key]
      if (value === undefined) {
        return path
      }
    }

    if (params && typeof value === 'string') {
      return value.replace(/\{(\w+)\}/g, (match, name) => (name in params ? params[name] : match))
    }
    return value
  }

  return (
    <LanguageContext.Provider value={{ t, language, changeLanguage: setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
