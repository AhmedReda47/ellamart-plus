import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/products/:category/:title',
    name: 'products_category',
    component: () => import('@/views/ProductsCategory.vue'),
  },
  {
    path: '/products/product-details/:productId',
    name: 'products_details',
    component: () => import('@/views/ProductDetails.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
