import { defineStore } from 'pinia';
import { getProductsByCategory, getProducts } from '@/services/productService';
export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    laptops: [],
    smartPhones: [],
    fragrances: [],
    groceries: [],
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
    async fetchLaptops() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await getProductsByCategory('laptops');
        this.laptops = response.data.products;
      } catch (error) {
        this.error = error.message || 'Failed to fetch laptops';
      } finally {
        this.isLoading = false;
      }
    },
    async fetchSmartPhones() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await getProductsByCategory('smartphones');
        this.smartPhones = response.data.products;
      } catch (error) {
        this.error = error.message || 'Failed to fetch smartPhones';
      } finally {
        this.isLoading = false;
      }
    },
    async fetchFragrances() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await getProductsByCategory('fragrances');
        this.fragrances = response.data.products;
      } catch (error) {
        this.error = error.message || 'Failed to fetch fragrances';
      } finally {
        this.isLoading = false;
      }
    },
    async fetchGroceries() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await getProductsByCategory('groceries');
        this.groceries = response.data.products;
      } catch (error) {
        this.error = this.error.message || 'Failed to fetch groceries';
      } finally {
        this.isLoading = false;
      }
    },
  },
});
