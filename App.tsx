import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from './src/navigation/controls';
import MainNavigator from './src/navigation/mainNavigator';
import { API_URL } from './src/config/envVariables';

const App = () => {
  console.log(API_URL);

  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
