import styled, { css } from 'styled-components';
import { desktop, smallTablet, largeTablet } from 'helper/constants/mediaBreaks';

export default styled.div`
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  &::after {
    padding: 0.5rem;
    background: red;
    content: 'mobile';
    display: block;
    ${smallTablet(css`
      background: purple;
      content: 'smallTablet';
    `)}
    ${largeTablet(css`
      background: green;
      content: 'largeTablet';
    `)}
    ${desktop(css`
      background: blue;
      content: 'desktop';
    `)}
  }
`;
