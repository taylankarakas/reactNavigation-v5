import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Home</Text>
      <Button title='Go to Home Detail' onPress={() => navigation.navigate('HomeDetail')} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;