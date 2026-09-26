<template>
  <app-layout>
    <router-view />
    <QuickView />
  </app-layout>
</template>

<script>
import AppLayout from '@/components/global/AppLayout.vue';
import QuickView from '@/components/global/QuickView.vue';
export default {
  components: {
    AppLayout,
    QuickView,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.v-rating__wrapper {
  margin-right: 5px;
}
</style>
