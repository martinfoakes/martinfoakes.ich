import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/Layout/Grid';
import {
  FOREST_GREEN_LIGHT,
  TITLE_LIGHT,
} from 'helper/constants/styles';

const SectionContainer = styled(Container)`
  height: 28rem;
`;

const AboutTitle = styled.h2`
  color: ${TITLE_LIGHT};
`;

const AboutSection = () => (
  <div style={{ backgroundColor: FOREST_GREEN_LIGHT }}>
    <SectionContainer>
      <AboutTitle>{'About'}</AboutTitle>
    </SectionContainer>
  </div>
);

export default AboutSection;
