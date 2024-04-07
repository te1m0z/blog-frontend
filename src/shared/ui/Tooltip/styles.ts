import { THEME } from "@/shared";
import { styled } from "styled-components";

export const Tooltip = styled.div`
    width: max-content;
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px;
    border-radius: 10px;
    background-color: ${THEME.BG_COLOR};
    border: 1px solid ${THEME.TEXT_COLOR};
`