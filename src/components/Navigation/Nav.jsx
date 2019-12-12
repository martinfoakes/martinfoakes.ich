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
