<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers :offers="offers" :bestSellers="bestSellers" />
    <ProductsSwiper
      :products="products"
      :isLoading="isLoading"
      @add-to-cart="handleAddToCart"
    />
  </div>
</template>

<script>
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';
import UpperBanner from '@/components/home_page/UpperBanner.vue';
import TheFeatures from '@/components/home_page/TheFeatures.vue';
import TopOffers from '@/components/home_page/TopOffers.vue';
import ProductsSwiper from '@/components/home_page/ProductsSwiper.vue';

import consolesImage from '@/assets/images/consoles.webp';
import soundbarsImage from '@/assets/images/soundbars.webp';
import chairsImage from '@/assets/images/chairs.webp';
import ePhoneXImage from '@/assets/images/ePhoneX.webp';
import laptopImage from '@/assets/images/laptop.webp';

export default {
  name: 'HomeView',
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsSwiper,
  },
  data() {
    return {
      productStore: useProductStore(),
      offers: [
        {
          id: 1,
          name: 'Consoles',
          image: consolesImage,
        },
        {
          id: 2,
          name: 'Soundbars',
          image: soundbarsImage,
        },
        {
          id: 3,
          name: 'Chairs',
          image: chairsImage,
        },
      ],
      bestSellers: [
        {
          id: 1,
          name: 'ePhoneX',
          image: ePhoneXImage,
        },
        {
          id: 2,
          name: 'laptop',
          image: laptopImage,
        },
      ],
    };
  },
  async mounted() {
    await this.productStore.fetchProducts();
  },
  computed: {
    products() {
      return this.productStore.products;
    },
    isLoading() {
      return this.productStore.isLoading;
    },
  },
  methods: {
    handleAddToCart(product) {
      const cartStore = useCartStore();
      cartStore.addToCart(product);
    },
  },
};
</script>
