<template>
  <div class="features">
    <v-container>
      <v-row class="my-1">
        <v-col v-for="(feature, index) in features" :key="index">
          <div
            class="d-flex align-center justify-center"
            :class="{ second: index === 1 }"
          >
            <component :is="feature.icon" />
            <span>{{ feature.title }}</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { markRaw } from 'vue';
import TrackIcon from '../icons/TrackIcon.vue';
import TrophyIcon from '../icons/TrophyIcon.vue';
import GuaranteeIcon from '../icons/GuaranteeIcon.vue';
const features = [
  {
    id: 1,
    icon: markRaw(TrackIcon),
    title: 'Free Shipping & Returns',
  },
  {
    id: 2,
    icon: markRaw(TrophyIcon),
    title: 'Lowest Price Guarantee',
  },
  {
    id: 3,
    icon: markRaw(GuaranteeIcon),
    title: 'Longest Warranties Offer',
  },
];

export default {
  name: 'TheFeatures',
  components: {
    TrackIcon,
    TrophyIcon,
    GuaranteeIcon,
  },
  data() {
    return {
      features,
    };
  },
};
</script>

<style lang="scss">
.features {
  div {
    span {
      color: #333;
      font-weight: 600;
      margin-left: 10px;
    }
  }

  .second {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      background-color: rgb(176, 175, 175);
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 90%;
    }
    &::after {
      content: '';
      position: absolute;
      background-color: rgb(176, 175, 175);
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 90%;
    }
  }
}
</style>
