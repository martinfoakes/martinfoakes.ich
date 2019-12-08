import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { navLinkHover, FONT_40 } from 'helper/constants/styles';


const MenuClick = styled.div`
  display: block;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  user-select: none;

  > a {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
  }

  > a:hover {
    color: ${navLinkHover};
  }

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
    width: 40px;
    height: 6px;
    margin-bottom: 6px;
    position: relative;
    background: #757575;
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

  > input:checked ~ span {
    opacity: 0.9;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #fafae5;
  }

  > input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  > input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  > input:checked ~ ul {
    transform: none;
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: max-content;
  height: 100vh;
  margin: -82px 0 0 -30rem;
  padding: 0 30rem 0 4rem;
  padding-top: 110px;
  background: #14171c;
  opacity: 0.96;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(160%,0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  box-shadow: -2px 1px 5px 4px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  > a {
    font-size: ${FONT_40};
    text-decoration: none;
    transition: all .4s ease;
    color: #fafae5;
    margin-bottom: 1.15rem;
  }

  > a:hover {
    transform: translate3d(-.2em,0,0);
    background: linear-gradient(#fafae5,#fafae5) 0 100%/100% 1px no-repeat;
  }
`;

const Hamburger = () => (
  <>
    <MenuClick>
      <input type="checkbox" />
      <span />
      <span />
      <span />
      <MenuList id="menu">
        <Link href="/"><li>{'About'}</li></Link>
        <Link href="/"><li>{'Work'}</li></Link>
        <Link href="/"><li>{'Contact'}</li></Link>
      </MenuList>
    </MenuClick>
  </>
);

export default Hamburger;
