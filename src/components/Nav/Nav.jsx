import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Container } from 'components/Layout/Grid';
// import Hamburger from 'components/Nav/Hamburger';


import { GithubLink, LinkedinLink, transitions } from 'helper/constants/constants';
import { navHeight, FONT_54 } from 'helper/constants/styles';

import GithubIcon from 'images/GithubIcon';
import LinkedinIcon from 'images/LinkedinIcon';

import {
  BACKGROUND_DARK,
  FOREST_GREEN_LIGHT,
  TEXT_LIGHT,
  PARAGRAPH_BLACK,
} from '../../helper/constants/styles';

const NavContainer = styled.div`
  height: ${navHeight};
  margin-bottom: 2vh;
  background-color: ${props => (!props.top ? `${BACKGROUND_DARK}` : null)};
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
    color: ${props => (!props.top ? `${TEXT_LIGHT}` : `${PARAGRAPH_BLACK}`)};
    font-size: ${FONT_54};
    font-weight: 700;
    margin: 0;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;

  > ul {
    display: flex;
    align-items: center;
  }
`;

const SocialIcon = styled.a`
  width: 2.8rem;
  margin-left: 1.8rem;
  transition: all .3s ease;
  color: ${props => (!props.top ? `${TEXT_LIGHT}` : `${PARAGRAPH_BLACK}`)};
  text-align: center;
  padding-top: 8px;

  &:hover {
    opacity: 0.4;
  }
`;

const StyledLi = styled.li`
  margin-left: 2.4rem;
  align-items: center;
  transition: all .3s ease;
  color: ${props => (!props.top ? `${TEXT_LIGHT}` : `${PARAGRAPH_BLACK}`)};
  font-weight: 700;

  &:hover {
    opacity: 0.4;
  }

  > a {
    color: inherit;
  }
`;

const StyledUnder = styled.span`
  position: absolute;
  background-color: ${FOREST_GREEN_LIGHT};
  top: 4.2rem;
  right: 0;
  height: 0.1rem;
  ${transitions.satanSnap};
  width: ${props => props.position.width}px;
  /* Pass in active to reset position if mouse has left list area.*/
  transform: translateX(${props => (props.active > 0 ? props.position.left : 100)}px);
`;

const SocialLinks = [
  {
    href: GithubLink,
    image: <GithubIcon />,
  },
  {
    href: LinkedinLink,
    image: <LinkedinIcon />,
  },
];

const SiteLinks = [
  {
    to: '/',
    text: 'Projects',
  },
  {
    to: '/',
    text: 'About',
  },
  {
    to: '/',
    text: 'Experience',
  },
  {
    to: '/',
    text: 'Contact',
  },
];

class Nav extends Component {
  state = {
    theTop: true,
    position: { width: 0, left: 0 },
    active: 0,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const theTop = window.scrollY < 100;
      if (theTop !== this.state.theTop) {
        this.setState({ theTop });
      }
    });
  }

  // Map the sliding bar to the element the mouse is over.
  mouseOver = (e) => {
    const barRect = e.currentTarget.getBoundingClientRect();
    this.setState({
      position: {
        width: barRect.width,
        left: (barRect.left + window.scrollX) - (window.innerWidth - barRect.width),
      },
    });
  };

  // Make bar visible when mouse enters link list.
  mouseEnterList = () => {
    this.setState({ active: 1 });
  };

  // Make bar invisible when mouse leaves list.
  mouseLeaveList = () => {
    this.setState({ active: 0 });
  };

  render() {
    const { theTop, position, active } = this.state;
    return (
      <NavContainer top={theTop}>
        <NavMenu as="nav">
          <NavHome top={theTop} to="/">
            <h1>{'{MF}'}</h1>
          </NavHome>
          <NavRight
            onFocus={this.mouseEnterList}
            onBlur={this.mouseLeaveList}
            onMouseOver={this.mouseEnterList}
            onMouseOut={this.mouseLeaveList}
          >
            <ul>
              {
                SocialLinks.map(social => (
                  <SocialIcon
                    onMouseOver={this.mouseOver}
                    top={theTop}
                    href={social.href}
                  >
                    {social.image}
                  </SocialIcon>
                ))
              }
              {
                SiteLinks.map(link => (
                  <StyledLi
                    onMouseOver={this.mouseOver}
                    top={theTop}
                  >
                    <Link to={link.to}>{link.text}</Link>
                  </StyledLi>
                ))
              }
            </ul>
            {/* <Hamburger /> */}
          </NavRight>
        </NavMenu>
        <StyledUnder active={active} position={position} />
      </NavContainer>
    );
  }
}

export default Nav;
