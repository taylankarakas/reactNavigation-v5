import React from 'react';
import { StyleSheet } from 'react-native';
import { Image, View, Text } from '@shoutem/ui';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { mainTabNavigator } from './Tabs';
import { NotificationStack } from './Stacks';

import { drawerContent } from '../utils/Drawer';

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
              <View>
                <Image
                  source={require('../assets/images/notification.png')}
                  style={{ width: 20, height: 20 }}
                />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>1</Text>
                </View>
              </View>
            );
          }
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    left: 12,
    top: -8,
    backgroundColor: 'red',
    borderRadius: 20,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText: {
    color: '#fff',
    fontSize: 12
  },
});