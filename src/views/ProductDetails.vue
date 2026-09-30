<template>
  <div class="product-details mt-16" v-if="singleProduct">
    <v-container fluid>
      <!-- <h6>Product Details</h6> -->
      <v-row>
        <v-col cols="7">
          <img
            style="object-fit: cover"
            class="w-80"
            :src="tab ? tab : singleProduct.thumbnail"
            :alt="singleProduct.title"
            height="320"
            v-if="!loading"
          />
          <v-skeleton-loader
            v-if="loading"
            type="image, image"
          ></v-skeleton-loader>
          <v-tabs center-active height="100" v-model="tab" class="mt-10">
            <v-tab
              v-for="(img, i) in singleProduct.images"
              :key="i"
              class="mx-10"
              :value="img"
            >
              <img
                :src="img"
                alt=""
                width="100"
                height="100"
                style="object-fit: cover"
              />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="5" class="pt-0 pl-6">
          <v-skeleton-loader
            v-if="loading"
            type="article, article"
          ></v-skeleton-loader>
          <v-card elevation="0" v-if="!loading">
            <v-card-title
              class="px-0"
              style="font-size: 19px; font-weight: bold"
              >({{ singleProduct.title }}) Sample -
              {{ singleProduct.category }} For Sale</v-card-title
            >
            <div class="d-flex align-center ga-3">
              <v-rating
                class="ml-2"
                v-model="singleProduct.rating"
                color="yellow-darken-2"
                background-color="grey"
                half-increments
                readonly
                size="x-small"
                density="compact"
              ></v-rating>
              <span class="mt-1" style="font-size: 13px; color: rgb(96, 96, 96)"
                >Stock: {{ singleProduct.stock }}</span
              >
            </div>
            <v-card-text
              class="px-0"
              style="font-size: 13px; color: rgb(96, 96, 96)"
              >{{ singleProduct.description }}</v-card-text
            >
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 13px; color: rgb(96, 96, 96)"
              >Brand: {{ singleProduct.brand }}</v-card-text
            >
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 13px; color: rgb(96, 96, 96)"
              >Availability: {{ singleProduct.availabilityStatus }}</v-card-text
            >
            <v-card-text class="pl-0 pt-0" style="font-weight: 900">
              <del style="font-weight: normal; color: #4b5563">
                {{ singleProduct.price }}$</del
              >
              <span style="font-weight: normal; color: #4b5563"> From</span>
              {{
                Math.ceil(
                  singleProduct.price -
                    singleProduct.price *
                      (singleProduct.discountPercentage / 100),
                )
              }}$</v-card-text
            >
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 13px; color: rgb(96, 96, 96)"
              >Quantity</v-card-text
            >
            <div
              class="counter px-1"
              style="
                border-radius: 30px;
                border: 1px solid rgb(201, 201, 201);
                width: fit-content;
              "
            >
              <v-icon @click="quantity > 1 ? quantity-- : false" size="20"
                >mdi-minus</v-icon
              >
              <input
                type="number"
                style="
                  border: none;
                  outline: none;
                  text-align: center;
                  width: 50px;
                  font-size: 13px;
                "
                class="py-3"
                min="1"
                v-model.number="quantity"
              />
              <v-icon @click="quantity++" size="20">mdi-plus</v-icon>
            </div>
            <v-card-text class="pl-0"
              >Subtotal:
              <span style="font-weight: 900; color: #4b5563"
                >{{
                  Math.ceil(
                    singleProduct.price -
                      singleProduct.price *
                        (singleProduct.discountPercentage / 100),
                  ) * quantity
                }}$</span
              >
            </v-card-text>
            <v-card-actions class="w-100 px-0">
              <v-btn
                variant="outlined"
                elevation="0"
                density="compact"
                height="50px"
                style="
                  text-transform: none;
                  background-color: rgb(34, 34, 34);
                  color: white;
                "
                class="mt-10 w-75 rounded-pill"
                @click.stop="addToCart(singleProduct)"
                :loading="btnLoading"
                >Add To Cart</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';
import { useNotificationStore } from '@/stores/notificationStore';
import { mapActions, mapState } from 'pinia';
export default {
  data: () => ({
    tab: '',
    quantity: 1,
    loading: false,
    btnLoading: false,
  }),
  computed: {
    ...mapState(useProductStore, ['singleProduct']),
  },
  methods: {
    ...mapActions(useProductStore, ['fetchProductById']),
    showMsg(product) {
      this.$emit('show-msg', product);
    },
    addToCart(product) {
      const cartStore = useCartStore();
      const notificationStore = useNotificationStore();
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        cartStore.addToCart({ ...product, quantity: this.quantity });
        notificationStore.showMessage(
          `${product.title} has been added to your cart successfully!`,
        );
        cartStore.openCart();
      }, 1000);
    },
  },
  async mounted() {
    this.loading = true;
    await this.fetchProductById(this.$route.params.productId);
    this.loading = false;
  },
  watch: {
    '$route.params.productId': {
      async handler(newProduct) {
        // Reset selected image
        this.tab = '';
        // Reset quantity
        this.quantity = 1;
        await this.fetchProductById(newProduct);
      },
    },
  },
};
</script>

<style></style>
