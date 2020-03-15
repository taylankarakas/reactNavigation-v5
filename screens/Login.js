import React from 'react';
import { StyleSheet, View, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Text, TouchableOpacity } from '@shoutem/ui';
import { connect } from 'react-redux';

import CustomButton from '../components/Button';
import { isLogin } from '../actions';

const loginHandler = (beLogin) => {
  beLogin(true)
};

const Login = ({ navigation, login, beLogin }) => {
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
        {/* <Button
          styleName="secondary"
          style={styles.loginButton}
        >
          <Text>LOGIN</Text>
        </Button> */}
        <CustomButton style={styles.loginButton} title='LOGIN' onPress={() => loginHandler(beLogin)} />
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text>Register?</Text>
            {console.log('props =>', login)}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const screenOptions = () => {
  return {
    headerShown: false,
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
    marginBottom: 10,
    backgroundColor: '#fff'
  },
});

const mapStateToProps = state => {
  console.log('-->', state)
  return {
    login: state.LoginReducer.isLogin
  };
};

const mapDispatchToProps = {
  beLogin: isLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);