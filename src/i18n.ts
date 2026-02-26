import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translation files from src directory
import enTranslation from './locales/en/translation.json'
import trTranslation from './locales/tr/translation.json'
import nlTranslation from './locales/nl/translation.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      tr: {
        translation: trTranslation,
      },
      nl: {
        translation: nlTranslation,
      },
    },
    lng: 'tr',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
