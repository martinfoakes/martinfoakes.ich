import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { navHeight } from 'helper/constants/styles';
import Nav from '../Navigation/Nav';
import GlobalStyle from './GlobalStyle';
import Breakpoint from './Breakpoint';
import FooterComp from './FooterComp';


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
      <Breakpoint />
      <GlobalStyle />
      <Nav siteTitle={data.site.siteMetadata.title} />
      <div>
        <main id="main" style={{ paddingTop: navHeight }}>{children}</main>
        <footer>
          <FooterComp />
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
