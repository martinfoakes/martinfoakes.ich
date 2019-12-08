import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from 'components/Layout/Layout';
import SEO from 'components/seo';
import { Container } from 'components/Layout/Grid';

import { FONT_56, FOREST_BROWN, FOREST_GREEN_DARK } from 'helper/constants/styles';

const IndexContainer = styled(Container)`
  flex-direction: column;
  justify-content: center;
  height: 28rem;

  > h2 {
    font-weight: 400;
    font-size: ${FONT_56};
  }
`;

const IndexLink = styled.a`
  width: 30%;
  color: ${FOREST_GREEN_DARK};

  &:hover {
    transform: translateY(-8px);
    color: #3b923e;
    transition: all .3s ease;
  }

  > h1 {
    font-weight: 400;
    font-size: ${FONT_56};
  }
`;

const BerlinStyle = styled.span`
  color: ${FOREST_BROWN};
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexContainer>
      <IndexLink href="https://github.com/martinfoakes"><h1>{'Martin Foakes.'}</h1></IndexLink>
      <h2>
        {'I\'m a web developer, based in '}
        <BerlinStyle>{'Berlin.'}</BerlinStyle>
      </h2>
    </IndexContainer>
  </Layout>
);

export default IndexPage;
