import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppProvider } from './src/contexts';
import { DropdownMessageProvider } from './src/contexts/DropdownMessageContext';
import { Routes } from './src/routes';
import { getDeviceToken } from './src/services/firebase';

const App = () => {
  return (
    <DropdownMessageProvider>
      <NavigationContainer>
        <AppProvider>
          <Routes />
        </AppProvider>
      </NavigationContainer>
    </DropdownMessageProvider>
  );
};

export default App;
