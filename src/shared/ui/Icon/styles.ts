import { styled } from 'styled-components'
import { THEME } from '@/shared'

export const Svg = styled.svg`
    --fill-color: ${THEME.TEXT_COLOR};

    display: inline-block;
    margin: 0;
    padding: 0;
    pointer-events: none;
    touch-action: none;
`
