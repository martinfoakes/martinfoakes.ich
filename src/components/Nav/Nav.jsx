import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/Layout/Grid';
import Hamburger from 'components/Nav/Hamburger';

import { GithubLink } from 'helper/constants/constants';
import { navHeight, FONT_54 } from 'helper/constants/styles';

import GithubIcon from 'images/GithubIcon';

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
    font-size: ${FONT_54};
    font-weight: 400;
    margin: 0;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.a`
  width: 2.8rem;
  margin-right: 2rem;
  transition: all .3s ease;

  &:hover {
    opacity: 0.4;
  }
`;

const Nav = () => (
  <NavContainer>
    <NavMenu as="nav">
      <NavHome to="/">
        <h1>{'{MF}'}</h1>
      </NavHome>
      <NavRight>
        <SocialIcon href={GithubLink}><GithubIcon /></SocialIcon>
        <Hamburger />
      </NavRight>
    </NavMenu>
  </NavContainer>
);

export default Nav;
