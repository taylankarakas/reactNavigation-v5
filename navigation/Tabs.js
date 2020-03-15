import * as React from 'react';
import { Image } from '@shoutem/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStack, ProfileStack, OrderStack, BasketStack } from './Stacks';

const Tab = createBottomTabNavigator();

export const mainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let imgSource, dimensions;

          switch (route.name) {

            case 'Profile':
              dimensions = focused
                ? { width: 25, height: 25 }
                : { width: 20, height: 20 }
              return (
                <Image
                  styleName="small-avatar"
                  style={dimensions} source={require('../assets/images/profile-photo.jpg')}
                />
              );

            case 'Home':
              imgSource = focused
                ? require('../assets/images/home-black.png')
                : require('../assets/images/home.png');
              break;

            case 'Orders':
              imgSource = focused
                ? require('../assets/images/order-black.png')
                : require('../assets/images/order.png');
              break;

            case 'Basket':
              imgSource = focused
                ? require('../assets/images/basket.png')
                : require('../assets/images/basket-black.png');
              break;
            default:
              break;
          }
          return <Image source={imgSource} style={{ width: 20, height: 20 }} resizeMode='contain' />;
        },
      })}
      tabBarOptions={{
        // activeTintColor: '#000',
        // inactiveTintColor: 'red',
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Orders" component={OrderStack} />
      <Tab.Screen name="Basket" component={BasketStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator >
  );
};