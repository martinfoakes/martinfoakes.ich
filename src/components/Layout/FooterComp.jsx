import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/Layout/Grid';

import {
  FONT_BASE,
  FONT_20,
  FOREST_GREEN_DARK,
  PARAGRAPH_BLACK,
  HIGHLIGHT,
} from 'helper/constants/styles';

const FooterContainer = styled(Container)`
  height: 20rem;
  flex-direction: column;
  padding-top: 2rem;

  > h1 {
    font-weight: 700;
    color: ${FOREST_GREEN_DARK};
  }

  > p,a {
    margin-bottom: 0.4rem;
    color: ${PARAGRAPH_BLACK};
    font-size: ${FONT_20};
  }

  > a {
    width: fit-content;
    &:hover {
      color: ${HIGHLIGHT};
      transition: all .3s ease;
      background: ${`linear-gradient(${HIGHLIGHT},${HIGHLIGHT}) 0 100%/100% 1px no-repeat`};
    }
  }
`;

const Copyright = styled.div`
  font-size: ${FONT_BASE};
  margin-top: 4rem;
  margin-bottom: 2rem;
  z-index: 11;
`;

const FooterComp = () => (
  <FooterContainer>
    <h1>{'Martin Foakes'}</h1>
    <p>{'Berlin, Germany'}</p>
    <a href="mailto:foakes.m@gmail.com">{'foakes.m@gmail.com'}</a>
    <p>{'Tel: (+44)7780334388'}</p>
    <Copyright>
      {`Copyright(c) ${new Date().getFullYear()} Martin Foakes. All rights reserved`}
    </Copyright>
  </FooterContainer>
);

export default FooterComp;
