import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStack, ProfileStack, OrderStack } from './Stacks';

const Tab = createBottomTabNavigator();

export const mainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('../assets/images/home-black.png')
              : require('../assets/images/home.png');
          } else if (route.name === 'Profile') {
            iconName = focused ?
              require('../assets/images/profile-black.png')
              : require('../assets/images/profile.png');
          } else if (route.name === 'Orders') {
            iconName = focused ?
              require('../assets/images/order-black.png')
              : require('../assets/images/order.png');
          }

          return <Image source={iconName} style={{ width: 20, height: 20 }} resizeMode='contain' />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Orders" component={OrderStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};