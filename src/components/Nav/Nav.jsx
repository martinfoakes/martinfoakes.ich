import { Link } from 'gatsby';
import React from 'react';

import styled from 'styled-components';

const NavContainer = styled.div`
  height: 70px;
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
`;

const NavHome = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  > h1 {
    font-size: 3.4em;
  }
`;

const Nav = () => (
  <NavContainer>
    <NavMenu>
      <NavHome to="/">
        <h1>{'{MF}'}</h1>
      </NavHome>
    </NavMenu>
  </NavContainer>
);

export default Nav;
