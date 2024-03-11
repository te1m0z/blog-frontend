import { useState, type ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
// import { setCookie } from 'cookies-next'
import { type TAppTheme, THEME } from '@/shared'
import { useThemeDetector } from '../hooks/useThemeDetector'

interface IProps {
  children: ReactNode
  theme?: TAppTheme
}

const AppThemeProvider = (props: IProps) => {
  const { children, theme } = props
  const systemTheme = useThemeDetector()
  const initialTheme = theme || THEME.DEFAULT_THEME

  const [themeValue, setThemeValue] = useState<TAppTheme>(initialTheme)

  const setTheme = (value: TAppTheme) => {
    setThemeValue(value)
    // setCookie('theme', value, { maxAge: 60 * 60 * 24 * 30 })
  }

  const themeProviderValue = () => {
    let value = themeValue

    if (themeValue === 'system') {
      value = systemTheme
    }

    return {
      label: themeValue,
      value,
      setTheme
    }
  }

  return (
    <ThemeProvider theme={themeProviderValue}>
      {children}
    </ThemeProvider>
  )
}

export {
  AppThemeProvider,
}
