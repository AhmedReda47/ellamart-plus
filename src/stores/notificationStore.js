// stores/notificationStore.js

import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    show: false,
    message: '',
  }),

  actions: {
    showMessage(message) {
      this.message = message;
      this.show = true;
    },

    closeMessage() {
      this.show = false;
    },
  },
});
