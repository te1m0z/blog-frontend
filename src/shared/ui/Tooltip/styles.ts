import styled from 'styled-components'
import { THEME } from '@/shared'

export const TooltipContent = styled.div`
    display: inline-block;
    padding: 4px 8px;
    border-radius: 10px;
    border: 1px solid ${THEME.TEXT_COLOR};
    background-color: ${THEME.BG_COLOR};
`
