import { createI18n } from 'vue-i18n'
import id from './locales/id.json'
import en from './locales/en.json'

const getInitialLocale = (): string => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      return window.localStorage.getItem('lang') || 'id'
    } catch {
      return 'id'
    }
  }
  return 'id'
}

const i18n = createI18n({
  legacy: false, // Composition API support
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages: {
    id,
    en
  }
})

export default i18n
