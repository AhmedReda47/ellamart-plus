<template>
  <div class="drawer">
    <v-navigation-drawer
      style="padding: 0px"
      location="right"
      temporary
      v-model="drawer"
    >
      <span class="close-cart" @click="closeCart"><CloseIcon /></span>

      <div class="cart-content">
        <h3 class="cart-title">Cart Drawer</h3>

        <div v-if="items.length === 0" class="empty-cart">
          Your cart is empty.
        </div>

        <div v-else v-for="item in items" :key="item.id" class="cart-item">
          <img :src="item.thumbnail" :alt="item.title" class="cart-image" />

          <div class="cart-info">
            <h4>{{ item.title }}</h4>
            <p>
              <span>
                {{
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100),
                  )
                }}$
              </span>
            </p>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { useCartStore } from '@/stores/cartStore';
import CloseIcon from '../icons/CloseIcon.vue';
export default {
  name: 'CartDrawer',
  components: {
    CloseIcon,
  },
  computed: {
    items() {
      const cartStore = useCartStore();
      return cartStore.items;
    },
    drawer: {
      get() {
        const cartStore = useCartStore();
        return cartStore.drawer;
      },
      set(value) {
        const cartStore = useCartStore();

        if (value) {
          cartStore.openCart();
        } else {
          cartStore.closeCart();
        }
      },
    },
  },
  methods: {
    closeCart() {
      const cartStore = useCartStore();
      cartStore.closeCart();
    },
  },
};
</script>

<style scoped>
.close-cart {
  display: inline-block;
  margin: 16px 16px 0;
  color: #ff6b6b;
  font-weight: 600;
  cursor: pointer;
}

.cart-content {
  padding: 20px 16px;
}

.cart-title {
  margin: 0 0 16px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #222;
}

.empty-cart {
  color: #666;
  font-size: 0.9rem;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.cart-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
}

.cart-info {
  flex: 1;
}

.cart-info h4 {
  margin: 0 0 4px;
  font-size: 0.95rem;
  color: #333;
}

.cart-info p {
  margin: 0;
  color: #ff6b6b;
  font-weight: 700;
}
</style>
