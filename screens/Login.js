import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Icon, Text } from '@shoutem/ui';

const Login = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.input}
        placeholder={'Email'}
      />
      <TextInput
        style={styles.input}
        placeholder={'Password'}
      />
      <Button
        styleName="secondary"
        style={styles.loginButton}
      >
        <Text>LOGIN</Text>
      </Button>
    </View>
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
    marginBottom: 20,
    borderRadius: 30,
  },
  loginButton: {
    width: '40%',
  },
});

export default Login;