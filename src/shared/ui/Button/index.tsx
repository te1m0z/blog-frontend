import type { ReactNode } from 'react'
import * as S from './styles'

interface IProps {
  type?: 'submit' | 'button'
  children: ReactNode
}

export default function Button({ type = 'button', children }: IProps) {
  return (
    <S.Button type={type}>
      {children}
    </S.Button>
  )
}
