import * as React from 'react';
import { Image, TouchableOpacity, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home, { screenOptions as homeScreenOptions } from '../screens/Home';
import HomeDetail, { screenOptions as homeDetailScreenOptions } from '../screens/HomeDetail';
import Profile, { screenOptions as profileScreenOptions } from '../screens/Profile';
import ProfileDetail from '../screens/ProfileDetail';
import Orders from '../screens/Orders';
import OrderDetail from '../screens/OrderDetail';
import Login, { screenOptions as loginScreenOptions } from '../screens/Login';
import Register, { screenOptions as registerScreenOptions } from '../screens/Register';
import Notifications, { screenOptions as notificationScreenOptions } from '../screens/Notifications';
import NotificationDetail, { screenOptions as notificationDetailScreenOptions } from '../screens/NotificationDetail';

const Stack = createStackNavigator();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'purple' : 'white',
  },
};

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={Home} screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={homeScreenOptions}
      />
      <Stack.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={homeDetailScreenOptions}
      />
    </Stack.Navigator>
  );
};

export const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName={Profile} screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={profileScreenOptions}
      />
      <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
    </Stack.Navigator>
  );
};

export const OrderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Orders' component={Orders} />
      <Stack.Screen name='OrderDetail' component={OrderDetail} />
    </Stack.Navigator>
  );
};

export const NotificationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Notifications'
        component={Notifications}
        options={notificationScreenOptions}
      />
      <Stack.Screen
        name='NotificationDetail'
        component={NotificationDetail}
        options={notificationDetailScreenOptions}
      />
    </Stack.Navigator>
  );
};

export const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={loginScreenOptions}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={registerScreenOptions}
      />
    </Stack.Navigator>
  );
};