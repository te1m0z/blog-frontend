import { styled } from 'styled-components'
import { COLORS, FONT_FAMILIES, FONT_WEIGHTS } from '../../constants/theme'

export const ButtonStyled = styled.button`
  position: relative;
  display: block;
  padding: 18px;
  border: 1px solid ${COLORS.purple};
  font-size: inherit;
  font-weight: ${FONT_WEIGHTS.light};
  font-family: ${FONT_FAMILIES.oxanium};
  &:hover {
    &::before,
    &::after {
      height: calc(100% + 2px);
    }
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 5px;
    height: 68%;
    background-color: ${COLORS.purple};
    transition: 300ms ease;
  }
  &::before {
    left: 0;
    transform: translate(-100%, -50%);
  }
  &::after {
    right: 0;
    transform: translate(100%, -50%);
  }
`
