import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Profile</Text>
    </View>
  );
};

export const screenOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
      >
        <Image source={require('../assets/images/menu.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.replace('ProfileDetail')}
      >
        <Image source={require('../assets/images/edit.png')} style={{ width: 20, height: 20, marginRight: 10 }} />
      </TouchableOpacity>
    ),
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;