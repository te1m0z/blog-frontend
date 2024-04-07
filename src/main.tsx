import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AppThemeProvider } from '@/app/contexts/theme'
import { UserProvider } from '@/app/contexts/user'
import { router } from '@/app/router'
import './app/config/i18n'
import AppStyles from '@/app/styles'

const root = document.getElementById('root')

ReactDOM.createRoot(root!).render(
    <UserProvider>
      <AppThemeProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <AppStyles />
          <RouterProvider router={router} />
          <Toaster position='top-right' />
        </Suspense>
      </AppThemeProvider>
    </UserProvider>
)
