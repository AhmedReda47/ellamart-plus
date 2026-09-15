import api from './api';

export const getProducts = () => {
  return api.get('/products');
};
export const getProductsByCategory = (category) => {
  return api.get(`/products/category/${category}`);
};
