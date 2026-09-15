<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers :offers="offers" :bestSellers="bestSellers" />
    <ProductsComponent
      title="Flash Deals"
      titleColor="red"
      :products="products"
      :isLoading="isLoading"
      @add-to-cart="handleAddToCart"
    />
    <TopCategories :categories="Categories" />
    <ProductsComponent
      title="New Products"
      titleColor="black"
      :products="laptops"
      :isLoading="isLoading"
      @add-to-cart="handleAddToCart"
    />
    <QualityFeatures :features="Features" />
    <ProductsComponent
      title="Top Mobile Phones"
      titleColor="black"
      :products="smartPhones"
      :isLoading="isLoading"
      @add-to-cart="handleAddToCart"
    />
    <v-container fluid class="d-flex align-center justify-space-center my-10">
      <v-row>
        <v-col cols="6" v-for="img in Imgs" :key="img.id">
          <v-hover v-slot="{ isHovering, props }"
            ><div class="image-wrapper" v-bind="props">
              <img
                :src="img.src"
                alt=""
                class="w-100"
                :style="{
                  cursor: 'pointer',
                  transform: `scale(${isHovering ? 1.05 : 1})`,
                }"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <ProductsComponent
      title="Fragrances"
      titleColor="black"
      :products="fragrances"
      :isLoading="isLoading"
      @add-to-cart="handleAddToCart"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <img
            class="w-100"
            src="@/assets/images/Tv-Banner.webp"
            alt="Tv-Banner"
          />
        </v-col>
      </v-row>
    </v-container>
    <ProductsComponent
      title="Groceries"
      titleColor="black"
      :products="groceries"
      :isLoading="isLoading"
      @add-to-cart="handleAddToCart"
    />
    <WhyShopWithUs :whyShops="whyShops" />
  </div>
</template>

<script>
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';
import UpperBanner from '@/components/home_page/UpperBanner.vue';
import TheFeatures from '@/components/home_page/TheFeatures.vue';
import TopOffers from '@/components/home_page/TopOffers.vue';
import ProductsComponent from '@/components/home_page/ProductsSwiper.vue';
import TopCategories from '@/components/home_page/TopCategories.vue';
import QualityFeatures from '@/components/home_page/QualityFeatures.vue';
import WhyShopWithUs from '@/components/home_page/WhyShopWithUs.vue';

import consolesImage from '@/assets/images/consoles.webp';
import soundbarsImage from '@/assets/images/soundbars.webp';
import chairsImage from '@/assets/images/chairs.webp';
import ePhoneXImage from '@/assets/images/ePhoneX.webp';
import laptopImage from '@/assets/images/laptop.webp';
import cat1 from '@/assets/images/cat1.webp';
import cat2 from '@/assets/images/cat2.webp';
import cat3 from '@/assets/images/cat3.webp';
import cat4 from '@/assets/images/cat4.webp';
import cat5 from '@/assets/images/cat5.webp';
import cat6 from '@/assets/images/cat6.webp';
import cat7 from '@/assets/images/cat7.webp';
import cat8 from '@/assets/images/cat8.webp';
import cat9 from '@/assets/images/cat9.webp';
import cat10 from '@/assets/images/cat10.webp';
import cat11 from '@/assets/images/cat11.webp';
import cat12 from '@/assets/images/cat12.webp';
import QualityImg from '@/assets/images/quality.png';
import GlobalImg from '@/assets/images/global.png';
import ShippingImg from '@/assets/images/fast-shipping.png';
import PaymentImg from '@/assets/images/payment.png';
import QuestionImg from '@/assets/images/question.png';
import bandRightCover from '@/assets/images/band-right-cover.webp';
import bandLeftCover from '@/assets/images/band-left-cover.webp';
import whyShop1 from '@/assets/images/why-shop-1.png';
import whyShop2 from '@/assets/images/why-shop-2.png';
import whyShop3 from '@/assets/images/why-shop-3.png';
import whyShop4 from '@/assets/images/why-shop-4.png';

export default {
  name: 'HomeView',
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsComponent,
    TopCategories,
    QualityFeatures,
    WhyShopWithUs,
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
      Categories: [
        {
          id: 1,
          title: 'Mobile Phones',
          img: cat1,
        },
        {
          id: 2,
          title: 'Laptops & Tablets',
          img: cat2,
        },
        {
          id: 3,
          title: 'Televisions',
          img: cat3,
        },
        {
          id: 4,
          title: 'PCs & Accessories',
          img: cat4,
        },
        {
          id: 5,
          title: 'Audio & Video',
          img: cat5,
        },
        {
          id: 6,
          title: 'Gaming & Accessories',
          img: cat6,
        },
        {
          id: 7,
          title: 'Home Appliances',
          img: cat7,
        },
        {
          id: 8,
          title: 'Kitchen Appliances',
          img: cat8,
        },
        {
          id: 9,
          title: 'Cameras',
          img: cat9,
        },
        {
          id: 10,
          title: 'Consumables',
          img: cat10,
        },
        {
          id: 11,
          title: 'Smart Homes',
          img: cat11,
        },
        {
          id: 12,
          title: 'Accessories',
          img: cat12,
        },
      ],
      Features: [
        {
          id: 1,
          img: QualityImg,
          title: 'Quality and Saving',
          description: 'Comprehensive quality control and affordable prices',
        },
        {
          id: 2,
          img: GlobalImg,
          title: 'Global Warehouse',
          description: '37 overseas warehouses',
        },
        {
          id: 3,
          img: ShippingImg,
          title: 'Fast Shipping',
          description: 'Fast and convenient door to door delivery',
        },
        {
          id: 4,
          img: PaymentImg,
          title: 'Payment Security',
          description: 'More than 10 different secure payment methods',
        },
        {
          id: 5,
          img: QuestionImg,
          title: 'Have Questions',
          description: '24/7Customer Services - We are here and happy to help!',
        },
      ],
      Imgs: [
        {
          id: 1,
          src: bandRightCover,
        },
        {
          id: 2,
          src: bandLeftCover,
        },
      ],
      whyShops: [
        {
          id: 1,
          src: whyShop1,
          title: 'Free Shipping On First Order',
          subtitle: 'Praesent suscipit mattis facilisis.',
        },
        {
          id: 2,
          src: whyShop2,
          title: 'Weekly Flash Sale',
          subtitle: 'Praesent suscipit mattis facilisis.',
        },
        {
          id: 3,
          src: whyShop3,
          title: 'Anual Payment Discount',
          subtitle: 'Praesent suscipit mattis facilisis.',
        },
        {
          id: 4,
          src: whyShop4,
          title: 'Cashback Reward Program',
          subtitle: 'Praesent suscipit mattis facilisis.',
        },
      ],
    };
  },
  async mounted() {
    await Promise.all([
      this.productStore.fetchProducts(),
      this.productStore.fetchLaptops(),
      this.productStore.fetchSmartPhones(),
      this.productStore.fetchFragrances(),
      this.productStore.fetchGroceries(),
    ]);
  },
  computed: {
    products() {
      return this.productStore.products;
    },
    laptops() {
      return this.productStore.laptops;
    },
    smartPhones() {
      return this.productStore.smartPhones;
    },
    fragrances() {
      return this.productStore.fragrances;
    },
    groceries() {
      return this.productStore.groceries;
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
<style scoped lang="scss">
img {
  display: block;
  width: 100%;
  transition: transform 0.7s ease;
}
.image-wrapper {
  overflow: hidden;
  border-radius: 16px;
}

.image-wrapper img {
  display: block;
  width: 100%;
}
</style>
