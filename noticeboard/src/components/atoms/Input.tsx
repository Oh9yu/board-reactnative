import React from 'react';
import {styled} from 'styled-components/native';

interface Props {
  placeholder: string;
  secureTextEntry: boolean;
  value: string;
  handleInputChange: (e: string) => void;
}

const Input = ({
  placeholder,
  secureTextEntry,
  value,
  handleInputChange,
}: Props) => {
  return (
    <InputSection
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={handleInputChange}
    />
  );
};

export default Input;

const InputSection = styled.TextInput`
  font-size: 16px;
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.color.lightGrey};
  padding: 10px;
`;
