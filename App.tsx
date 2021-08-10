import React from 'react';
const { NavigationContainer } = require('@react-navigation/native');

import MainNavigator from './src/navigation/mainNavigator';
const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
