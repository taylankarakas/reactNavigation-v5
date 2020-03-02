import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Register = () => {
  return (
    <View style={styles.screen}>
      <Text>Register Page</Text>
    </View>
  );
};

export const screenOptions = ({ navigation }) => {
  return {
    headerStyle: {
      // remove header bottom shadow
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
    },
    headerLeft: () => {
      return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/back.png')}
            style={{ width: 20, height: 20, marginLeft: 10 }}
          />
        </TouchableOpacity>
      )
    },
    title: '',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
});

export default Register;