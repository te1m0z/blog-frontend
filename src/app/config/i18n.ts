import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import resourcesToBackend from 'i18next-resources-to-backend'
import languageDetector from 'i18next-browser-languagedetector'

i18n
    .use(initReactI18next)
    .use(languageDetector)
    .use(resourcesToBackend((lang: string) => import(`@/app/assets/locales/${lang}.json`)))
    .init({
        fallbackLng: import.meta.env.VITE_DEFAULT_LOCALE,
        detection: {
            order: ['path']
        },
    })

export default i18n
