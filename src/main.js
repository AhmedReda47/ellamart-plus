import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import {
  VAppBar,
  VBadge,
  VBreadcrumbs,
  VBtn,
  VBtnToggle,
  VCard,
  VCardText,
  VCol,
  VContainer,
  VHover,
  VIcon,
  VLayout,
  VList,
  VListItem,
  VListItemTitle,
  VMain,
  VMenu,
  VNavigationDrawer,
  VRating,
  VRow,
  VSkeletonLoader,
} from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
// Components

// Pinia config
import { createPinia } from 'pinia';

// Swiper config
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Vuetify config
const vuetify = createVuetify({
  components: {
    VAppBar,
    VBadge,
    VBreadcrumbs,
    VBtn,
    VBtnToggle,
    VCard,
    VCardText,
    VCol,
    VContainer,
    VHover,
    VIcon,
    VLayout,
    VList,
    VListItem,
    VListItemTitle,
    VMain,
    VMenu,
    VNavigationDrawer,
    VRating,
    VRow,
    VSkeletonLoader,
  },
  directives,
  theme: {
    defaultTheme: 'light',
  },
});

createApp(App).use(vuetify).use(router).use(createPinia()).mount('#app');
