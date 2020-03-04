import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Button, StyleSheet, Platform } from 'react-native';
import { Image } from '@shoutem/ui';
import { DrawerItemList } from '@react-navigation/drawer';

// Drawer content
export const drawerContent = props => {
  return (
    <SafeAreaView style={styles.drawerWrapper}>

      {/* Close drawer button */}
      <TouchableOpacity
        style={styles.closeButtonWrapper}
        onPress={() => props.navigation.closeDrawer()}
      >
        <Image source={require('../assets/images/close.png')} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>

      <View style={styles.drawerContentWrapper}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('Profile')}>
          <Image styleName="medium-avatar" source={require('../assets/images/profile-photo.jpg')} />
          <Text style={styles.userName}>Atil Taylan Karakas</Text>
        </TouchableOpacity>
        <View>
          <DrawerItemList {...props} />
        </View>
      </View>
      <View style={styles.logoutButton}>
        <Button title='log out' />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 20,
    width: 150,
    marginTop: 100
  },
});