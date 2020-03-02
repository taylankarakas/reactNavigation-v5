import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';

const NotificationDetail = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Notification Detail</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
};

export const screenOptions = () => {
  return {
    title: '',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationDetail;