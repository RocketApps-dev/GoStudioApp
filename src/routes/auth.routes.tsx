import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from '../pages/Auth/Dashboard';
import { Scheduling } from '../pages/Auth/Scheduling';
import { AppointmentCreated } from '../pages/Auth/AppointmentCreated';

const Stack = createNativeStackNavigator();

export const AuthRoutes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Scheduling"
        component={Scheduling}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppointmentCreated"
        component={AppointmentCreated}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
