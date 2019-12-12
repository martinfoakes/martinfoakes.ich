import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

import { Container, Col } from 'components/Layout/Grid';
import { desktop, smallTablet, largeTablet } from 'helper/constants/mediaBreaks';
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
  box-shadow: -1px 8px 6px rgba(0,0,0,0.19), 0px -6px 6px 1px rgba(0,0,0,0.23);
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
      text-decoration: underline;
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
            {/* I originally trained as a graphic designer, studying at the Arts University Bournemouth. My time here gave me a great foundation in layout, hierarchy and visual design. It’s also where my keen eye for typography originated. After finishing my degree in 2014 I jumped head first into the digital industry learning all I could about the world of user centred design and research from a variety of intern, freelance and permanent positions. */}
          </AboutText>
        </Col>
      </SectionContainer>
    </Background>
  );
};

export default AboutSection;
