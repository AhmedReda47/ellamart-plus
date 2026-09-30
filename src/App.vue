<template>
  <app-layout>
    <router-view />
    <QuickView @show-msg="handleShowMsg" />
    <v-snackbar v-model="show" location="left bottom" timeout="3000"
      >{{ message }} has been added to your cart successfully!
      <template v-slot:actions>
        <v-icon @click="show = false">mdi-close</v-icon>
      </template>
    </v-snackbar>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/global/AppLayout.vue';
import QuickView from '@/components/global/QuickView.vue';

import { useNotificationStore } from '@/stores/notificationStore';
import { mapState } from 'pinia';
export default {
  data: () => ({
    itemTitle: '',
  }),
  components: {
    AppLayout,
    QuickView,
  },
  computed: {
    ...mapState(useNotificationStore, ['show', 'message']),
  },
  methods: {
    handleShowMsg(product) {
      this.itemTitle = product.title;
      this.bar = true;
    },
  },
};
</script>

<style lang="scss">
.v-layout.app-layout {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #205dc2;
}

html {
  scrollbar-width: thin;
  scrollbar-color: #205dc2 transparent;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #205dc2;
    border-radius: 999px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
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
