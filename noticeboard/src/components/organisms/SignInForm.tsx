import React, {useState} from 'react';
import {styled} from 'styled-components/native';
import SignInput from '../molecules/SignInput';

const SignInForm = () => {
  const [inputValue, setInputValue] = useState({id: '', password: ''});

  const textChangeHandler = (name: string, text: string) => {
    setInputValue({...inputValue, [name]: text});
  };

  console.log(inputValue);

  return (
    <Form>
      <SignInput
        lable="아이디를 입력해주세요"
        placeholder="user@email.com"
        secureTextEntry={false}
        value={inputValue.id}
        handleInputChange={inputText => {
          textChangeHandler('id', inputText);
        }}
      />
      <SignInput
        lable="비밀번호를 입력해주세요"
        placeholder="********"
        secureTextEntry={true}
        value={inputValue.password}
        handleInputChange={inputText => {
          textChangeHandler('password', inputText);
        }}
      />
    </Form>
  );
};

export default SignInForm;

const Form = styled.View``;
