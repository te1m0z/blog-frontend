import styled from 'styled-components'
import { THEME } from '@/shared'

export const Parent = styled.div`
    margin-top: 100px;
`

export const Title = styled.div`
    color: ${THEME.COLORS.purple};
    border-color: ${THEME.COLORS.purple};
`

export const Content = styled.div`
    margin-top: 30px;
    max-width: 600px;
`
