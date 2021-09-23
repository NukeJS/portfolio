<template>
  <rc-app-bar
    fixed
    class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
  >
    <rc-container class="flex items-center h-full">
      <rc-btn
        @click="showNavigationDrawer"
        class="mr-3 font-semibold text-gray-500 cursor-pointer md:hidden dark:text-gray-300 dark:hover:text-gray-100"
      >
        <IconMenuAlt2 class="w-6 h-6" />
      </rc-btn>

      <nuxt-link
        :to="localePath('/')"
        class="text-lg font-bold select-none dark:text-white"
      >
        <nuxt-img class="h-6" src="/images/logo.svg" alt="RonnieCodes Logo" />
      </nuxt-link>

      <rc-spacer />

      <div class="flex items-center space-x-6 sm:space-x-10">
        <div
          class="items-center hidden space-x-6 font-medium text-gray-500 dark:text-gray-400 md:flex sm:space-x-10"
        >
          <nuxt-link
            :to="localePath('/')"
            exact-active-class="text-gray-900 dark:text-white"
            class="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
          >
            {{ $t("components.AppBar.home") }}
          </nuxt-link>
          <nuxt-link
            :to="localePath('/blog')"
            exact-active-class="text-gray-900 dark:text-white"
            class="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
          >
            {{ $t("components.AppBar.blog") }}
          </nuxt-link>
          <nuxt-link
            :to="localePath('/projects')"
            exact-active-class="text-gray-900 dark:text-white"
            class="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
          >
            {{ $t("components.AppBar.projects") }}
          </nuxt-link>
          <nuxt-link
            :to="localePath('/contact')"
            exact-active-class="text-gray-900 dark:text-white"
            class="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
          >
            {{ $t("components.AppBar.contact") }}
          </nuxt-link>
          <nuxt-link
            :to="switchLocalePath(nextLocale)"
            class="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
            :title="`Switch to ${nextLocale == 'en' ? 'English' : 'Dutch'}`"
          >
            {{ nextLocale.toUpperCase() }}
          </nuxt-link>
        </div>

        <rc-btn
          class="font-semibold text-gray-500 cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          @click="switchTheme"
        >
          <IconSun v-if="theme === 'light'" class="w-6 h-6" />
          <IconMoon v-else-if="theme === 'dark'" class="w-6 h-6" />
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
    },
    nextLocale(): string {
      return this.$i18n.locale == "en" ? "nl" : "en";
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