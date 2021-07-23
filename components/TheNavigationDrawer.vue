<template>
  <rc-navigation-drawer v-model="navigationDrawer">
    <div
      class="h-full bg-white border-r dark:border-gray-700 dark:bg-gray-900 flex flex-col"
    >
      <rc-app-bar
        class="border-b bg-white dark:bg-gray-900 dark:border-gray-700"
      >
        <rc-container fluid padless class="px-4">
          <nuxt-link
            to="/"
            class="dark:text-white text-lg font-bold select-none"
          >
            <img class="h-6" src="/images/logo.svg" alt="RonnieCodes Logo" />
          </nuxt-link>
        </rc-container>
      </rc-app-bar>
      <div class="flex flex-col divide-y dark:divide-gray-700">
        <nuxt-link
          to="/"
          class="text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 font-semibold py-2 px-4"
        >
          Home
        </nuxt-link>
        <nuxt-link
          to="/blog"
          class="text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 font-semibold py-2 px-4"
        >
          Blog
        </nuxt-link>
        <nuxt-link
          to="/projects"
          class="text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 font-semibold py-2 px-4"
        >
          Projects
        </nuxt-link>
      </div>
    </div>
  </rc-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    navigationDrawer: {
      get(): boolean {
        return this.$store.getters["navigationDrawer"];
      },
      set(val: boolean) {
        this.$store.dispatch("setNavigationDrawer", val);
      }
    }
  }
});
</script>