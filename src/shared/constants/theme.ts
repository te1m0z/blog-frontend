import theme from 'styled-theming'
import type { TAppTheme } from '../types/Theme'

export const DEFAULT_THEME: TAppTheme = 'system'

export const COLORS = {
  pink: '#EC4899',
  greyDark: '#0C0F1F',
  white: '#F9FAFB',
  purple: '#AD1AAF'
} as const

export const FONT_SIZES = {
  base: '18px',
  large: '25px',
} as const

export const FONT_WEIGHTS = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
} as const

export const FONT_FAMILIES = {
  oxanium: 'Oxanium',
  poppins: 'Poppins',
} as const

export const SIZES = {
  siteContainer: '1024px',
  header: '100px'
} as const

export const BREAKPOINTS = {
  xxl: '1920px',
  xl: '1200px',
  lg: '991px',
  md: '768px',
  sm: '600px',
  xs: '400px',
} as const

export const DEVICES = {
  xs: `(max-width: ${BREAKPOINTS.xs})`,
  sm: `(max-width: ${BREAKPOINTS.sm})`,
  md: `(max-width: ${BREAKPOINTS.md})`,
  lg: `(max-width: ${BREAKPOINTS.lg})`,
  xl: `(max-width: ${BREAKPOINTS.xl})`,
  xxl: `(max-width: ${BREAKPOINTS.xxl})`,
} as const

export const TEXT_COLOR = theme('value', {
  light: COLORS.greyDark,
  dark: COLORS.white,
})

export const BG_COLOR = theme('value', {
  light: COLORS.white,
  dark: COLORS.greyDark,
})
