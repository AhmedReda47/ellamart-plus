import { defineStore } from 'pinia';
import {
  getProductById,
  getProductsByCategory,
  getProducts,
} from '@/services/productService';
export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    categoryProducts: [],
    laptops: [],
    smartPhones: [],
    fragrances: [],
    groceries: [],
    categories: [
      {
        title: 'Smart Phones',
        route: 'smartphones',
      },
      {
        title: 'Laptops',
        route: 'laptops',
      },
      {
        title: 'Furniture',
        route: 'furniture',
      },
      {
        title: 'Mens Shoes',
        route: 'mens-shoes',
      },
      {
        title: 'Mens Watches',
        route: 'mens-watches',
      },
      {
        title: 'Womens Bags',
        route: 'womens-bags',
      },
      {
        title: 'Womens Jewellery',
        route: 'womens-jewellery',
      },
      {
        title: 'Motorcycle',
        route: 'motorcycle',
      },
    ],
    singleProduct: {},
    quickViewProduct: null,
    isQuickViewOpen: false,
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
        this.error = error.message || 'Failed to fetch groceries';
      } finally {
        this.isLoading = false;
      }
    },
    async fetchProductsByCategory(category) {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await getProductsByCategory(category);

        this.categoryProducts = response.data.products;
      } catch (error) {
        this.error = error.message || 'Failed to fetch products by category';
      } finally {
        this.isLoading = false;
      }
    },
    async fetchProductById(productId) {
      this.isLoading = true;
      this.error = null;
      this.singleProduct = null;
      try {
        const response = await getProductById(productId);
        this.singleProduct = response.data;
      } catch (error) {
        this.error = error.message || 'Failed to fetch single product';
      } finally {
        this.isLoading = false;
      }
    },
    openQuickView(product) {
      this.quickViewProduct = product;
      this.isQuickViewOpen = true;
    },

    closeQuickView() {
      this.isQuickViewOpen = false;
      this.quickViewProduct = null;
    },
  },
});
