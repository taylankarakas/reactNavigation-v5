import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const OrderDetail = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>OrderDetail</Text>
      <Button title='Go to Orders' onPress={() => navigation.goBack()} />
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

export default OrderDetail;