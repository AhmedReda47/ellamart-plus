<template>
  <div class="fixed-nav">
    <v-app-bar color="#02218f">
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <img
              src="@/assets/images/ellamart-logo.png"
              alt="logo Image"
              class="w-50"
            />
          </v-col>
          <v-col cols="5">
            <ul
              class="links d-flex text-white justify-space-between"
              style="list-style: none"
            >
              <li>Them Demo</li>
              <li>Shop</li>
              <li>Product</li>
              <li>New In</li>
              <li>Must Have</li>
              <li>Collections</li>
            </ul>
          </v-col>
          <v-col
            cols="5"
            class="d-flex justify-end align-center"
            style="gap: 20px"
          >
            <SearchIcon />
            <div
              class="whishlists d-flex flex-column align-center"
              style="cursor: pointer"
              @click="openCart"
            >
              <v-badge
                location="right- top"
                content="2"
                color="red"
                offsetX="-14"
                style="z-index: 10"
              >
              </v-badge>
              <CartIcon />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import CartIcon from '@/components/icons/CartIcon.vue';
export default {
  name: 'FixedNav',
  components: {
    SearchIcon,
    CartIcon,
  },
  methods: {
    openCart() {
      const cartStore = useCartStore();
      cartStore.toggleCart();
    },
  },
};
</script>

<style scoped></style>
