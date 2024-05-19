import { createBrowserRouter, type RouteObject } from "react-router-dom"
import { BaseLayout } from "@/app/layouts/Base"
import HomePage from "@/pages/Home"
import NotFoundPage from "@/pages/NotFound"

export const routesNames = {
    Home: 'Home',
    Login: 'Login',
    Admin: 'Admin'
}

const lngs = ['', 'ru', 'en']

const routes: RouteObject[] = [
    ...lngs.map((lng) => ({
        path: lng,
        Component: BaseLayout,
        ErrorBoundary: NotFoundPage,
        children: [
            {
                path: '',
                Component: HomePage
            },
            {
                path: 'notes',
                lazy: () => import('@/pages/Notes')
            },
            {
                path: 'login',
                lazy: () => import('@/pages/Login')
            },
            {
                path: 'admin',
                lazy: () => import('@/pages/Admin')
            },
            {
                path: '*',
                Component: NotFoundPage
            }
        ]
    }))
]

export const router = createBrowserRouter(routes)
