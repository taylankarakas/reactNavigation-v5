import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { TabNavigator } from './Tabs';
import { OrderStack } from './Stacks';

const Drawer = createDrawerNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Orders" component={OrderStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};