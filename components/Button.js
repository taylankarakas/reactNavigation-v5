import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const CustomButton = props => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.7}
      style={{ ...styles.buttonContainer, ...props.style }}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'skyblue',
    minWidth: '30%',
    width: 150,
    height: 50,
    borderRadius: 20,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
  },
});

export default CustomButton;