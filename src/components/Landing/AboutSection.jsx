import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/Layout/Grid';
import {
  FOREST_GREEN_LIGHT,
} from 'helper/constants/styles';

const SectionContainer = styled(Container)`
  height: 28rem;
`;

const AboutSection = () => (
  <div style={{ backgroundColor: FOREST_GREEN_LIGHT }}>
    <SectionContainer>
      <h3>{'About'}</h3>
    </SectionContainer>
  </div>
);

export default AboutSection;
