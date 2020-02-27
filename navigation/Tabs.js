import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStack, ProfileStack } from './Stacks';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('../assets/home-black.png')
              : require('../assets/home.png');
          } else if (route.name === 'Profile') {
            iconName = focused ?
              require('../assets/profile-black.png')
              : require('../assets/profile.png');
          }

          return <Image source={iconName} style={{ width: 20, height: 20 }} resizeMode='contain' />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};