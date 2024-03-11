import cn from 'classnames'
import { useTheme } from 'styled-components'
import { Icon } from '@/shared'
import * as S from './styles'

export default function ThemeToggler() {
  
  const { label, setTheme } = useTheme()

  return (
    <S.ThemeToggler>
      <S.ThemeTogglerItem
        onClick={() => setTheme('light')}
        className={cn({ active: label === 'light' })}
      >
        <Icon
          name="sun"
          size={20}
        />
      </S.ThemeTogglerItem>
      <S.ThemeTogglerItem
        onClick={() => setTheme('system')}
        className={cn({ active: label === 'system' })}
      >
        <Icon
          name="monitor"
          size={20}
        />
      </S.ThemeTogglerItem>
      <S.ThemeTogglerItem
        onClick={() => setTheme('dark')}
        className={cn({ active: label === 'dark' })}
      >
        <Icon
          name="moon"
          size={20}
        />
      </S.ThemeTogglerItem>
    </S.ThemeToggler>
  )
}
