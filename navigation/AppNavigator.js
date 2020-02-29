import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { mainTabNavigator } from './Tabs';
import { OrderStack, LoginStack } from './Stacks';

const Drawer = createDrawerNavigator();

export const AppNavigator = () => {
  const isLogin = false;
  if (!isLogin) {
    return (
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={mainTabNavigator} />
        <Drawer.Screen name="Orders" component={OrderStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};