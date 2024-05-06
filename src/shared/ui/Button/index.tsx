import type { ReactNode } from 'react'
import * as S from './styles'

interface IProps {
  type?: 'submit' | 'button'
  children: ReactNode
}

export default function Button({ type = 'button', children }: IProps) {
  return (
    <S.ButtonStyled type={type}>
      {children}
    </S.ButtonStyled>
  )
}
