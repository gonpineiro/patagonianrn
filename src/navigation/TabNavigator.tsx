import React from 'react';
const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');

import { HomeScreen, HistoryScreen } from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeTab" component={HomeScreen} />
    <Tab.Screen name="HistoryTab" component={HistoryScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
