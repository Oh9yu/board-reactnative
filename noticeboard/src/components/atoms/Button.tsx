import React from 'react';
import {styled} from 'styled-components/native';

interface Props {
  title: string;
  pressHandler: () => void;
}

const Button = ({title, pressHandler}: Props) => {
  return (
    <ButtonContainer onPress={pressHandler}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.color.blue3};
  shadow-color: ${({theme}) => theme.color.darkGrey};
  shadow-opacity: 0.5;
  shadow-offset: 1px 1px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.color.blue6};
`;
