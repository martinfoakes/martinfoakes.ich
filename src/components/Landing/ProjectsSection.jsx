import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/Layout/Grid';
import ProjectCards from 'components/Landing/ProjectsCards';

const SectionContainer = styled(Container)`
  height: 100%;
  flex-direction: column;
`;

const ProjectsSection = () => (
  <>
    <SectionContainer>
      <h2>{'My Projects >'}</h2>
      <Container>
        <ProjectCards />
      </Container>
    </SectionContainer>
  </>
);

export default ProjectsSection;
