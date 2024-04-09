import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import languageDetector from 'i18next-browser-languagedetector'

import en from '@/app/assets/locales/en.json'
import ru from '@/app/assets/locales/ru.json'

i18n
    .use(initReactI18next)
    .use(languageDetector)
    .init({
        resources: {
            en,
            ru
        },
        lng: import.meta.env.VITE_DEFAULT_LOCALE,
        fallbackLng: import.meta.env.VITE_DEFAULT_LOCALE,
        supportedLngs: ['en', 'ru'],
        detection: {
            order: ['path']
        }
    })

export default i18n
