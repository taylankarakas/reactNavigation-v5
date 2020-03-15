import React from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import HeaderIcon from '../components/HeaderIcon';
import CategoryCard from '../components/CategoryCard';
import { Categories } from '../data/dummy-data';

const Home = ({ navigation }) => {

  const dataRenderItem = ({ item }) => {
    return (
      <CategoryCard
        onPress={() => navigation.navigate('HomeDetail', { catId: item.id, catTitle: item.title, color: item.color, badges: item.badges })}
        title={item.title} color={item.color}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={Categories}
        renderItem={dataRenderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export const screenOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
      >
        <HeaderIcon source={require('../assets/images/menu.png')} />
      </TouchableOpacity>
    ),
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingLeft: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },
});

export default Home;