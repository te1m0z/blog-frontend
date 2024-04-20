import styled from 'styled-components'
import { hoverUnderline } from '@/app/styles/global'

export const LocaleToggler = styled(hoverUnderline)`
  position: relative;
  display: flex;
  column-gap: 15px;
  cursor: pointer;
`

export const LocaleTogglerItem = styled(hoverUnderline)`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  cursor: pointer;

  &::before {
    bottom: 2px;
  }
`
