import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';
import HeaderIcon from '../components/HeaderIcon';

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
        <HeaderIcon source={require('../assets/images/menu.png')} />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.replace('ProfileDetail')}
      >
        <HeaderIcon
          source={require('../assets/images/edit.png')}
          style={{ marginRight: 20 }}
        />
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