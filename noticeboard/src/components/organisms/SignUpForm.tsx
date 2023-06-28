import React, {useState} from 'react';
import {styled} from 'styled-components/native';
import SignInput from '../molecules/SignInput';
import Button from '../atoms/Button';

const SignUpForm = () => {
  const [inputValue, setInputValue] = useState({
    userName: '',
    id: '',
    password: '',
  });

  const textChangeHandler = (name: string, text: string) => {
    setInputValue({...inputValue, [name]: text});
  };

  const pressHandler = () => {};

  return (
    <Form>
      <SignInput
        lable="닉네임을 입력해주세요"
        placeholder="USER"
        secureTextEntry={false}
        value={inputValue.userName}
        handleInputChange={inputText => {
          textChangeHandler('userName', inputText);
        }}
      />
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
      <Button title="회원가입" pressHandler={pressHandler} />
    </Form>
  );
};

export default SignUpForm;

const Form = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 70%;
  height: 320px;
`;
