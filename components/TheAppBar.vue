<template>
  <rc-app-bar
    fixed
    class="border-b bg-white dark:bg-gray-900 dark:border-gray-700"
  >
    <rc-container class="flex items-center h-full">
      <rc-btn
        @click="showNavigationDrawer"
        class="md:hidden mr-3 text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 font-semibold cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
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

      <nuxt-link to="/" class="dark:text-white text-lg font-bold select-none">
        <nuxt-img class="h-6" src="/images/logo.svg" alt="RonnieCodes Logo" />
      </nuxt-link>

      <rc-spacer />

      <div class="flex items-center space-x-6 sm:space-x-10">
        <div class="hidden md:flex items-center space-x-6 sm:space-x-10">
          <nuxt-link
            to="/"
            class="text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 font-semibold"
          >
            Home
          </nuxt-link>
          <nuxt-link
            to="/blog"
            class="text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 font-semibold"
          >
            Blog
          </nuxt-link>
          <nuxt-link
            to="/projects"
            class="text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 font-semibold"
          >
            Projects
          </nuxt-link>
        </div>

        <rc-btn
          class="text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 font-semibold cursor-pointer"
          @click="switchTheme"
        >
          <svg
            v-if="theme == 'light'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
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
            class="h-6 w-6"
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
          <span v-else class="h-6 w-6">...</span>
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