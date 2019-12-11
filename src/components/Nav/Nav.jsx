import { Link } from 'gatsby';
import React, { Component } from 'react';
import styled from 'styled-components';

import { Container } from 'components/Layout/Grid';
import Hamburger from 'components/Nav/Hamburger';

import { GithubLink } from 'helper/constants/constants';
import { navHeight, FONT_54 } from 'helper/constants/styles';

import GithubIcon from 'images/GithubIcon';
import { TEXT_LIGHT } from '../../helper/constants/styles';

const NavContainer = styled.div`
  height: ${navHeight};
  margin-bottom: 2vh;
  background-color: ${props => (!props.top ? '#14171c' : null)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all .4s ease;
  box-shadow: ${props => (!props.top ? '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' : null)};
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
    color: ${props => (!props.top ? `${TEXT_LIGHT}` : '#0D0900')};
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
  color: ${props => (!props.top ? `${TEXT_LIGHT}` : '#0D0900')};

  &:hover {
    opacity: 0.4;
  }
`;

class Nav extends Component {
  state = {
    theTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const theTop = window.scrollY < 100;
      if (theTop !== this.state.theTop) {
        this.setState({ theTop });
      }
    });
  }

  render() {
    return (
      <NavContainer top={this.state.theTop}>
        <NavMenu as="nav">
          <NavHome top={this.state.theTop} to="/">
            <h1>{'{MF}'}</h1>
          </NavHome>
          <NavRight>
            <SocialIcon top={this.state.theTop} href={GithubLink}><GithubIcon /></SocialIcon>
            <Hamburger />
          </NavRight>
        </NavMenu>
      </NavContainer>
    );
  }
}

export default Nav;
