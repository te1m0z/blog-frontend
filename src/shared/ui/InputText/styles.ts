import { styled } from 'styled-components'
import { TEXT_COLOR, BG_COLOR, COLORS } from '@/shared/constants/theme'
import { media } from '@/app/styles/mixins'

export const Input = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 10px;
  column-gap: 7px;
  background-color: ${BG_COLOR};
  border: 1px solid ${TEXT_COLOR};
  border-radius: 12px;

  ${media.lg`
    height: 48px;
    padding: 0 10px;
    column-gap: 7px;
  `}

  &.error {
    border-color: ${COLORS.purple};
  }
`

export const InputErrorBlock = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0px;
  z-index: 1;
  padding: 2px 4px;
  color: ${BG_COLOR};
  white-space: nowrap;
  background-color: ${COLORS.purple};
  border-radius: 5px;
  font-size: 12px;
  line-height: 12px;
`

export const InputContent = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

export const InputValue = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 165px;
  height: 16px;
  margin-top: 2px;
  padding: 0 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 300ms ease;

  ${media.lg`
    min-width: 165px;
    height: 16px;
    margin-top: 2px;
    padding: 0 6px);
    font-size: 14px;
  `}

  &:focus-visible {
    outline: none;
  }

  &[disabled] {
    cursor: default !important;
  }
`

export const InputLabel = styled.div`
  position: relative;
  top: 9px;
  display: flex;
  align-items: center;
  height: 14px;
  padding: 0 6px;
  color: ${TEXT_COLOR};
  transition: all 300ms ease;
  user-select: none;

  @include lg {
    top: 10px;
    height: 14px;
    padding: 0 6px;
    font-size: 14px;
  }

  &.active {
    top: 0;
    font-size: 12px;

    @include lg {
      font-size: 12px;
    }
  }
`
