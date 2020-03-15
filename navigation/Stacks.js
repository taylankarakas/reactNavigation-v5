import * as React from 'react';
import { Platform, Easing } from 'react-native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';

import Home, { screenOptions as homeScreenOptions } from '../screens/Home';
import HomeDetail, { screenOptions as homeDetailScreenOptions } from '../screens/HomeDetail';
import Profile, { screenOptions as profileScreenOptions } from '../screens/Profile';
import ProfileDetail from '../screens/ProfileDetail';
import Orders, { screenOptions as ordersScreenOptions } from '../screens/Orders';
import OrderDetail from '../screens/OrderDetail';
import Login, { screenOptions as loginScreenOptions } from '../screens/Login';
import Register, { screenOptions as registerScreenOptions } from '../screens/Register';
import Notifications, { screenOptions as notificationScreenOptions } from '../screens/Notifications';
import NotificationDetail, { screenOptions as notificationDetailScreenOptions } from '../screens/NotificationDetail';
import Basket from '../screens/Basket';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 40,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
    easing: Easing.linear
  },
};

const closeConfig = {
  animation: 'timing',
  duration: 500,
  easing: Easing.linear
}

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'purple' : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : '#000',
  // ...TransitionPresets.FadeFromBottomAndroid,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  transitionSpec: { open: config, close: closeConfig },
  gesturesEnabled: true
};

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={Home} screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Categories"
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
      <Stack.Screen name='Orders' component={Orders} options={ordersScreenOptions} />
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

export const BasketStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Basket' component={Basket} />
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
      <Stack.Screen name='test' component={HomeStack} />
    </Stack.Navigator>
  );
};