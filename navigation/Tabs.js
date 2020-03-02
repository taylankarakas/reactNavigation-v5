import * as React from 'react';
import { Image } from '@shoutem/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStack, ProfileStack, OrderStack } from './Stacks';

const Tab = createBottomTabNavigator();

export const mainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName, dimensions;

          switch (route.name) {

            case 'Profile':
              dimensions = focused
                ? { width: 25, height: 25 }
                : { width: 20, height: 20 }
              return <Image styleName="small-avatar" style={dimensions} source={require('../assets/images/profile-photo.jpg')} />

            case 'Home':
              iconName = focused
                ? require('../assets/images/home-black.png')
                : require('../assets/images/home.png');
              break;

            case 'Orders':
              iconName = focused
                ? require('../assets/images/order-black.png')
                : require('../assets/images/order.png');
              break;

            default:
              break;
          }
          return <Image source={iconName} style={{ width: 20, height: 20 }} resizeMode='contain' />;

          // if (route.name === 'Home') {
          //   iconName = focused
          //     ? require('../assets/images/home-black.png')
          //     : require('../assets/images/home.png');
          // } else if (route.name === 'Profile') {
          //   dimensions = focused
          //     ? { width: 25, height: 25 }
          //     : { width: 20, height: 20 }
          //   return <Image styleName="small-avatar" style={dimensions} source={require('../assets/images/profile-photo.jpg')} />
          // } else if (route.name === 'Orders') {
          //   iconName = focused ?
          //     require('../assets/images/order-black.png')
          //     : require('../assets/images/order.png');
          // }

        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Orders" component={OrderStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator >
  );
};