import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Image } from '@shoutem/ui';

import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { connect } from 'react-redux'

import { mainTabNavigator } from './Tabs';
import { NotificationStack } from './Stacks';

import HeaderIcon from '../components/HeaderIcon';
import CustomButton from '../components/Button';
import { isLogin } from '../actions';

// import { drawerContent } from '../utils/Drawer';



const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation, test }) => {

  // Drawer content
  const drawerContent = props => {
    return (
      <SafeAreaView style={styles.drawerWrapper}>
        {/* Close drawer button */}
        <TouchableOpacity
          style={styles.closeButtonWrapper}
          onPress={() => props.navigation.closeDrawer()}
        >
          <HeaderIcon
            source={require('../assets/images/close.png')}
            style={{ marginLeft: 0 }}
          />
        </TouchableOpacity>

        <View style={styles.drawerContentWrapper}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.navigation.navigate('Profile')}
          >
            <Image
              styleName="medium-avatar"
              source={require('../assets/images/profile-photo.jpg')}
            />
            <Text style={styles.userName}>Atil Taylan Karakas</Text>
          </TouchableOpacity>
          <View>
            <DrawerItemList {...props} />
          </View>
        </View>
        {/* <View style={styles.logoutButton}>
        <Button title='log out' />
      </View> */}
        <CustomButton title='Logout' style={styles.logoutButton} onPress={() => test()} />
      </SafeAreaView>
    );
  };

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
  drawerWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  closeButtonWrapper: {
    width: 70,
    height: 70,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 40 : 0,
  },
  drawerContentWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    flexDirection: 'column',
    minHeight: '35%',
    height: '50%'
  },
  userName: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 16,
    marginTop: 20
  },
  logoutButton: {
    marginTop: 100,
  },
});

const mapStateToProps = state => {
  console.log('-->', state)
  return {
    login: state.LoginReducer.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    test: () => dispatch(isLogin(false))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator);