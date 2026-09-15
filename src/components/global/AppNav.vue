<template>
  <div class="nav-bar">
    <v-app-bar color="#02218f" height="fit-content" absolute>
      <v-container fluid>
        <v-row class="d-flex align-center px-5">
          <v-col cols="3">
            <img
              src="@/assets/images/ellamart-logo.png"
              alt="logo Image"
              class="w-50"
            />
          </v-col>
          <v-col cols="4">
            <div class="position-relative">
              <input
                type="search"
                name="navSearch"
                id="navSearch"
                style="width: 95%; border-radius: 30px; outline: none"
                placeholder="Search"
                class="py-3 px-5 bg-white"
              />
              <SearchIcon class="search-icon" />
            </div>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="4" class="ps-10">
            <div class="parent text-white d-flex justify-space-between">
              <div class="available">
                <span>Availble 24/7 at</span>
                <br />
                <strong>(090) 123-4567</strong>
              </div>
              <div class="whishlists d-flex flex-column align-center">
                <HeartIcon />
                <span style="color: #ffb547">Wish Lists</span>
              </div>
              <div class="whishlists d-flex flex-column align-center">
                <AccountIcon />
                <span style="color: #ffb547">Sign In</span>
              </div>
              <div
                class="whishlists d-flex flex-column align-center"
                style="cursor: pointer"
                @click="openCart"
              >
                <v-badge
                  location="right- top"
                  content="2"
                  color="#205dc2"
                  offsetX="-14"
                  style="z-index: 10"
                >
                </v-badge>
                <CartIcon />
                <span style="color: #ffb547">Cart</span>
              </div>
            </div>
          </v-col>
          <v-row class="mt-6 pb-5 px-5">
            <v-col cols="5">
              <ul
                class="links d-flex text-white justify-space-between"
                style="list-style: none"
              >
                <li>Them Demo</li>
                <li>Shop</li>
                <li>Product</li>
                <li>New In</li>
                <li>Must Have</li>
                <li>Collections</li>
              </ul>
            </v-col>
            <v-col cols="7" class="d-flex justify-end" style="gap: 35px">
              <div class="help d-flex align-center" style="gap: 5px">
                <HelpIcon />
                <span>Help</span>
              </div>
              |
              <button
                type="button"
                class="help d-flex align-center language-btn"
                style="gap: 5px; cursor: pointer"
                id="language-btn"
                aria-label="Select language and currency"
              >
                <component :is="selectedLang.icon" />
                <span
                  >{{ selectedLang.lang }} / {{ selectedLang.currency }}</span
                >
                <v-icon>mdi-chevron-down</v-icon>
                <v-menu activator="#language-btn">
                  <v-list>
                    <v-list-item
                      v-for="lang in langs"
                      :key="lang.lang"
                      @click="selectedLang = lang"
                    >
                      <v-list-item-title
                        class="d-flex align-center"
                        style="gap: 10px"
                      >
                        <component :is="lang.icon" />
                        {{ lang.lang }} / {{ lang.currency }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </button>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
      <!-- <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon> -->
    </v-app-bar>
  </div>
</template>
<script>
import { useCartStore } from '@/stores/cartStore';
import { markRaw } from 'vue';
import HeartIcon from '@/components/icons/HeartIcon.vue';
import AccountIcon from '@/components/icons/AccountIcon.vue';
import CartIcon from '@/components/icons/CartIcon.vue';
import HelpIcon from '@/components/icons/HelpIcon.vue';
import LangIcon from '@/components/icons/LangIcon.vue';
import LangIcon2 from '@/components/icons/LangIcon2.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
export default {
  data: () => ({
    selectedLang: {
      icon: markRaw(LangIcon),
      lang: 'EN',
      currency: 'USD',
    },
    langs: [
      {
        icon: markRaw(LangIcon),
        lang: 'EN',
        currency: 'USD',
      },
      {
        icon: markRaw(LangIcon2),
        lang: 'DE',
        currency: 'EURO',
      },
    ],
  }),
  components: {
    HeartIcon,
    AccountIcon,
    CartIcon,
    HelpIcon,
    LangIcon,
    LangIcon2,
    SearchIcon,
  },
  methods: {
    openCart() {
      const cartStore = useCartStore();
      cartStore.toggleCart();
    },
  },
};
</script>
<style scoped>
#navSearch {
  color: #000;
}
#navSearch::placeholder {
  color: #000;
  opacity: 1;
}
.language-btn {
  background: transparent;
  border: none;
  color: inherit;
  padding: 0;
}
.language-btn:focus-visible {
  outline: 2px solid #ffb547;
  outline-offset: 4px;
  border-radius: 4px;
}
.search-icon {
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.2s ease;
  cursor: pointer;
}

.search-icon:hover {
  transform: translateY(-50%) scale(1.1);
}
</style>
