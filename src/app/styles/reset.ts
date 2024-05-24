import { createGlobalStyle } from 'styled-components'

export const ResetStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    display: block;
    max-width: 100%;
  }

  input,
  textarea,
  select,
  button,
  a,
  iframe {
    border: none;
    background: transparent;
    cursor: pointer;
    color: inherit;
  }

  a {
    text-decoration: none;
  }

  ul,
  ol,
  li {
    display: inline-block;
    list-style: none;
    list-style-type: none;
  }
`
