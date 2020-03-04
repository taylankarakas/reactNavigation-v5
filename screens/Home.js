import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';
import HeaderIcon from '../components/HeaderIcon';

const Home = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Home</Text>
      <Button title='Go to Home Detail' onPress={() => navigation.navigate('HomeDetail')} />
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
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;