import { TAppLocale } from "@/shared"

export interface TAppLocalStorage {
    jwt: {
        access_token: string
        refresh_token: string
    }
    locale: TAppLocale
}
