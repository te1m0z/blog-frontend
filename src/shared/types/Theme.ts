import { BREAKPOINTS } from '../constants/theme'

type TAppTheme = 'light' | 'system' | 'dark'

type TBreakpoint = keyof typeof BREAKPOINTS;

export type {
  TAppTheme,
  TBreakpoint,
}