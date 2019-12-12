import { css } from 'styled-components';
import { BREAKPOINTS } from './styles';

export const tinyPhone = inner => css`
  @media only screen and (max-width: 330px) {
    ${inner}
  }
`;

export const smallTablet = inner => css`
  @media only screen and (min-width: ${BREAKPOINTS[0]}) {
    ${inner}
  }
`;

export const largeTablet = inner => css`
  @media only screen and (min-width: ${BREAKPOINTS[1]}) {
    ${inner}
  }
`;

export const desktop = inner => css`
  @media (min-width: ${BREAKPOINTS[2]}) {
    ${inner}
  }
`;

export const largeDesktop = inner => css`
  @media (min-width: ${BREAKPOINTS[3]}) {
    ${inner}
  }
`;
