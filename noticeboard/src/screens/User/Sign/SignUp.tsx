import {View, Text} from 'react-native';
import React from 'react';
import SignUpForm from '../../../components/organisms/SignUpForm';
import {styled} from 'styled-components/native';
import NavHeader from '../../../components/organisms/NavHeader';

export default function SignUp() {
  return (
    <Container>
      {/* <NavHeader /> */}
      <SignUpForm />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  background-color: #fff;
  height: 100%;
`;
