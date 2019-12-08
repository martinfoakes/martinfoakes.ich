import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';

const Container = styled(Flex)`
  max-width: 100rem;
  width: 100%;
`;
Container.displayName = 'Container';
Container.defaultProps = {
  mx: 'auto',
  px: 3,
};

const Row = styled(Flex)`
  flex-wrap: wrap;
  flex-grow: 1;
  width: 100%;
`;
Row.displayName = 'Row';
Row.defaultProps = {
  mx: -3,
};

const Col = Box;
Col.displayName = 'Col';
Col.defaultProps = {
  px: 3,
};


export {
  Col,
  Container,
  Row,
};
