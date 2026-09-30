<template>
  <div class="cart-page">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="pb-0">
          <v-breadcrumbs :items="['Home', 'Your Cart']" style="font-size: 13px">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="12" class="pt-0 px-3">
          <v-card-title
            class="px-0 pb-0"
            style="font-size: 35px; font-weight: bold"
            >Your Cart</v-card-title
          >
          <div class="bar-parent mt-3 position-relative" v-if="items.length">
            <CartTrack
              :fill="
                parseInt((calcTotalPrice / 10000) * 100) < 50
                  ? '#F44336'
                  : parseInt((calcTotalPrice / 10000) * 100) > 50 &&
                    parseInt((calcTotalPrice / 10000) * 100) < 100
                  ? '#FF9800'
                  : '#4cAF50'
              "
              :style="`
              position: absolute;
              bottom: 10%;
              z-index: 1;
              left: calc(${
                parseInt((calcTotalPrice / 10000) * 100) <= 100
                  ? parseInt((calcTotalPrice / 10000) * 100)
                  : 100
              }% - 30px);
              transition: 0.15s all ease-in-out;
            `"
            />
            <v-progress-linear
              :color="
                parseInt((calcTotalPrice / 10000) * 100) < 50
                  ? 'red'
                  : parseInt((calcTotalPrice / 10000) * 100) > 50 &&
                    parseInt((calcTotalPrice / 10000) * 100) < 100
                  ? 'orange'
                  : 'green'
              "
              height="7"
              :model-value="
                parseInt((calcTotalPrice / 10000) * 100) <= 100
                  ? parseInt((calcTotalPrice / 10000) * 100)
                  : 100
              "
              striped
            ></v-progress-linear>
          </div>
          <v-card-text
            v-if="!items.length"
            class="px-0 pt-2"
            style="color: #6f6f6f"
            >Free shipping For All Orders Over $10000!</v-card-text
          >
          <v-card-text
            v-if="!items.length"
            class="px-0 pt-2 text-center"
            style="color: #6f6f6f"
            >Your Cart Is Empty</v-card-text
          >
          <v-card-actions class="px-0 justify-center">
            <v-btn
              v-if="!items.length"
              density="compact"
              style="
                text-transform: none;
                border-radius: 30px;
                border-color: rgb(199, 199, 199);
                width: 300px;
              "
              class="py-3"
              variant="outlined"
              height="45"
              @click="$router.push({ name: 'home' })"
              >Continue Shopping</v-btn
            >
          </v-card-actions>
          <v-card-text
            v-if="items.length && 10000 - calcTotalPrice > 0"
            class="px-0 pt-2"
            style="color: #6f6f6f"
            >Only ${{ 10000 - calcTotalPrice }} away from Free
            Shipping</v-card-text
          >
          <v-card-text
            v-if="items.length && 10000 - calcTotalPrice <= 0"
            class="px-0 pt-2"
            style="color: #6f6f6f"
            >Your Order now is included Free Shipping</v-card-text
          >
        </v-col>
        <v-col cols="9" v-if="items.length">
          <v-table class="w-100">
            <thead>
              <tr>
                <th
                  style="font-size: 12px; font-weight: bold; text-align: left"
                >
                  PRODUCT
                </th>
                <th style="font-size: 12px; font-weight: bold">PRICE</th>
                <th style="font-size: 12px; font-weight: bold">QUANTITY</th>
                <th style="font-size: 12px; font-weight: bold">TOTAL</th>
                <th style="font-size: 12px; font-weight: bold">REMOVE</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td style="width: 40%">
                  <v-row class="align-center">
                    <v-col cols="4" class="px-0">
                      <img
                        :src="item.thumbnail"
                        :alt="item.title"
                        class="w-100"
                        style="object-fit: cover"
                      />
                    </v-col>
                    <v-col cols="8" class="px-0">
                      <v-card-title
                        class="px-0"
                        style="
                          font-size: 13px;
                          line-height: 1.2;
                          color: #6f6f6f;
                        "
                        >{{ item.title }} Sample -
                        {{ item.category }}</v-card-title
                      >
                      <br />
                      <v-card-title
                        style="color: #6f6f6f; font-size: 13px"
                        class="px-0"
                      >
                        Category: {{ item.category }}</v-card-title
                      >
                    </v-col>
                  </v-row>
                </td>
                <td style="width: 15%; text-align: center">
                  ${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100),
                    )
                  }}
                </td>
                <td style="width: 15%">
                  <div class="d-flex justify-center align-center flex-column">
                    <div
                      class="counter px-1 my-1"
                      style="
                        border-radius: 30px;
                        border: 1px solid rgb(201, 201, 201);
                        width: fit-content;
                      "
                    >
                      <v-icon
                        @click="item.quantity > 1 ? item.quantity-- : false"
                        size="20"
                        style="color: #6f6f6f"
                        >mdi-minus</v-icon
                      >
                      <input
                        type="number"
                        style="
                          border: none;
                          outline: none;
                          text-align: center;
                          width: 40px;
                          font-size: 13px;
                          color: #6f6f6f;
                        "
                        class="py-2"
                        min="1"
                        v-model.number="item.quantity"
                      />
                      <v-icon
                        @click="item.quantity++"
                        size="20"
                        style="color: #6f6f6f"
                        >mdi-plus</v-icon
                      >
                    </div>
                  </div>
                </td>
                <td style="width: 15%; text-align: center">
                  ${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100),
                    ) * item.quantity
                  }}
                </td>
                <td style="width: 15%; text-align: center">
                  <CloseIcon
                    class="close"
                    style="margin-right: 12px; cursor: pointer"
                    elevation="0"
                    @click="deleteFromCart(item.id)"
                  />
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-divider length="100%" color="black"></v-divider>
          <v-divider length="100%" color="black"></v-divider>
          <v-divider length="100%" color="black"></v-divider>

          <div
            class="d-flex justify-center align-center ga-1"
            v-if="items.length"
          >
            <SecureIcon />
            <v-card-text class="px-0" style="color: #6f6f6f; font-size: 14px"
              >Secure Shopping Guarantee</v-card-text
            >
          </div>
        </v-col>
        <v-col cols="3" v-if="items.length">
          <v-card elevation="0">
            <v-card-title style="font-size: 14px; font-weight: bold">
              Order Summary
            </v-card-title>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text class="d-flex justify-space-between align-center">
              <span>Subtotal</span>
              <span style="font-size: 15px; font-weight: bold"
                >${{ calcTotalPrice }}</span
              >
            </v-card-text>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text>Get shipping estimate</v-card-text>
            <select
              class="w-100 pa-3"
              style="
                border: 1px solid rgb(184, 184, 184);
                border-radius: 30px;
                font-size: 14px;
              "
            >
              <option
                :value="country"
                v-for="country in countries"
                :key="country"
              >
                {{ country }}
              </option>
            </select>
            <div class="states">
              <select
                class="pa-3 mt-4"
                style="
                  border: 1px solid rgb(184, 184, 184);
                  border-radius: 30px;
                  font-size: 14px;
                  width: 55%;
                  margin-right: 1%;
                "
              >
                <option
                  :value="country"
                  v-for="country in countries"
                  :key="country"
                >
                  {{ country }}
                </option>
              </select>
              <input
                class="pa-3 mt-4"
                type="text"
                style="
                  border: 1px solid rgb(184, 184, 184);
                  border-radius: 30px;
                  font-size: 14px;
                  width: 43%;
                  margin-left: 1%;
                "
              />
            </div>
            <v-card-actions class="px-0 mt-5"
              ><v-btn
                density="compact"
                style="
                  text-transform: none;
                  border-radius: 30px;
                  border-color: rgb(199, 199, 199);
                "
                class="w-100 py-3"
                variant="elevated"
                elevation="0"
                color="#3673e2"
                height="45"
                >Checkout</v-btn
              ></v-card-actions
            >
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>

            <v-card-text class="d-flex justify-space-between align-center">
              <span>TOTAL</span>
              <span style="font-size: 15px; font-weight: bold"
                >${{ calcTotalPrice }}</span
              >
            </v-card-text>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-actions class="px-0 mt-5 flex-column"
              ><v-btn
                density="compact"
                style="
                  text-transform: none;
                  border-radius: 0px;
                  border-color: rgb(199, 199, 199);
                "
                class="w-100 py-3 mx-0"
                variant="elevated"
                elevation="0"
                color="#3673e2"
                height="45"
                >Proceed To Checkout</v-btn
              >
              <v-btn
                density="compact"
                style="
                  text-transform: none;
                  border-radius: 0px;
                  border-color: rgb(199, 199, 199);
                "
                class="w-100 py-3 mx-0"
                variant="outlined"
                elevation="0"
                height="45"
                @click="$router.push({ name: 'home' })"
                >Continue Shopping</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- <v-col
          cols="12"
          class="d-flex justify-center align-center ga-1"
          v-if="items.length"
        >
        </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore';
import CartTrack from '@/components/icons/CartTrack.vue';
import CloseIcon from '@/components/icons/CloseIcon.vue';
import SecureIcon from '@/components/icons/SecureIcon.vue';
import { mapState } from 'pinia';
export default {
  name: 'CartPage',
  data() {
    return {
      countries: ['Egypt', 'Lebanon', 'America', 'Jordan'],
    };
  },
  components: {
    CartTrack,
    CloseIcon,
    SecureIcon,
  },
  computed: {
    ...mapState(useCartStore, ['items']),
    drawer: {
      get() {
        const cartStore = useCartStore();
        return cartStore.drawer;
      },
      set(value) {
        const cartStore = useCartStore();

        if (value) {
          cartStore.openCart();
        } else {
          cartStore.closeCart();
        }
      },
    },
    calcTotalPrice() {
      let total = 0;
      this.items.forEach((product) => {
        total +=
          Math.ceil(
            product.price - product.price * (product.discountPercentage / 100),
          ) * product.quantity;
      });
      return total;
    },
  },
  methods: {
    closeCart() {
      const cartStore = useCartStore();
      cartStore.closeCart();
    },
    deleteFromCart(productId) {
      const cartStore = useCartStore();
      cartStore.deleteFormCart(productId);
    },
  },
};
</script>

<style></style>
