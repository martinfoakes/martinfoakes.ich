import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { navHeight } from 'helper/constants/styles';
import Nav from '../Nav/Nav';
import GlobalStyle from './GlobalStyle';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Nav siteTitle={data.site.siteMetadata.title} />
      <div>
        <main id="main" style={{ paddingTop: navHeight }}>{children}</main>
        <footer>
          {' '}
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
