import React from 'react';
import {styled} from 'styled-components/native';

interface Props {
  image: any;
  buttonHandler: () => void;
}

const NavHeader = ({image, buttonHandler}: Props) => {
  return <Container></Container>;
};

export default NavHeader;

const Container = styled.View`
  height: 60px;
  background-color: #ddd;
`;
