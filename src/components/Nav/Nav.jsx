import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/Layout/Grid';
import Hamburger from 'components/Nav/Hamburger';

import { navHeight } from 'helper/constants/styles';

const NavContainer = styled.div`
  height: ${navHeight};
  margin-bottom: 2vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const NavMenu = styled(Container)`
  display: flex;  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

const NavHome = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  > h1 {
    font-size: 3.4em;
    font-weight: 400;
    margin: 0;
  }
`;

const Nav = () => (
  <NavContainer>
    <NavMenu as="nav">
      <NavHome to="/">
        <h1>{'{MF}'}</h1>
      </NavHome>
      <Hamburger />
    </NavMenu>
  </NavContainer>
);

export default Nav;
