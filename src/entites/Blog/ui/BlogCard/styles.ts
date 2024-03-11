import { THEME } from "@/shared";
import styled from "styled-components";

export const BlogCard = styled.div`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    row-gap: 20px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid red;
`

export const Title = styled.div`
    font-size: ${THEME.FONT_SIZES.large};
`

export const Description = styled.div`
    
`
