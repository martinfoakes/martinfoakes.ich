import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { navLinkHover, FONT_24 } from 'helper/constants/styles';


const MenuClick = styled.div`
  display: block;
  position: relative;
  top: 0px;
  left: 0px;
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
    transform-origin: 4px 0px;
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
    background: #232323;
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
  position: absolute;
  width: 22rem;
  height: 100vh;
  margin: -80px 0 0 -16rem;
  padding: 60px;
  padding-top: 90px;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);

  > a {
    font-size: ${FONT_24};
  }

  > li {
    padding: 10px 0;
    font-size: 22px;
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
