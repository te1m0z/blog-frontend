import { type ReactNode, createContext, useEffect } from 'react'
import { Locale } from '@/entites/locale/store'

const localeStore = new Locale()

export const LocaleContext = createContext<Locale>(localeStore)

interface LocaleProviderProps {
    children: ReactNode
}

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
    return (
        <LocaleContext.Provider value={localeStore}>
            {children}
        </LocaleContext.Provider>
    )
}
