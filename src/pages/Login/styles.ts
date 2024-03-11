import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 20px;
  max-width: 300px;
  margin: 0 auto;
  margin-top: 150px;
`

export const Title = styled.div`
  font-size: 20px;
  text-align: center;
`

export const InputContainer = styled.div`
  margin-bottom: 20px;

  /* &:last-of-type {
    margin-bottom: 40px;
  } */
`

export const FormTitle = styled.h3`
  margin-bottom: 40px;
  font-size: 30px;
  text-align: center;
`

export const FormError = styled.div`
  color: red;
`
