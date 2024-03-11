import { css, CSSObject } from 'styled-components';

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

type Breakpoints = keyof typeof breakpoints;

export const media = (Object.keys(breakpoints) as Breakpoints[]).reduce((acc, label) => {
  acc[label] = (first: TemplateStringsArray | CSSObject, ...interpolations: any[]) => () => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(first, ...interpolations)}
    }
  `;
  return acc;
}, {} as Record<Breakpoints, (first: TemplateStringsArray | CSSObject, ...interpolations: any[]) => (...args: any[]) => ReturnType<typeof css>>);
