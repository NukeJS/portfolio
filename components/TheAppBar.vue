<template>
  <rc-app-bar
    fixed
    class="bg-white border-b shadow-lg dark:bg-gray-900 dark:border-gray-700"
  >
    <rc-container class="flex items-center h-full">
      <rc-btn
        @click="showNavigationDrawer"
        class="mr-3 font-semibold text-gray-500 cursor-pointer md:hidden dark:text-gray-300 dark:hover:text-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </rc-btn>

      <nuxt-link to="/" class="text-lg font-bold select-none dark:text-white">
        <nuxt-img class="h-6" src="/images/logo.svg" alt="RonnieCodes Logo" />
      </nuxt-link>

      <rc-spacer />

      <div class="flex items-center space-x-6 sm:space-x-10">
        <div
          class="items-center hidden space-x-6 font-medium text-gray-500 dark:text-gray-400 md:flex sm:space-x-10"
        >
          <nuxt-link
            to="/"
            exact-active-class="text-gray-900 dark:text-white"
            class="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
          >
            Home
          </nuxt-link>
          <nuxt-link
            to="/blog"
            exact-active-class="text-gray-900 dark:text-white"
            class="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
          >
            Blog
          </nuxt-link>
          <nuxt-link
            to="/projects"
            exact-active-class="text-gray-900 dark:text-white"
            class="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
          >
            Projects
          </nuxt-link>
        </div>

        <rc-btn
          class="font-semibold text-gray-500 cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          @click="switchTheme"
        >
          <svg
            v-if="theme == 'light'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            v-else-if="theme == 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <span v-else class="w-6 h-6">...</span>
        </rc-btn>
      </div>
    </rc-container>
  </rc-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    showNav: false
  }),

  computed: {
    theme(): string {
      return this.$colorMode.value;
    }
  },

  methods: {
    switchTheme() {
      if (this.theme == "light") {
        this.$colorMode.preference = "dark";
      } else if (this.theme == "dark") {
        this.$colorMode.preference = "light";
      }
    },
    showNavigationDrawer() {
      this.$store.dispatch("setNavigationDrawer", true);
    }
  }
});
</script>