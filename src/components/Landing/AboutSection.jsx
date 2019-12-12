import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

import { Container, Col } from 'components/Layout/Grid';
import { largeTablet } from 'helper/constants/mediaBreaks';
import {
  FONT_18,
  FONT_54,
  FOREST_GREEN_LIGHT,
  FOREST_GREEN_DARK,
  HIGHLIGHT,
  SUBTITLE_LIGHT,
  TITLE_LIGHT,
} from 'helper/constants/styles';

const Background = styled.div`
  background-color: ${FOREST_GREEN_LIGHT};
  border-top: 1px solid ${FOREST_GREEN_DARK};
  border-bottom: 1px solid ${FOREST_GREEN_DARK};
  box-shadow: -1px 8px 6px rgba(0,0,0,0.19), 0 -6px 6px 1px rgba(0,0,0,0.23);
`;

const SectionContainer = styled(Container)`
  height: 100%;
  position: relative;
  z-index: 1;
`;

const ImageCol = styled(Col)`
  align-items: center;
  display: none;

  ${largeTablet(css`
    display: flex;
  `)}
`;

const AboutText = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;

  ${largeTablet(css`
    margin-top: 4rem;
    margin-bottom: 4rem;
  `)}

  > h1 {
    color: ${TITLE_LIGHT};
    font-size: ${FONT_54};
  }

  > p {
    color: ${SUBTITLE_LIGHT};
    font-size: ${FONT_18};
    line-height: 1.6em;
  }

  a {
    color: ${HIGHLIGHT};
    font-weight: 700;

    &:hover {
      transition: all .3s ease;
      background: ${`linear-gradient(${HIGHLIGHT},${HIGHLIGHT}) 0 100%/100% 1px no-repeat`};
    }
  }
`;

const AboutSection = () => {
  const image = useStaticQuery(graphql`
    query imageQuery {
      file(name: {eq: "meAbout"}) {
        childImageSharp {
          fixed(width: 260, height: 260) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <Background>
      <SectionContainer>
        <ImageCol width={[1, 0.6, 0.5, 0.5]}>
          <Img fixed={image.file.childImageSharp.fixed} />
        </ImageCol>
        <Col width={[1, 1, 1, 1]}>
          <AboutText>
            <h1>{'About'}</h1>
            <p>
              {'I\'m a full time Web Developer, originally from London and now living in Berlin. Currently I am working for the audio personalisation company '}
              <a href="https://www.mimi.io/en/behind-mimi">{'Mimi Hearing Technologies.'}</a>
            </p>
            <p>
              {'My day to day role covers a wide range of development tasks, currently within the scope of building and maintaining Serverless Web Applications.'}
            </p>
            <Link to="/about">{'More on me >'}</Link>
          </AboutText>
        </Col>
      </SectionContainer>
    </Background>
  );
};

export default AboutSection;
