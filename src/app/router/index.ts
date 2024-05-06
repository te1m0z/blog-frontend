import { createBrowserRouter, type RouteObject } from "react-router-dom"
import { BaseLayout } from "@/app/layouts/Base"
import HomePage from "@/pages/Home"
import NotFoundPage from "@/pages/NotFound"

export const routesNames = {
    Home: 'Home',
    Login: 'Login',
    Admin: 'Admin'
}

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
                path: 'admin',
                lazy: () => import('@/pages/Admin')
            },
            {
                path: '*',
                Component: NotFoundPage
            }
        ]
    }
]

export const router = createBrowserRouter(routes)
