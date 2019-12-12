import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/Layout/Grid';

import { GithubLink } from 'helper/constants/constants';
import {
  FONT_40,
  FONT_54,
  FOREST_GREEN_DARK,
  FOREST_GREEN_LIGHT,
} from 'helper/constants/styles';

const SectionContainer = styled(Container)`
  flex-direction: column;
  justify-content: center;
  height: 34rem;

  > h2 {
    font-weight: 400;
    line-height: 4.6rem;
    font-size: ${FONT_40};
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
    background: ${`linear-gradient(${FOREST_GREEN_LIGHT},${FOREST_GREEN_LIGHT}) 0 100%/100% 1px no-repeat`};
  }

  > h1 {
    font-weight: 700;
    font-size: ${FONT_54};
    margin: 0;
  }
`;

const BerlinStyle = styled.span`
  font-weight: 700;
  animation: colorchange 10s infinite;
  @keyframes colorchange
    {
      0%   {color: #111d5e;}
      25%  {color: #b21f66;}
      50%  {color: #DD0000;}
      75%  {color: #FFCE00;}
      100% {color: #111d5e;}
    }
`;
const IntroSection = () => (
  <SectionContainer>
    <IndexLink href={GithubLink}><h1>{'My name\'s Martin Foakes.'}</h1></IndexLink>
    <h2>
      {'I\'m a Web Developer, currently working and living in '}
      <BerlinStyle>{'Berlin.'}</BerlinStyle>
    </h2>
  </SectionContainer>
);

export default IntroSection;
