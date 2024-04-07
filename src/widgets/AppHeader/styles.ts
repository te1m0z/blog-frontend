import styled from 'styled-components'
import { motion } from 'framer-motion'
import { THEME } from '@/shared'

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  /* background-color: ${THEME.BG_COLOR}; */
  transition: background-color 300ms ease;
`

export const Inner = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: ${THEME.SIZES.header}; */

  /* @media ${THEME.DEVICES.md} {
    height: 50px;
  } */
`

export const LogoBlock = styled.div`
  font-size: ${THEME.FONT_SIZES.large};
`

export const MenuBlock = styled.nav`
  font-family: ${THEME.FONT_FAMILIES.poppins};

  & a {
    position: relative;
    padding: 3px;
    margin: 0 10px;

    &:hover {
      &::before {
        width: 100%;
        right: auto;
        left: 0;
      }
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0%;
      height: 1px;
      background-color: ${THEME.TEXT_COLOR};
      transition: width 300ms ease;
    }
  }
`

export const ThemeBlock = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`

export const RightBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
`
