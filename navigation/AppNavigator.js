import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { LoginStack } from './Stacks';
import { DrawerNavigator } from './Drawer';

export const AppNavigator = () => {
  const isLogin = true;
  if (!isLogin) {
    return (
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};