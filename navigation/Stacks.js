import * as React from 'react';
import { Image, TouchableOpacity, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home, { screenOptions as homeScreenOptions } from '../screens/Home';
import HomeDetail, { screenOptions as homeDetailScreenOptions } from '../screens/HomeDetail';
import Profile from '../screens/Profile';
import ProfileDetail from '../screens/ProfileDetail';
import Orders from '../screens/Orders';
import OrderDetail from '../screens/OrderDetail';

const Stack = createStackNavigator();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'purple' : 'white',
  },
};

export const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName={Home} screenOptions={defaultNavOptions}>
      <Stack.Screen name="Home" component={Home} options={homeScreenOptions} />
      <Stack.Screen name="HomeDetail" component={HomeDetail} options={homeDetailScreenOptions} />
    </Stack.Navigator>
  );
};

export const ProfileStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName={Profile} screenOptions={{
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        >
          <Image source={require('../assets/menu.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />
        </TouchableOpacity>
      ),
    }}>
      <Stack.Screen name="Profile" component={Profile} />
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