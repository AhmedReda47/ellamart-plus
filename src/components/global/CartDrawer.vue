<template>
  <div class="drawer">
    <v-navigation-drawer
      style="padding: 30px 0 30px 30px"
      location="right"
      temporary
      v-model="drawer"
      width="450"
      class="cart-drawer"
    >
      <v-card class="px-0" elevation="0">
        <div class="d-flex justify-space-between align-center">
          <v-card-title class="px-0" style="font-size: 17px; font-weight: bold"
            >Shopping Cart</v-card-title
          >
          <CloseIcon class="close" style="cursor: pointer" @click="closeCart" />
        </div>
        <v-card-text class="px-0 py-3" style="color: #6f6f6f"
          >{{ items.length }} items</v-card-text
        >
        <v-card-text
          class="px-0"
          style="color: #6f6f6f"
          v-if="items.length === 0"
          >Free shipping for all orders over $10000</v-card-text
        >
        <v-card-text
          class="px-0 text-center"
          style="color: #6f6f6f"
          v-if="items.length === 0"
          >Your cart is empty</v-card-text
        >
        <div class="bar-parent mt-5 position-relative" v-if="items.length">
          <CartTrack
            :fill="
              parseInt((calcTotalPrice / 10000) * 100) < 50
                ? '#F44336'
                : parseInt((calcTotalPrice / 10000) * 100) > 50 &&
                  parseInt((calcTotalPrice / 10000) * 100) < 100
                ? '#FF9800'
                : '#4cAF50'
            "
            :style="`
              position: absolute;
              bottom: 10%;
              z-index: 1;
              left: calc(${
                parseInt((calcTotalPrice / 10000) * 100) <= 100
                  ? parseInt((calcTotalPrice / 10000) * 100)
                  : 100
              }% - 30px);
              transition: 0.15s all ease-in-out;
            `"
          />
          <v-progress-linear
            :color="
              parseInt((calcTotalPrice / 10000) * 100) < 50
                ? 'red'
                : parseInt((calcTotalPrice / 10000) * 100) > 50 &&
                  parseInt((calcTotalPrice / 10000) * 100) < 100
                ? 'orange'
                : 'green'
            "
            height="7"
            :model-value="
              parseInt((calcTotalPrice / 10000) * 100) <= 100
                ? parseInt((calcTotalPrice / 10000) * 100)
                : 100
            "
            striped
          ></v-progress-linear>
        </div>
        <v-card-text
          v-if="items.length && 10000 - calcTotalPrice > 0"
          class="px-0 pt-2"
          style="color: #6f6f6f"
          >Only ${{ 10000 - calcTotalPrice }} away from Free
          Shipping</v-card-text
        >
        <v-card-text
          v-if="items.length && 10000 - calcTotalPrice <= 0"
          class="px-0 pt-2"
          style="color: #6f6f6f"
          >Your order now included Free Shipping</v-card-text
        >
        <v-card-actions v-if="items.length === 0">
          <v-btn
            density="compact"
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: rgb(199, 199, 199);
            "
            class="w-100 py-3"
            variant="outlined"
            height="45"
            @click="closeCart"
            >Continue Shopping</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card
        class="mt-5 items-card"
        elevation="0"
        v-if="items.length"
        max-height="380"
        style="overflow-y: auto"
      >
        <v-container class="px-0">
          <v-row v-for="item in items" :key="item.id" class="align-center">
            <v-col cols="4" class="px-0">
              <img
                :src="item.thumbnail"
                :alt="item.title"
                class="w-100"
                style="object-fit: cover"
              />
            </v-col>
            <v-col cols="8" class="px-0">
              <v-card-title
                class="px-0"
                style="font-size: 14px; line-height: 1.2; color: #6f6f6f"
                >{{ item.title }} Sample - {{ item.category }}</v-card-title
              >
              <br />
              <v-card-title style="color: #6f6f6f" class="px-0">
                Category: {{ item.category }}</v-card-title
              >
              <v-card-text
                style="color: #6f6f6f; font-weight: bold"
                class="px-0 py-0 my-1"
              >
                ${{
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100),
                  ) * item.quantity
                }}
              </v-card-text>
              <v-card-title style="color: #6f6f6f"
                >Quantity: {{ item.quantity }}</v-card-title
              >

              <div
                class="counter px-1 my-1"
                style="
                  border-radius: 30px;
                  border: 1px solid rgb(201, 201, 201);
                  width: fit-content;
                "
              >
                <v-icon
                  @click="item.quantity > 1 ? item.quantity-- : false"
                  size="20"
                  style="color: #6f6f6f"
                  >mdi-minus</v-icon
                >
                <input
                  type="number"
                  style="
                    border: none;
                    outline: none;
                    text-align: center;
                    width: 40px;
                    font-size: 13px;
                    color: #6f6f6f;
                  "
                  class="py-2"
                  min="1"
                  v-model.number="item.quantity"
                />
                <v-icon
                  @click="item.quantity++"
                  size="20"
                  style="color: #6f6f6f"
                  >mdi-plus</v-icon
                >
              </div>
              <CloseIcon
                class="close"
                style="float: right; margin-right: 12px; cursor: pointer"
                elevation="0"
                @click="deleteFromCart(item.id)"
              />
            </v-col>
            <v-col cols="12" class="pa-0">
              <hr
                style="
                  border: 0;
                  border-top: 1.5px solid rgb(151 151 151);
                  width: 100%;
                "
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-card class="p-0 mt-5" elevation="0">
        <v-card-actions
          v-if="items.length"
          class="d-flex flex-column ga-2 justify-space-between align-center"
        >
          <v-btn
            density="compact"
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: rgb(199, 199, 199);
            "
            class="w-100 py-3"
            variant="elevated"
            elevation="0"
            color="blue"
            height="45"
            >Checkout</v-btn
          >
          <v-btn
            density="compact"
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: rgb(199, 199, 199);
            "
            class="w-100 py-3"
            variant="outlined"
            elevation="0"
            color="blue"
            height="45"
            @click="$router.push({ name: 'cart_page' })"
            >View Cart</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { useCartStore } from '@/stores/cartStore';
import CloseIcon from '../icons/CloseIcon.vue';
import CartTrack from '../icons/CartTrack.vue';
import { mapState } from 'pinia';
export default {
  name: 'CartDrawer',
  components: {
    CloseIcon,
    CartTrack,
  },
  computed: {
    ...mapState(useCartStore, ['items']),
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
    calcTotalPrice() {
      let total = 0;
      this.items.forEach((product) => {
        total +=
          Math.ceil(
            product.price - product.price * (product.discountPercentage / 100),
          ) * product.quantity;
      });
      return total;
    },
  },
  methods: {
    closeCart() {
      const cartStore = useCartStore();
      cartStore.closeCart();
    },
    deleteFromCart(productId) {
      const cartStore = useCartStore();
      cartStore.deleteFormCart(productId);
    },
  },
};
</script>

<style scoped lang="scss">
.items-card {
  :deep(.v-card--variant-elevated) {
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #205dc2 transparent;

    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #205dc2;
      border-radius: 999px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }
}

.close {
  transition: transform 0.4s ease-in-out;
  padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  border: 1px solid #6f6f6f;
}
.close:hover {
  background-color: #6f6f6f1d;
  transform: rotate(90deg);
}
/* .cart-content {
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
} */
</style>
