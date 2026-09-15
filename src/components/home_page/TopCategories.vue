<template>
  <div class="top-cat">
    <div class="cyber-banner">
      <div class="parent relative">
        <!-- <p style="font-size: xx-large; font-weight: 700">
          Cyber Monday <span style="color: aqua">Best Offers</span>
        </p> -->
        <img
          src="@/assets/images/cyber-banner.webp"
          style="background-size: cover; object-fit: cover"
          alt="cyber-banner-image"
        />
      </div>
    </div>
    <div class="categories pt-13">
      <div class="title d-flex align-center justify-center px-5 mb-3">
        <h3
          class="text-center flex-grow-1"
          style="font-weight: 900; font-size: 20px"
        >
          Top Categories
        </h3>
        <router-link to="#">Shop All</router-link>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="2" v-for="category in categories" :key="category.id">
            <v-card class="text-center" elevation="0"
              ><v-hover v-slot="{ isHovering, props }">
                <img
                  :src="category.img"
                  :alt="category.title"
                  v-bind="props"
                  :style="`cursor: pointer; transition: 0.4s all ease-in-out; scale: ${
                    isHovering ? 1.05 : 1
                  }`"
                />
                <v-card-text style="padding: 0px">{{
                  category.title
                }}</v-card-text>
              </v-hover></v-card
            >
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopCategories',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
