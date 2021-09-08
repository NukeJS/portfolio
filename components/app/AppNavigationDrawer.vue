<template>
  <rc-navigation-drawer v-model="navigationDrawer">
    <div
      class="flex flex-col h-full bg-white border-r dark:border-gray-700 dark:bg-gray-900"
    >
      <rc-app-bar
        class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
      >
        <rc-container class="flex items-center h-full">
          <rc-btn
            @click="navigationDrawer = false"
            class="mr-3 font-semibold text-gray-500 cursor-pointer md:hidden dark:text-gray-300 dark:hover:text-gray-100"
          >
            <IconX class="w-6 h-6" />
          </rc-btn>

          <nuxt-link
            to="/"
            class="inline-block text-lg font-bold select-none dark:text-white"
          >
            <nuxt-img
              class="h-6"
              src="/images/logo.svg"
              alt="RonnieCodes Logo"
            />
          </nuxt-link>
        </rc-container>
      </rc-app-bar>
      <div class="overflow-y-auto">
        <ul class="p-4 space-y-4 font-medium text-gray-500 dark:text-gray-400">
          <li>
            <nuxt-link
              to="/"
              exact-active-class="text-gray-900 dark:text-white"
              class="transition-colors duration-200 dark:hover:text-gray-100"
            >
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/blog"
              exact-active-class="text-gray-900 dark:text-white"
              class="transition-colors duration-200 dark:hover:text-gray-100"
            >
              Blog
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/projects"
              exact-active-class="text-gray-900 dark:text-white"
              class="transition-colors duration-200 dark:hover:text-gray-100"
            >
              Projects
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/contact"
              exact-active-class="text-gray-900 dark:text-white"
              class="transition-colors duration-200 dark:hover:text-gray-100"
            >
              Contact
            </nuxt-link>
          </li>
        </ul>
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