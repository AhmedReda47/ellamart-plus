import api from './api';

export const getProducts = () => {
  return api.get('/products');
};
export const getProductsByCategory = (category) => {
  return api.get(`/products/category/${category}`);
};
export const getProductById = (productId) => {
  return api.get(`/products/${productId}`);
};
