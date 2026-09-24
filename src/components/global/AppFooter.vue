<template>
  <div class="app-footer">
    <v-footer>
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <v-card elevation="0" color="transparent">
              <v-card-title
                style="
                  font-size: 14px;
                  font-weight: 900;
                  padding-left: 16px;
                  padding-bottom: 12px;
                "
                >Shop</v-card-title
              >
              <v-card-text
                v-for="category in categories"
                :key="category.title"
                class="pb-0 pt-3"
                style="color: rgb(71, 71, 71)"
                ><router-link
                  :to="{
                    name: 'products_category',
                    params: { category: category.route, title: category.title },
                  }"
                  >{{ category.title }}</router-link
                ></v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card elevation="0" color="transparent">
              <v-card-title
                style="
                  font-size: 14px;
                  font-weight: 900;
                  padding-left: 16px;
                  padding-bottom: 12px;
                "
                >Further Info.</v-card-title
              >
              <v-card-text class="pb-0 pt-3" style="color: rgb(71, 71, 71)"
                >About</v-card-text
              >
              <v-card-text class="pb-0 pt-3" style="color: rgb(71, 71, 71)"
                >Customer Service</v-card-text
              >
              <v-card-text class="pb-0 pt-3" style="color: rgb(71, 71, 71)"
                >Reward Program</v-card-text
              >
              <v-card-text class="pb-0 pt-3" style="color: rgb(71, 71, 71)"
                >Shipping & Returns</v-card-text
              >
              <v-card-text class="pb-0 pt-3" style="color: rgb(71, 71, 71)"
                >Privacy Policy</v-card-text
              >
              <v-card-text class="pb-0 pt-3" style="color: rgb(71, 71, 71)"
                >Terms & Conditions</v-card-text
              >
              <v-card-text class="pb-0 pt-3" style="color: rgb(71, 71, 71)"
                >Blog</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card elevation="0" color="transparent">
              <v-card-title
                style="
                  font-size: 14px;
                  font-weight: 900;
                  padding-left: 16px;
                  padding-bottom: 12px;
                "
                >Customer Service</v-card-title
              >
              <v-card-text class="pb-0 pt-3" style="color: rgb(71, 71, 71)"
                >Search Terms</v-card-text
              >
              <v-card-text class="pb-0 pt-3" style="color: rgb(71, 71, 71)"
                >Advanced Search</v-card-text
              >
              <v-card-text class="pb-0 pt-3" style="color: rgb(71, 71, 71)"
                >Orders & Returns</v-card-text
              >
              <v-card-text class="pb-0 pt-3" style="color: rgb(71, 71, 71)"
                >Contact Us</v-card-text
              >
              <v-card-text class="pb-0 pt-3" style="color: rgb(71, 71, 71)"
                >Theme FAQs</v-card-text
              >
              <v-card-text class="pb-0 pt-3" style="color: rgb(71, 71, 71)"
                >Consultant</v-card-text
              >
              <v-card-text class="pb-0 pt-3" style="color: rgb(71, 71, 71)"
                >Store Location</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card elevation="0" color="transparent">
              <router-link to="/"
                ><img src="@/assets/images/ellamart-logo-2.png"
              /></router-link>
              <v-card-text class="px-0">
                <LocationIcon /> 685 Market Street San Francisco, CA 94105,
                US</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0">
                <PhoneIcon /> Call Us At (415) 555-5555</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0">
                <EmailIcon /> example@domain.com</v-card-text
              >
              <div>
                <XIcon />
                <FacebookIcon />
                <PainterestIcon />
                <InstagrameIcon />
                <YoutubeIcon />
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="pt-10">
          <v-col cols="6">
            <p>
              &copy; {{ new Date().getFullYear() }} Ella Demo. Powered by Ella
            </p>
          </v-col>
          <v-col cols="6">
            <div class="d-flex justify-end ga-5">
              <VisaIcon />
              <MasterCardIcon />
              <PaypalIcon />
              <AmexIcon />
              <Visa2Icon />
              <DiscoverIcon />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>
<script>
import { useProductStore } from '@/stores/productStore.js';
import { mapState } from 'pinia';
import LocationIcon from '../icons/LocationIcon.vue';
import PhoneIcon from '../icons/PhoneIcon.vue';
import EmailIcon from '../icons/EmailIcon.vue';
import XIcon from '../icons/XIcon.vue';
import FacebookIcon from '../icons/FacebookIcon.vue';
import PainterestIcon from '../icons/PainterestIcon.vue';
import InstagrameIcon from '../icons/InstagrameIcon.vue';
import YoutubeIcon from '../icons/YoutubeIcon.vue';
import VisaIcon from '../icons/VisaIcon.vue';
import MasterCardIcon from '../icons/MasterCardIcon.vue';
import AmexIcon from '../icons/AmexIcon.vue';
import PaypalIcon from '../icons/PaypalIcon.vue';
import Visa2Icon from '../icons/Visa2Icon.vue';
import DiscoverIcon from '../icons/DiscoverIcon.vue';

export default {
  name: 'AppFooter',
  components: {
    LocationIcon,
    PhoneIcon,
    EmailIcon,
    XIcon,
    FacebookIcon,
    PainterestIcon,
    InstagrameIcon,
    YoutubeIcon,
    VisaIcon,
    MasterCardIcon,
    AmexIcon,
    PaypalIcon,
    Visa2Icon,
    DiscoverIcon,
  },
  computed: {
    ...mapState(useProductStore, ['categories']),
  },
};
</script>
<style scoped>
.app-footer {
  flex: 0 0 auto;
  width: 100%;
}
</style>
