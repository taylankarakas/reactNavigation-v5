import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';

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
          <Image
            source={require('../assets/images/menu.png')}
            style={{ width: 20, height: 20, marginLeft: 10 }}
          />
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