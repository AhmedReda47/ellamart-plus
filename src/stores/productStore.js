import { defineStore } from 'pinia';
import { getProducts } from '@/services/productService';
export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchProducts() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await getProducts();
        this.products = response.data.products.slice(0, 8);
      } catch (error) {
        this.error = error.message || 'Failed to fetch products';
      } finally {
        this.isLoading = false;
      }
    },
  },
});
