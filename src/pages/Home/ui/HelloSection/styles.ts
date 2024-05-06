import styled from 'styled-components'
import { ButtonStyled } from '@/shared/ui/Button/styles'
import { FONT_FAMILIES, TEXT_COLOR, FONT_WEIGHTS } from '@/shared/constants/theme'

export const HelloSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 400px;
  /* border: 1px solid red; */
`

export const Left = styled.div`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 30px;
  max-width: 420px;
`

export const Right = styled.div`
  width: 200px;
  height: 200px;
  margin: auto;
  border: 1px solid red;
`

export const Title = styled.div`
  font-family: ${FONT_FAMILIES.poppins};
  font-size: 36px;
  font-weight: ${FONT_WEIGHTS.bold};

  .iam {
    position: relative;
    display: block;
    background: linear-gradient(90deg, ${TEXT_COLOR}, #309FBA, #FF6417);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .dev {
    position: absolute;
    background: linear-gradient(90deg, #8B5CF6, #EC4899);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const Description = styled.div`
  max-width: 390px;
  font-family: ${FONT_FAMILIES.oxanium};
  font-size: 16px;
  font-weight: ${FONT_WEIGHTS.regular};
  color: ${TEXT_COLOR};
`

export const ViewPortfolioButton = styled(ButtonStyled)`
  width: 215px;
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 24px;
  backdrop-filter: blur(15px);
  transform: scale(1.2, 1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(
      var(--angle),
      ${TEXT_COLOR}20,
      rgba(255, 255, 255, 0));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    animation: 5s rotate linear infinite;
  }

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
`
