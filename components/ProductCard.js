import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const ProductCard = props => {
  return (
    <View style={styles.cardContainer}>
      <Image source={require('../assets/images/404.png')} style={{ width: '100%', height: 80 }} />
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    minHeight: 200,
    width: 120,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    elevation: 2,
    marginBottom: 10,
    marginRight: 10,
  },

});

export default ProductCard;