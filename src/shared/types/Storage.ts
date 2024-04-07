import { TAppLocale } from "@/entites/locale"

export interface TAppLocalStorage {
    access_token: string
    refresh_token: string
    locale: TAppLocale
}
