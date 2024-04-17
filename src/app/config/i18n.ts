import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import languageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

i18n
    .use(initReactI18next)
    .use(languageDetector)
    .use(HttpApi)
    .init({
        backend: {
            loadPath: '/locales/{{lng}}.json'
        },
        load: 'currentOnly',
        fallbackLng: import.meta.env.VITE_DEFAULT_LOCALE,
        supportedLngs: ['en', 'ru'],
        detection: {
            order: ['path']
        }
    })

export default i18n
