import { ButtonStyled } from '@/shared/ui/Button/styles'
import styled from 'styled-components'

export const LoginForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 20px;
  max-width: 300px;
  margin: 0 auto;
`

export const LoginFormTitle = styled.div`
  text-align: center;
`

export const LoginFormSubmitBtn = styled(ButtonStyled)`
  width: fit-content;
  margin: 0 auto;
  padding: 10px;
`

export const LoginFormErrorBlock = styled.div`
  text-align: center;
  color: red;
`
