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
      const existingItem = this.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      this.items.push({
        ...product,
        quantity: 1,
      });
    },
    deleteFormCart(productId) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
  },
});
