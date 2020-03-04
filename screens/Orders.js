import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';
import HeaderIcon from '../components/HeaderIcon';

const Orders = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Orders</Text>
      <Button title='Go to Order Detail' onPress={() => navigation.navigate('OrderDetail')} />
    </View>
  );
};

export const screenOptions = ({ navigation }) => {
  return {
    headerLeft: () => {
      return (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <HeaderIcon source={require('../assets/images/menu.png')} />
        </TouchableOpacity>
      );
    }
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Orders;