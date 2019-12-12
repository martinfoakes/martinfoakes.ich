/* eslint-disable import/prefer-default-export */
import { useSpring, config } from 'react-spring';

export const GithubLink = 'https://github.com/martinfoakes';

export const LinkedinLink = 'https://www.linkedin.com/in/martinfoakes';

export const transitions = {
  twoTwosSnap: `
    transition: all 0.222s;
    transition-timing-function: cubic-bezier(0.060, 0.975, 0.195, 0.985);
  `,

  allTheFoursSnap: `
    transition: all 0.444s;
    transition-timing-function: cubic-bezier(0.060, 0.975, 0.195, 0.985);
  `,

  eightBallSnap: `
  transition: all 0.888s;
  transition-timing-function: cubic-bezier(0.060, 0.975, 0.195, 0.985);
`,
};

export const animations = {
  verticleSlide: (from, delay) =>
    useSpring({
      opacity: 1,
      transform: 'translate3d(0, 0rem, 0)',
      from: { opacity: 0, transform: `translate3d(0, ${from}, 0)` },
      config: config.snap,
      delay,
    }),
  horizontalSlide: (from, delay) =>
    useSpring({
      opacity: 1,
      transform: 'translate3d(0rem, 0, 0)',
      from: { opacity: 0, transform: `translate3d(${from}, 0, 0)` },
      config: config.snap,
      delay,
    }),
};
