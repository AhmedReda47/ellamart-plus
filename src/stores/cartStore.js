import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    drawer: false,
    items: [],
  }),
  actions: {
    openCart() {
      this.drawer = true;
    },
    closeCart() {
      this.drawer = false;
    },
    toggleCart() {
      this.drawer = !this.drawer;
    },
    addToCart(product) {
      this.items.push(product);
    },
  },
});
