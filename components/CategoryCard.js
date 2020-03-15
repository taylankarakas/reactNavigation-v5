import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const CategoryCard = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...props}
      style={{ ...styles.cardContainer, backgroundColor: props.color }}
    >
      <Text style={styles.cardTitle}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    minHeight: 200,
    borderRadius: 20,
    shadowColor: '#ccc',
    shadowOffset: { width: 5, height: 5, },
    shadowOpacity: 1,
    elevation: 5,
    marginBottom: 15,
    marginRight: 15,
    width: 180,
    padding: 15
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default CategoryCard;