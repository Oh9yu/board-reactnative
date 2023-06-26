import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import SignInput from '../../../components/molecules/SignInput';
import SignInForm from '../../../components/organisms/SignInForm';
import Theme from '../../../styles/Theme';

export default function SignIn({navigation}: any) {
  return (
    <Body>
      <Container width={75} height={80} bgc={Theme.color.blue1} shadow="#111">
        <Container width={85} height={90} bgc="#fff" shadow="transparent">
          <Logo source={require('../../../asset/images/logo.png')} />
          <SignInForm />
          <SignUpBtn title="회원이 아니신가요?" />
        </Container>
      </Container>
    </Body>
  );
}

interface styleProps {
  width: number;
  height: number;
  bgc: string;
  shadow: string;
}

const Body = styled.SafeAreaView`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 100%;
`;

const Container = styled.View<styleProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${props => props.width}%;
  height: ${props => props.height}%;
  background-color: ${props => props.bgc};
  border-radius: 10px;
  shadow-color: ${props => props.shadow};
  shadow-opacity: 0.3;
  shadow-offset: 3px 3px;
`;

const Logo = styled.Image`
  width: 120px;
  height: 120px;
`;

const SignUpBtn = styled.Button``;
