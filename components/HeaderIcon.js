import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from '@shoutem/ui';

const HeaderIcon = props => {
  return (
    <Image {...props} style={{ ...styles.image, ...props.style }} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
    marginLeft: 20,
  }
});

export default HeaderIcon;