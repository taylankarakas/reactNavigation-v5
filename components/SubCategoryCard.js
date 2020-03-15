import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const SubCategoryCard = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.subCategoryCard}
    >
      <Text style={styles.cardText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  subCategoryCard: {
    backgroundColor: '#fff',
    minWidth: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    minHeight: 50,
  },
  cardText: { fontSize: 12 },
});

export default SubCategoryCard;