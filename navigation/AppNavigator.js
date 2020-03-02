import * as React from 'react';
import { Image, View, Text, SafeAreaView, TouchableOpacity, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';

import { mainTabNavigator } from './Tabs';
import { OrderStack, LoginStack, NotificationStack } from './Stacks';

const Drawer = createDrawerNavigator();

const drawerContent = props => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', }}>

      {/* Close drawer button */}
      <TouchableOpacity
        style={{ width: '100%', alignItems: 'flex-end', paddingRight: 20 }}
        onPress={() => props.navigation.closeDrawer()}
      >
        <Image source={require('../assets/images/close.png')} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>

      <View style={{ alignItems: 'center', justifyContent: 'space-between', marginTop: 50, flexDirection: 'column', minHeight: '35%', height: '50%' }}>
        <View>
          <Image source={require('../assets/images/account.png')} />
          <Text>Atil Taylan Karakas</Text>
        </View>
        <View>
          <DrawerItemList {...props} />
        </View>
      </View>
      <View style={{ borderRadius: 20, width: 150, marginTop: 100 }}>
        <Button title='log out' />
      </View>
    </SafeAreaView>
  );
};

export const AppNavigator = () => {
  const isLogin = true;
  if (!isLogin) {
    return (
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{ activeTintColor: 'skyblue' }}
        drawerContent={drawerContent}
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
    </NavigationContainer>
  );
};