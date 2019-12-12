import React, { Component } from 'react';
import { Link } from 'gatsby';

// import Hamburger from 'components/Navigation/Hamburger';
import { GithubLink, LinkedinLink } from 'helper/constants/constants';

import GithubIcon from 'images/GithubIcon';
import LinkedinIcon from 'images/LinkedinIcon';

import {
  NavContainer,
  NavMenu,
  NavHome,
  NavRight,
  SocialIcon,
  StyledLi,
  StyledUnder,
} from './NavStyleComps';

const SocialLinks = [
  {
    href: GithubLink,
    id: 'github',
    image: <GithubIcon />,
  },
  {
    href: LinkedinLink,
    id: 'linkedin',
    image: <LinkedinIcon />,
  },
];

const SiteLinks = [
  {
    to: '/',
    id: 'projects',
    text: 'Projects',
  },
  {
    to: '/',
    id: 'about',
    text: 'About',
  },
  {
    to: '/',
    id: 'experience',
    text: 'Experience',
  },
  {
    to: '/',
    id: 'contact',
    text: 'Contact',
  },
];

class Nav extends Component {
  state = {
    top: true,
    position: { width: 0, left: 0 },
    active: 0,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const top = window.scrollY < 100;
      if (top !== this.state.top) {
        this.setState({ top });
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
    const { top, position, active } = this.state;
    return (
      <NavContainer top={top}>
        <NavMenu as="nav">
          <NavHome top={top} to="/">
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
                    key={social.id}
                    onMouseOver={this.mouseOver}
                    top={top}
                    href={social.href}
                  >
                    {social.image}
                  </SocialIcon>
                ))
              }
              {
                SiteLinks.map(link => (
                  <StyledLi
                    key={link.id}
                    onMouseOver={this.mouseOver}
                    top={top}
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
