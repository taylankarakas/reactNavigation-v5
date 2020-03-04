import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';

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
        <Image source={require('../assets/images/menu.png')} style={{ width: 25, height: 25, marginLeft: 20 }} />
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