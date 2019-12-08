import React from 'react';
import styled from 'styled-components';

import Layout from 'components/Layout/Layout';
import SEO from 'components/seo';
import { Container } from 'components/Layout/Grid';

import { GithubLink } from 'helper/constants/constants';
import {
  FONT_56,
  FOREST_BROWN,
  FOREST_GREEN_DARK,
  FOREST_GREEN_LIGHT,
} from 'helper/constants/styles';

const IndexContainer = styled(Container)`
  flex-direction: column;
  justify-content: center;
  height: 28rem;

  > h2 {
    font-weight: 400;
    font-size: ${FONT_56};
    margin-top: 1.8rem;
  }
`;

const IndexLink = styled.a`
  width: fit-content;
  color: ${FOREST_GREEN_DARK};

  &:hover {
    transform: translateY(-8px);
    color: ${FOREST_GREEN_LIGHT};
    transition: all .3s ease;
    background: linear-gradient(#3b923e,#3b923e) 0 100%/100% 1px no-repeat;
  }

  > h1 {
    font-weight: 400;
    font-size: ${FONT_56};
    margin: 0;
  }
`;

const BerlinStyle = styled.span`
  color: ${FOREST_BROWN};
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexContainer>
      <IndexLink href={GithubLink}><h1>{'Martin Foakes.'}</h1></IndexLink>
      <h2>
        {'I\'m a web developer, based in '}
        <BerlinStyle>{'Berlin.'}</BerlinStyle>
      </h2>
    </IndexContainer>
  </Layout>
);

export default IndexPage;
