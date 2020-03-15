import * as React from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import { LoginStack } from './Stacks';
import DrawerNavigator from './Drawer';

const AppNavigator = () => {

  const isLogin = useSelector(state => state.LoginReducer.isLogin)

  return (
    <NavigationContainer>
      {isLogin ? <DrawerNavigator /> : <LoginStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;