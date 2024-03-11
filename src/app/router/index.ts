import { createBrowserRouter, type RouteObject } from "react-router-dom"
import { BaseLayout } from "@/app/layouts/Base"
import HomePage from "@/pages/Home"
import NotFoundPage from "@/pages/NotFound"

export const routesNames = {
    Home: 'Home',
    Login: 'Login',
    Admin: 'Admin'
}

// type RouteName = typeof routesNames[keyof typeof routesNames]

const routes: RouteObject[] = [
    {
        path: '/',
        Component: BaseLayout,
        children: [
            {
                path: '',
                Component: HomePage
            },
            {
                path: 'blog',
                lazy: () => import('@/pages/Blog')
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
                lazy: () => import('@/pages/Login')
            }
        ]
    }
]

export const router = createBrowserRouter(routes)
