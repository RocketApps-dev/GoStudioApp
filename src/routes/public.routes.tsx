import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../pages/Public/SignIn';
import { SignUp } from '../pages/Public/SignUp';
import { RegistrationConcluded } from '../pages/Public/RegistrationConcluded';

const Stack = createNativeStackNavigator();

export const PublicRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegistrationConcluded"
        component={RegistrationConcluded}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
