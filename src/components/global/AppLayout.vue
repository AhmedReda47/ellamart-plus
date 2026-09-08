<template>
  <div class="layout">
    <v-layout class="app-layout">
      <CartDrawer />
      <AppNav />
      <FixedNav />
      <v-main class="app-main">
        <slot></slot>
      </v-main>
      <AppFooter />
    </v-layout>
  </div>
</template>
<script>
import CartDrawer from './CartDrawer.vue';
import AppFooter from './AppFooter.vue';
import AppNav from './AppNav.vue';
import FixedNav from './fixedNav.vue';
export default {
  data: () => ({
    drawer: false,
  }),
  components: {
    CartDrawer,
    AppFooter,
    AppNav,
    FixedNav,
  },
};
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  flex-direction: column;
}

.app-main {
  flex: 1 0 auto;
  width: 100%;
  padding-top: 150px;
}
</style>
