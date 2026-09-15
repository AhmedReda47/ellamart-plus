<template>
  <section class="why-shop pb-12 pt-5">
    <v-container fluid class="container">
      <p
        class="mb-10"
        style="
          color: #2dfbdf;
          text-align: center;
          font-size: xx-large;
          font-weight: 700;
        "
      >
        Why shop<span style="color: white"> with us?</span>
      </p>
      <v-row class="d-flex justify-space-between align-center mt-5">
        <v-card
          class="card"
          elevation="0"
          v-for="whyShop in whyShops"
          :key="whyShop.id"
        >
          <img class="mx-auto" :src="whyShop.src" alt="" />
          <v-card-text class="title pb-0 px-5">{{ whyShop.title }}</v-card-text>
          <v-card-subtitle class="subtitle">{{
            whyShop.subtitle
          }}</v-card-subtitle>
          <a href="#">Learn More</a>
        </v-card>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'whyShopWithUs',
  props: {
    whyShops: Array,
    default: () => [],
  },
};
</script>
<style scoped lang="scss">
.why-shop {
  background-image: url('@/assets/images/banner.png');
  background-repeat: repeat-y;
  background-size: cover;

  .card {
    display: flex;
    background-color: transparent;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      color: white;
      font-size: x-large;
      font-weight: 700;
    }
    .subtitle {
      color: white;
      font-size: medium;
      font-weight: 500;
    }
    a {
      display: inline-block;
      cursor: pointer;
      color: white;
      font-size: small;
      font-weight: 600;
    }
  }
}
</style>
