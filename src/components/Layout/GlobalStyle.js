import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: 0;
    box-sizing: border-box;
  }

  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    display: flex;
    min-height: 100%;
    width: 100%;
    flex-direction: column;
    flex-grow: 1;
  }

  html {
    background-color: #fbf9f5;
    color: #000;
    font-size: 100%;
    box-sizing: border-box;
    word-break: break-word;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    font-weight: 400;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 1.45rem;
    text-rendering: optimizeLegibility;
  }

  h1 {
    font-size: 2em;
    font-weight: 700;
  }

  h2 {
    font-size: 1.4em;
  }

  h3 {
    font-size: 1.34em;
  }

  h4 {
    font-size: 1.2em;
  }

  h5 {
    font-size: 0.85028em;
  }

  h6 {
    font-size: 0.78405em;
  }
`;

export default GlobalStyle;
