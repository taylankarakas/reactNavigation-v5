import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Register = () => {
  return (
    <View style={styles.screen}>
      <Text>Register Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Register;