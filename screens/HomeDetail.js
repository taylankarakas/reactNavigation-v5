import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, FlatList, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import SubCategoryCard from '../components/SubCategoryCard';


const HomeDetail = ({ route, navigation }) => {

  const productDataRender = ({ item }) => {
    return (
      <ProductCard title={item.title} />
    );
  };

  const categoryId = route.params.catId;
  // store
  const dataOfCategory = useSelector(state => state.ProductReducer.products);

  // products
  const productsOfCategory = dataOfCategory.filter(product => product.categoryIds.indexOf(categoryId) > -1);

  return (
    <View style={styles.screen}>
      <View style={styles.filterSection}>
        <FlatList
          data={route.params.badges}
          keyExtractor={(item, index) => item[index]}
          renderItem={({ item }) => <SubCategoryCard title={item} onPress={null} />}
        />
      </View>
      <View style={styles.productListSection}>
        <Text style={{ color: route.params.color }}>Prominent</Text>
        <FlatList
          data={productsOfCategory}
          renderItem={productDataRender}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export const screenOptions = ({ route, navigation }) => {
  const { catTitle, color } = route.params;
  return {
    headerStyle: {
      backgroundColor: color,
    },
    headerTitle: catTitle,
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../assets/images/back.png')}
          style={{ width: 20, height: 20, marginLeft: 10 }}
        />
      </TouchableOpacity>
    ),
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row'
  },
  filterSection: {
    width: '30%',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc'
  },
  productListSection: {
    width: '70%',
    justifyContent: 'center',
    padding: 15
  }
});

export default HomeDetail;