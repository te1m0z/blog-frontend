import styled from 'styled-components'
import { hoverUnderline } from '@/app/styles/global'

export const ThemeToggler = styled.button`
  display: flex;
  column-gap: 15px;
`

export const ThemeTogglerItem = styled(hoverUnderline)`
  position: relative;
  max-height: 20px;
`
