import { Products } from '../data/dummy-data';

const initialState = {
  products: Products,
  favoriteProduct: [],
  productInBasket: [],
};

const ProductReducer = (state = initialState, action) => {
  return state;
};

export default ProductReducer;