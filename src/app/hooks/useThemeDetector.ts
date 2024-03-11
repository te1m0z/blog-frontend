import { useState, useEffect } from 'react'
import type { TAppTheme } from '@/shared'

/**
 * Выяснить тему для рендера компонентов
 * прогрммано на сайте может быть "системная" тема
 */
export const useThemeDetector = (): TAppTheme => {
  const getIsDarkMedia = () => window.matchMedia("(prefers-color-scheme: dark)")
  
  const currentTheme = getIsDarkMedia().matches

  const [isDarkTheme, setIsDarkTheme] = useState(currentTheme);  

  const mqListener = ((e: MediaQueryListEvent) => setIsDarkTheme(e.matches));
  
  useEffect(() => {
    const darkThemeMq = getIsDarkMedia();
    darkThemeMq.addEventListener('change', mqListener);

    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);

  return isDarkTheme ? 'dark' : 'light';
}
