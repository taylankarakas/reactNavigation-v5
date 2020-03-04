import React from 'react';
import { Image } from '@shoutem/ui';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { mainTabNavigator } from './Tabs';
import { NotificationStack } from './Stacks';

import { drawerContent } from '../utils';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{ width: 300 }}
      drawerContentOptions={{ activeTintColor: 'skyblue' }}
      drawerContent={drawerContent}
      drawerType='slide'
    >
      <Drawer.Screen
        name="Home"
        component={mainTabNavigator}
        options={{
          drawerIcon: () => {
            return (
              <Image
                source={require('../assets/images/home-black.png')}
                style={{ width: 20, height: 20 }}
              />
            );
          }
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationStack}
        options={{
          drawerIcon: () => {
            return (
              <Image
                source={require('../assets/images/notification.png')}
                style={{ width: 20, height: 20 }}
              />
            );
          }
        }}
      />
    </Drawer.Navigator>
  );
};