import React from 'react';
import {styled} from 'styled-components/native';
import Input from '../atoms/Input';

interface Props {
  lable: string;
  placeholder: string;
  secureTextEntry: boolean;
  value: string;
  handleInputChange: (e: string) => void;
}

const SignInput = ({
  lable,
  placeholder,
  secureTextEntry,
  value,
  handleInputChange,
}: Props) => {
  return (
    <InputBox>
      <Lable>{lable}</Lable>
      <Input
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        handleInputChange={handleInputChange}
      />
    </InputBox>
  );
};

export default SignInput;

const Lable = styled.Text`
  font-size: 16px;
`;

const InputBox = styled.View``;
