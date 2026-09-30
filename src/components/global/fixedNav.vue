<template>
  <div class="fixed-nav">
    <v-app-bar color="#02218f">
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <router-link to="/">
              <img
                src="@/assets/images/ellamart-logo.png"
                alt="logo Image"
                class="w-50"
            /></router-link>
          </v-col>
          <v-col cols="8">
            <ul
              class="links d-flex text-white justify-space-between"
              style="list-style: none"
            >
              <li v-for="category in categories" :key="category.title">
                <router-link
                  :to="{
                    name: 'products_category',
                    params: { category: category.route, title: category.title },
                  }"
                  style="color: white; text-decoration: none"
                  >{{ category.title }}</router-link
                >
              </li>
            </ul>
          </v-col>
          <v-col
            cols="2"
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
                v-if="items.length"
                location="right- top"
                :content="items.length"
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
import { useProductStore } from '@/stores/productStore';
import { mapState } from 'pinia';
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
  computed: {
    ...mapState(useProductStore, ['categories']),
    ...mapState(useCartStore, ['items']),
  },
};
</script>

<style scoped></style>
