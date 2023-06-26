import React, {useState} from 'react';
import {styled} from 'styled-components/native';
import SignInput from '../molecules/SignInput';
import Button from '../atoms/Button';

const SignInForm = () => {
  const [inputValue, setInputValue] = useState({id: '', password: ''});

  const textChangeHandler = (name: string, text: string) => {
    setInputValue({...inputValue, [name]: text});
  };

  const pressHandler = () => {
    console.log(123);
  };

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
      <Button title="로그인" pressHandler={pressHandler} />
    </Form>
  );
};

export default SignInForm;

const Form = styled.View``;
