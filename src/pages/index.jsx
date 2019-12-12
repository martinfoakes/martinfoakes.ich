import React from 'react';

import IntroSection from 'components/Landing/IntroSection';
import AboutSection from 'components/Landing/AboutSection';
// import ProjectsSection from 'components/Landing/ProjectsSection';
import Layout from 'components/Layout/Layout';
import SEO from 'components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Martin Foakes" />
    <IntroSection />
    <AboutSection />
    {/* <ProjectsSection /> */}
  </Layout>
);

export default IndexPage;
