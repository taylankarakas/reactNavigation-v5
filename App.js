import * as React from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';

import Home from './screens/Home';
import HomeDetail from './screens/HomeDetail';
import Profile from './screens/Profile';
import ProfileDetail from './screens/ProfileDetail';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName={Home} screenOptions={{
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        >
          <Image source={require('./assets/menu.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />
        </TouchableOpacity>
      ),
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeDetail" component={HomeDetail} />
    </Stack.Navigator>
  );
};

const ProfileStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName={Profile} screenOptions={{
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        >
          <Image source={require('./assets/menu.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />
        </TouchableOpacity>
      ),
    }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('./assets/home-black.png')
              : require('./assets/home.png');
          } else if (route.name === 'Profile') {
            iconName = focused ?
              require('./assets/profile-black.png')
              : require('./assets/profile.png');
          }

          // You can return any component that you like here!
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

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Notification" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}