import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

// import {PlansContextContainer} from '../Screens/BusinessOverview/Plans/StateManagement/Context';
import MainScreen from '../Screens/MainScreen';
import SecondScreen from '../Screens/SecondScreen';
import LoginScreen from '../Screens/LoginScreen';
// import SecondScreen from '../Screens/SecondScreen';

const Stack = createNativeStackNavigator<StackParamList>();
const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;

export type StackParamList = {
  Main: undefined;
  Second: undefined;
  Login: undefined;
};

export type StackScreenProps<T extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, T>;
