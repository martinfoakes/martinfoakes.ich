import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/Layout/Grid';
import ProjectCards from 'components/Landing/ProjectsCards';

const SectionContainer = styled(Container)`
  height: 28rem;
`;

const ProjectsSection = () => (
  <>
    <SectionContainer>
      <Container>
        <ProjectCards />
      </Container>
    </SectionContainer>
  </>
);

export default ProjectsSection;
