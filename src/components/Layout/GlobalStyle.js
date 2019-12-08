import { createGlobalStyle } from 'styled-components';

import { FONT_BASE, FONT_18 } from 'helper/constants/styles';
import '../../helper/fonts.css';

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
    color: #0d0900;
    margin: 0;
    padding: 0;
    display: flex;
    min-height: 100%;
    width: 100%;
    flex-direction: column;
    flex-grow: 1;
    font-weight: 400;
  }

  html {
    background-color: #fbf9f5;
    color: #000;
    font-size: ${FONT_BASE};
    box-sizing: border-box;
    word-break: break-word;
  }
  
  body {
    font-family: "IBM Plex Sans Condensed", sans-serif, BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    padding-left: 18px;
    padding-right: 18px;
    max-width: 100rem;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "IBM Plex Serif", serif;
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

  a {
    color: #0d0900;
    font-size: ${FONT_18};
  }
`;

export default GlobalStyle;
