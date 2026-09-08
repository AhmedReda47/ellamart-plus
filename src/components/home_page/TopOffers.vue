<template>
  <div class="top-offers bg-grey-lighten-4 py-5">
    <v-container>
      <v-row class="d-flex align-center justify-center gap-2">
        <v-col cols="4" v-for="offer in offers" :key="offer.id">
          <v-hover v-slot="{ isHovering, props }">
            <div v-bind="props" style="overflow: hidden; border-radius: 8px">
              <img
                :src="offer.image"
                :alt="offer.name"
                class="offer-image"
                :style="{
                  cursor: 'pointer',
                  transform: `scale(${isHovering ? 1.05 : 1})`,
                }"
              />
            </div>
          </v-hover>
        </v-col>

        <v-col cols="6" v-for="bestSeller in bestSellers" :key="bestSeller.id">
          <v-hover v-slot="{ isHovering, props }">
            <div v-bind="props" style="overflow: hidden; border-radius: 8px">
              <img
                :src="bestSeller.image"
                :alt="bestSeller.name"
                class="offer-image"
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
  </div>
</template>

<script>
export default {
  name: 'TopOffers',
  props: {
    offers: {
      type: Array,
      required: true,
    },
    bestSellers: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.offer-image {
  display: block;
  width: 100%;
  transition: transform 0.7s ease;
}
</style>
