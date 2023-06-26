import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './screens/User/Sign/SignIn';
import SignUp from './screens/User/Sign/SignUp';
import {ThemeProvider} from 'styled-components/native';
import Theme from './styles/Theme';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
