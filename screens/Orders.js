import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Orders = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Orders</Text>
      <Button title='Go to Order Detail' onPress={() => navigation.navigate('OrderDetail')} />
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

export default Orders;