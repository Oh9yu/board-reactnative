import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export default function SignIn({navigation}: any) {
  console.log('navigation: ', navigation.navigate);

  return (
    <SafeAreaView>
      <View>
        <Text>SignIn</Text>
        <Button title="signIn" />
      </View>
      <Container>
        <Title fontSize={30}>타이틀</Title>
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View``;

const Title = styled.Text<{fontSize: number}>`
  font-size: ${props => props.fontSize}px;
`;
