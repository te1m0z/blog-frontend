import { useContext } from "react"
import { Outlet, useParams } from "react-router-dom"
import { LocaleContext } from "../contexts/locale"

export function Root() {
    // const params = useParams()
    // const localeStore = useContext(LocaleContext)

    // if (params.locale && ['en', 'ru'].includes(params.locale)) {
    //     localeStore.updateLocale(params.locale)
    // }

    
    return (
        <Outlet />
    )
}