<template>
  <section class="products-swiper py-5">
    <div class="title d-flex align-center justify-space-between px-5 pb-3">
      <h2
        style="font-size: 30px; font-weight: 700"
        :class="[`text-${titleColor}`]"
      >
        {{ title }}
      </h2>
      <router-link to="#">Shop All</router-link>
    </div>
    <v-container fluid v-if="!products.length">
      <v-row>
        <v-col col="12">
          <v-row>
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Swiper
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      :slidesPerView="4"
      :spaceBetween="35"
      class="pb-15 px-5"
    >
      <swiper-slide v-for="product in products" :key="product.id">
        <v-card>
          <v-hover v-slot="{ isHovering, props }">
            <div class="img-parent" style="height: 200px; overflow: hidden">
              <img
                :src="
                  shownProduct[product.title]
                    ? shownProduct[product.title]
                    : product.thumbnail
                "
                :alt="product.title"
                class="w-100"
                :style="`height: 200px; object-fit: cover; transition: 0.5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }; cursor: pointer`"
                v-bind="props"
              />
            </div>
          </v-hover>
          <v-card-text class="ml-2 pl-0 pb-0">
            <h3>{{ product.title }}</h3>
            <v-breadcrumbs style="padding: 5px"></v-breadcrumbs>
            {{
              product.description.split(' ').length <= 10
                ? product.description
                : product.description.split(' ').slice(0, 7).join(' ') + ' ...'
            }}
          </v-card-text>
          <v-rating
            class="ml-2"
            v-model="product.rating"
            color="yellow-darken-2"
            background-color="grey"
            half-increments
            readonly
            size="x-small"
            density="compact"
          ></v-rating>
          <v-card-text
            class="ml-2 pl-0 pt-0"
            style="font-weight: 900; color: #c43f3f"
          >
            <del style="font-weight: normal; color: #4b5563">
              {{ product.price }}$</del
            >
            <span style="font-weight: normal; color: #4b5563"> From</span>
            {{
              Math.ceil(
                product.price -
                  product.price * (product.discountPercentage / 100),
              )
            }}$</v-card-text
          >
          <v-btn-toggle
            v-model="shownProduct[product.title]"
            class="thumbnail-toggle pl-2"
            style="
              padding: 0px;
              height: fit-content;
              display: flex;
              gap: 8px;
              align-items: center;
            "
            divided
          >
            <v-btn
              v-for="(pic, i) in product.images"
              :key="i"
              :value="pic"
              class="thumbnail-button"
              style="
                border-radius: 50%;
                padding: 5px;
                width: 58px;
                min-width: 58px;
                height: 58px;
              "
              :aria-label="`Show ${product.title} image ${i + 1}`"
              size="x-small"
              rounded="full"
              ><img
                :src="pic"
                alt="product image"
                class="thumbnail-image"
                width="100%"
                style="border-radius: 50%"
                height="100%"
                object-fit="cover"
            /></v-btn>
          </v-btn-toggle>
          <div class="d-flex justify-center pl-2" style="padding: 10px 0px">
            <v-btn
              class="choose-options-btn px-1"
              variant="outlined"
              @click="addToCart(product)"
              >Add to Cart</v-btn
            >
          </div>
        </v-card>
      </swiper-slide>
    </Swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { Pagination, Navigation } from 'swiper';
export default {
  name: 'FlashDeals',

  data() {
    return {
      shownProduct: {},
    };
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: ' ',
    },
    titleColor: {
      type: String,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    },
  },
};
</script>

<style scoped lang="scss">
.thumbnail-button.v-btn--:hover {
  border: 2px solid #c43f3f !important;
}

.thumbnail-button.v-btn--active {
  border: 2px solid #c43f3f !important;
  opacity: 1;
}
h3 {
  cursor: pointer;
}

h3::after {
  content: '';
  display: block;
  width: 0px;
  height: 1.5px;
  background-color: #c43f3f;
}
h3:hover::after {
  width: 50%;
  transition: width 0.3s ease-in-out;
}

.choose-options-btn {
  color: #b53232 !important;
  background-color: rgba(197, 60, 60, 0.06) !important;
  border: 1px solid #b53232 !important;
  border-radius: 999px !important;
  text-transform: none !important;
  font-weight: 600;
  letter-spacing: 0.2px;
  transition: all 0.25s ease;
  box-shadow: none;
  width: 90%;
}

.choose-options-btn:hover {
  background: linear-gradient(135deg, #b53232, #d85757) !important;
  color: #ffffff !important;
  border-color: #b53232 !important;
  box-shadow: 0 10px 22px rgba(181, 50, 50, 0.22);
  transform: translateY(-1px);
}

.products-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid #4b5563;
    font-weight: 900;
    background-color: white;
    top: 43%;
    &::after {
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #4b5563;
    }
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
  .swiper-pagination-bullet-active {
    background-color: #c43f3f;
  }
}
</style>
