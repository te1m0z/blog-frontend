import { ReactNode } from "react"
import { NavLink } from "react-router-dom"
import { useTranslation } from 'react-i18next'

interface IProps {
    to: string
    children: ReactNode
}

export function LocalizedLink({ to, children }: IProps) {
    const { i18n } = useTranslation()

    const url = `/${i18n.language}${to}`.replace(/\/$/, '')

    return (
        <NavLink to={url}>
            {children}
        </NavLink>
    )
}