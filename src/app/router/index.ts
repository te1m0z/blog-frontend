import { createBrowserRouter, type RouteObject } from "react-router-dom"
import { BaseLayout } from "@/app/layouts/Base"
import HomePage from "@/pages/Home"
import NotFoundPage from "@/pages/NotFound"
import { TAppLocale } from "@/entites/locale"

export const routesNames = {
    Home: 'Home',
    Login: 'Login',
    Admin: 'Admin'
}

// const SUPPORTED_LOCALES: TAppLocale[] = ['en', 'ru']

const routes: RouteObject[] = [
    {
        path: '/:lng?',
        Component: BaseLayout,
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
                path: '*',
                Component: NotFoundPage
            }
        ]
    },
    {
        path: '/admin',
        lazy: () => import('@/app/layouts/Admin'),
        children: [
            {
                path: '',
                lazy: () => import('@/pages/Admin')
            }
        ]
    }
]

export const router = createBrowserRouter(routes)
