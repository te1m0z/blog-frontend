import styled from 'styled-components'

export const AdminPageSections = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`

export const AdminPageSectionsItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

export const AdminPageTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
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
