import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import SignInput from '../../../components/molecules/SignInput';
import SignInForm from '../../../components/organisms/SignInForm';

export default function SignIn({navigation}: any) {
  return (
    <SafeAreaView>
      <View>
        <Title fontSize={24}>SignIn</Title>
        <Button title="signIn" />
      </View>
      <SignInForm />
    </SafeAreaView>
  );
}

const Container = styled.View``;

const Title = styled.Text<{fontSize: number}>`
  font-size: ${props => props.fontSize}px;
  color: ${({theme}) => theme.color.blue6};
`;
