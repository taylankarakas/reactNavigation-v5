import React from 'react';
import { StyleSheet, View, TextInput, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { Button, Text, TouchableOpacity } from '@shoutem/ui';

const Login = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <TextInput
          style={styles.input}
          placeholder={'Email'}
          keyboardType='email-address'
        />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          keyboardType='numeric'
          secureTextEntry
        />
        <Button
          styleName="secondary"
          style={styles.loginButton}
        >
          <Text>LOGIN</Text>
        </Button>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text>Register?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const screenOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'skyblue',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    height: 50,
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  loginButton: {
    width: '40%',
    marginBottom: 10,
  },
});

export default Login;