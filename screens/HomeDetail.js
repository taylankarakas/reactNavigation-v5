import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';

const HomeDetail = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>HomeDetail</Text>
      <Button title='Go to Home' onPress={() => navigation.goBack()} />
    </View>
  );
};

export const screenOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../assets/images/back.png')}
          style={{ width: 20, height: 20, marginLeft: 10 }}
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

export default HomeDetail;