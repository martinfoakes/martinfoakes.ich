import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { GithubLink, LinkedinLink } from 'helper/constants/constants';
import {
  navLinkHover,
  FONT_54,
  FONT_20,
} from 'helper/constants/styles';

import GithubIcon from 'images/GithubIcon';
import LinkedinIcon from 'images/LinkedinIcon';

const MenuClick = styled.div`
  display: block;
  color: #fafae5;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  user-select: none;

  > input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  > span {
    display: block;
    width: 28px;
    height: 2px;
    margin-bottom: 6px;
    position: relative;
    background: #0D0900;
    border-radius: 2px;
    z-index: 1;
    transform-origin: 4px 0;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
      background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
      opacity 0.55s ease;
  }

  > span:first-child {
    transform-origin: 0% 0%;
  }

  > span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  &:hover {
    > span {
      background: #757575;
    }
  }

  > input:checked ~ span {
    opacity: 0.9;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #fafae5;
  }

  > input:checked ~ span[id="2"] {
    transform: rotate(-45deg) translate(-5px, 0px);
  }

  > input:checked ~ span[id="3"] {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  > input:checked ~ div {
    transform: none;
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: max-content;
  height: 100vh;
  width: 100vw;
  margin: 0;
  background: #14171c;
  opacity: 1;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(160%,0);
  transition: transform 0.6s cubic-bezier(0.77,0.2,0.05,1.0);
  box-shadow: -2px 1px 5px 4px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const MenuLinks = styled.div`
  position: absolute;
  top: 6rem;
  left: 10rem;

  > ul {
    list-style: none;
    padding-inline-start: 0;
  }
`;

const StyledLink = styled(Link)`
  font-size: ${FONT_54};
  text-decoration: none;
  color: #fafae5;

  > li {
    margin-bottom: 1.6rem;
    width: max-content;
    &:hover {
      transition: all .4s ease;
      color: ${navLinkHover};
      transform: translateX(-0.6rem);
      background: linear-gradient(#fafae5,#fafae5) 0 100%/100% 1px no-repeat;
    }
  }
`;

const LinksSection = styled.div`
  position: absolute;
  bottom: 11rem;
  right: 6rem;

  > ul {
    list-style: none;
    padding-inline-start: 0;
    display: flex;
    flex-direction: column;
  }

  a {
    color: #fafae5;
  }
`;

const Copyright = styled.div`
  font-size: ${FONT_20};
  z-index: 11;
  position: fixed;
  right: 6rem;
  bottom: 6rem;
`;

const Hamburger = () => (
  <>
    <MenuClick>
      <input type="checkbox" />
      <span id="1" />
      <span id="2" />
      <span id="3" />
      <MenuList id="menu">
        <MenuLinks>
          <ul>
            <StyledLink to="/"><li>{'Home'}</li></StyledLink>
            <StyledLink to="/"><li>{'My Work'}</li></StyledLink>
            <StyledLink to="/"><li>{'Contact Me'}</li></StyledLink>
          </ul>
        </MenuLinks>
        <LinksSection>
          <ul>
            <a href={GithubLink}><GithubIcon /></a>
            <a href={LinkedinLink}><LinkedinIcon /></a>
          </ul>
        </LinksSection>
      </MenuList>
      <Copyright>
        {`Copyright(c) ${new Date().getFullYear()} Martin Foakes. All rights reserved`}
      </Copyright>
    </MenuClick>
  </>
);

export default Hamburger;
