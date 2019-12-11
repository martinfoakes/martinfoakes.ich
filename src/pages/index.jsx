import React from 'react';

import IntroSection from 'components/Landing/IntroSection';
import ProjectsSection from 'components/Landing/ProjectsSection';
import Layout from 'components/Layout/Layout';
import SEO from 'components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Martin Foakes" />
    <IntroSection />
    <ProjectsSection />
  </Layout>
);

export default IndexPage;
