<template>
  <div class="products-category mt-10">
    <h1 class="text-center">{{ $route.params.title }}</h1>
    <v-container>
      <v-lazy>
        <v-card
          elevation="0"
          :loading="loading"
          class="pt-5"
          min-height="700px"
        >
          <v-row v-if="loading">
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
          <v-row v-if="!loading">
            <v-col
              cols="3"
              v-for="product in categoryProducts"
              :key="product.id"
            >
              <v-card
                elevation="0"
                class="pb-5"
                @click="
                  $router.push({
                    name: 'products_details',
                    params: { productId: product.id },
                  })
                "
              >
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parent"
                    style="height: 200px; overflow: hidden"
                  >
                    <img
                      :src="
                        shownProduct[product.id]
                          ? shownProduct[product.id]
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
                      : product.description.split(' ').slice(0, 7).join(' ') +
                        ' ...'
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
                  v-model="shownProduct[product.id]"
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
                <div
                  class="d-flex justify-center pl-2"
                  style="padding: 10px 0px"
                >
                  <v-btn
                    class="choose-options-btn px-1"
                    variant="outlined"
                    @click="addToCart(product)"
                    >Add to Cart</v-btn
                  >
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card></v-lazy
      >
    </v-container>
  </div>
</template>

<script>
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';
import { mapActions, mapState } from 'pinia';

export default {
  data: () => ({
    shownProduct: {},
    loading: false,
  }),
  methods: {
    ...mapActions(useProductStore, ['fetchProductsByCategory']),
    addToCart(product) {
      const cartStore = useCartStore();
      cartStore.addToCart(product);
    },
  },
  computed: {
    ...mapState(useProductStore, ['categoryProducts']),
  },
  watch: {
    async $route() {
      document.documentElement.scrollTo(0, 0);
      this.loading = true;
      await this.fetchProductsByCategory(this.$route.params.category);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.fetchProductsByCategory(this.$route.params.category);
    this.loading = false;
  },
};
</script>

<style scoped></style>
