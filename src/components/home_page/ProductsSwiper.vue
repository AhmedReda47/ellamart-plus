<template>
  <section class="flash-deals py-5">
    <v-container fluid>
      <h2 style="font-weight: bold; color: red" class="py-5">Flash Deals</h2>
      <v-row class="d-flex">
        <p v-if="isLoading">Loading...</p>
        <v-col
          style="padding: 8px; border: 1px solid #ff6b6b; border-radius: 8px"
          cols="3"
          v-else
          v-for="product in products"
          :key="product.id"
        >
          <v-card>
            <img
              :src="
                shownProduct[product.title]
                  ? shownProduct[product.title]
                  : product.thumbnail
              "
              :alt="product.title"
              class="w-100"
              style="height: 200px; object-fit: cover"
            />
          </v-card>
          <v-card-text class="pl-0 pb-0">
            <h3>{{ product.title }}</h3>
            <v-breadcrumbs style="padding: 5px"></v-breadcrumbs>
            {{
              product.description.split(' ').length <= 10
                ? product.description
                : product.description.split(' ').slice(0, 7).join(' ') + ' ...'
            }}
          </v-card-text>
          <v-rating
            v-model="product.rating"
            color="yellow-darken-2"
            background-color="grey"
            half-increments
            readonly
            size="x-small"
            density="compact"
          ></v-rating>
          <v-card-text
            class="pl-0 pt-0"
            style="font-weight: 900; color: #ff6b6b"
          >
            <del style="font-weight: normal; color: #888">
              {{ product.price }}$</del
            >
            <span style="font-weight: normal; color: #888"> From</span>
            {{
              Math.ceil(
                product.price -
                  product.price * (product.discountPercentage / 100),
              )
            }}$</v-card-text
          >
          <v-btn-toggle
            v-model="shownProduct[product.title]"
            class="thumbnail-toggle"
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
          <div class="d-flex justify-center" style="padding: 10px 0px">
            <v-btn
              class="choose-options-btn py-3 px-7"
              variant="outlined"
              @click="addToCart(product)"
              >Add to Cart</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
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
  border: 2px solid #ff6b6b !important;
}

.thumbnail-button.v-btn--active {
  border: 2px solid #ff6b6b !important;
  opacity: 1;
}

// .thumbnail-image {
//   display: block;
//   width: 100%;
//   height: 100%;
//   border-radius: 5px;
//   object-fit: cover;
// }
h3 {
  cursor: pointer;
}

h3::after {
  content: '';
  display: block;
  width: 0px;
  height: 1.5px;
  background-color: #ff6b6b;
}

.choose-options-btn {
  color: #ff6b6b !important;
  background-color: rgba(255, 107, 107, 0.04) !important;
  border: 1px solid #ff6b6b !important;
  border-radius: 999px !important;
  text-transform: none !important;
  font-weight: 600;
  letter-spacing: 0.2px;
  transition: all 0.25s ease;
  box-shadow: none;
}

.choose-options-btn:hover {
  background: linear-gradient(135deg, #ff6b6b, #ff8a8a) !important;
  color: #ffffff !important;
  border-color: #ff6b6b !important;
  box-shadow: 0 10px 22px rgba(255, 107, 107, 0.22);
  transform: translateY(-1px);
}

h3:hover::after {
  width: 70%;
  transition: width 0.3s ease-in-out;
}
</style>
