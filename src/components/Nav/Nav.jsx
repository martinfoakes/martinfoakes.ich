import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

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

const NavMenu = styled.nav`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 18px;
  padding-right: 18px;
  max-width: 100rem;
  width: 100%;
  align-items: center;
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
    <NavMenu>
      <NavHome to="/">
        <h1>{'{MF}'}</h1>
      </NavHome>
      <Hamburger />
    </NavMenu>
  </NavContainer>
);

export default Nav;
