import Category from '../models/category';
import Product from '../models/product';

export const Categories = [
  new Category('c1', ['Computer', 'Keyboard', 'Mouse'], 'Electronic', '#ff9933'),
  new Category('c2', ['Toothbrush', 'Make Up', 'Perfume'], 'Cosmetic', '#ff9999'),
  new Category('c3', ['Bag', 'Jewelry'], 'Accessory', '#66b2ff'),
  new Category('c4', ['Detergent', 'Soap'], 'Hygiene', '#ccff99'),
];

export const Products = [
  new Product('p1', ['c1', 'c2'], 'Rechargable Toothbrush', 'Lorem Ipsum'),
  new Product('p2', ['c1'], 'Macbook Pro 13\'', 'Lorem Ipsum'),
  new Product('p3', ['c3'], 'Adidas Bag', 'Lorem Ipsum'),
  new Product('p4', ['c4'], 'Detergent', 'Lorem Ipsum'),
];