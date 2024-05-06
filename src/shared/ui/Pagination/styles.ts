import { BG_COLOR, COLORS } from "@/shared/constants/theme";
import styled from "styled-components";

export const PaginationStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
`

export const PaginationItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 10px;
    border: 1px solid ${COLORS.purple};
    border-radius: 4px;
    cursor: pointer;

    &.selected {
        background-color: ${COLORS.purple};
        color: ${BG_COLOR};
    }

    &.disabled {
        opacity: 0.5;
        cursor: auto;
    }
`
