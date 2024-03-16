import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { AppThemeProvider } from '@/app/contexts/theme'
import { router } from '@/app/router'
import { store } from '@/app/store'
import AppStyles from '@/app/styles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <ReduxProvider store={store}>
      <AppThemeProvider>
        <AppStyles />
        <RouterProvider router={router} />
        <Toaster position='top-right' />
      </AppThemeProvider>
    </ReduxProvider>
  // </React.StrictMode>
)
