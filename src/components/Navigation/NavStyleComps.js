import styled from 'styled-components';
import { Link } from 'gatsby';

import { Container } from 'components/Layout/Grid';

import { transitions } from 'helper/constants/constants';
import { navHeight, FONT_54 } from 'helper/constants/styles';

import {
  PARAGRAPH_BLACK,
  BACKGROUND_LIGHT,
  FOREST_GREEN_DARK,
} from '../../helper/constants/styles';

export const NavContainer = styled.div`
  height: ${navHeight};
  margin-bottom: 2vh;
  background-color: ${props => (!props.top ? `${PARAGRAPH_BLACK}` : null)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all .4s ease;
  box-shadow: ${props => (!props.top ? '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' : null)};
  z-index: 100;
`;

export const NavMenu = styled(Container)`
  display: flex;  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

export const NavHome = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  > h1 {
    color: ${props => (!props.top ? `${BACKGROUND_LIGHT}` : `${FOREST_GREEN_DARK}`)};
    font-size: ${FONT_54};
    font-weight: 700;
    margin: 0;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;

  > ul {
    display: flex;
    align-items: center;
  }
`;

export const SocialIcon = styled.a`
  width: 2.8rem;
  margin-left: 1.8rem;
  transition: all .3s ease;
  color: ${props => (!props.top ? `${BACKGROUND_LIGHT}` : `${FOREST_GREEN_DARK}`)};
  text-align: center;
  padding-top: 8px;

  &:hover {
    opacity: 0.4;
  }
`;

export const StyledLi = styled.li`
  margin-left: 2.4rem;
  align-items: center;
  transition: all .3s ease;
  color: ${props => (!props.top ? `${BACKGROUND_LIGHT}` : `${FOREST_GREEN_DARK}`)};
  font-weight: 700;

  &:hover {
    opacity: 0.4;
  }

  > a {
    color: inherit;
  }
`;

export const StyledUnder = styled.span`
  position: absolute;
  background-color: #475d5b;
  top: 4.2rem;
  right: 0;
  height: 0.1rem;
  ${transitions.eightBallSnap};
  width: ${props => props.position.width}px;
  /* Pass in active to reset position if mouse has left list area.*/
  transform: translateX(${props => (props.active > 0 ? props.position.left : 100)}px);
`;
