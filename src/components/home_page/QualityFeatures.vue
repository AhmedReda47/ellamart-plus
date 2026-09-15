<template>
  <div class="quality-features py-13 bg-grey-lighten-2">
    <v-container fluid>
      <v-row>
        <v-col v-for="feature in features" :key="feature.id">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              class="text-center d-flex align-center justify-center px-5"
              height="350"
              :elevation="isHovering ? 2 : 0"
              :color="isHovering ? 'blue-lighten-4' : 'white'"
              style="cursor: pointer"
            >
              <div class="parent">
                <img :src="feature.img" :alt="feature.title" />
                <v-card-title
                  style="
                    font-weight: 700;
                    text-transform: uppercase;
                    font-size: 16px;
                  "
                  >{{ feature.title }}</v-card-title
                >
                <v-card-text>{{ feature.description }}</v-card-text>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'QualityFeatures',
  props: {
    features: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
