import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Col } from 'components/Layout/Grid';
import {
  WHITE,
  BACKGROUND_DARK,
} from 'helper/constants/styles';

import Beyer from 'images/beyer.png';

const projectsData = [
  {
    to: '/projects#portal',
    img: '',
    title: 'Mimi Portal',
    text: 'A user portal for Mimi Hearing Technologies\' partners to access technical documentation and SDK assets',
  },
  {
    to: '/projects#beyer',
    img: Beyer,
    title: 'Beyerdynamic Audio Test',
    text: 'V1 web implementation of the hearing test for Beyerdynamic\'s MIY headphone app',
  },
];

const CardContainer = styled(Col)`
  margin: 2rem;
  width: 30%;
  background-color: ${BACKGROUND_DARK};
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  cursor: pointer;
  height: 24rem;

  &:hover {
    transform: translateY(-5%);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

const CardImg = styled.img`
  margin: 28px auto;
  width: 100%;
`;

const CardTitle = styled.h3`
  color: ${WHITE};
`;

const CardText = styled.p`
  color: ${WHITE};
  line-height: 1.6rem;
`;

const ProjectCards = () => projectsData.map(project => (
  <CardContainer>
    <Link to={project.to}>
      <CardImg src={project.img} alt="" />
      <CardTitle>{project.title}</CardTitle>
      <CardText>{project.text}</CardText>
    </Link>
  </CardContainer>
));

export default ProjectCards;
