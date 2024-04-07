import { TAppLocale } from '../types/Locale'

export async function fetchLocale(locale: TAppLocale) {
    try {
        const response = await fetch(`/locales/${locale}.json`)
        const json = await response.json()
        return json
    } catch (err: unknown) {
        return {}
    }
}
