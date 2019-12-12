import { createGlobalStyle } from 'styled-components';

import {
  BACKGROUND_LIGHT,
  FONT_BASE,
  FONT_18,
  PARAGRAPH_BLACK,
} from 'helper/constants/styles';
import '../../helper/fonts/fonts.css';

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
    color: ${PARAGRAPH_BLACK};
    margin: 0;
    padding: 0;
    display: flex;
    min-height: 100%;
    width: 100%;
    flex-direction: column;
    flex-grow: 1;
    font-weight: 400;
    background-color: ${BACKGROUND_LIGHT};
  }

  html {
    color: #000;
    font-size: ${FONT_BASE};
    box-sizing: border-box;
    word-break: break-word;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 1.45rem;
    text-rendering: optimizeLegibility;
  }

  h1 {
    font-size: 2em;
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

  a {
    color: #0d0900;
    font-size: ${FONT_18};
    text-decoration: none;
  }

  svg {
    fill: currentColor;
  }
`;

export default GlobalStyle;
