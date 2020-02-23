import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const HomeDetail = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>HomeDetail</Text>
      <Button title='Go to Home' onPress={() => navigation.goBack()} />
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

export default HomeDetail;