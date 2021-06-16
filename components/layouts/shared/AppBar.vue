<template>
  <rc-app-bar class="border-b bg-white dark:bg-gray-900 dark:border-gray-700">
    <rc-container class="flex items-center h-full">
      <nuxt-link to="/" class="dark:text-white text-lg font-bold select-none">
        RonnieCodes.com
      </nuxt-link>

      <rc-spacer />

      <div class="flex items-center space-x-6 sm:space-x-10">
        <!-- <nuxt-link
          to="/"
          class="text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 font-semibold"
        >
          Home
        </nuxt-link> -->
        <!-- <a
          href="https://github.com/CodingWithNuke"
          target="blank"
          class="text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 font-semibold"
        >
          My Projects
        </a> -->
        <span
          class="text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 font-semibold cursor-pointer"
          @click="toggleDarkTheme"
          :title="`Toggle ${darkTheme ? 'Dark' : 'Light'} Theme`"
        >
          <solid-sun-icon class="w-6 h-6" v-if="!darkTheme" />
          <solid-moon-icon class="w-6 h-6" v-else />
        </span>
      </div>
    </rc-container>
  </rc-app-bar>
</template>

<script>
export default {
  computed: {
    darkTheme() {
      return this.$colorMode.value == "dark";
    }
  },

  methods: {
    toggleDarkTheme() {
      this.$colorMode.value =
        this.$colorMode.value == "dark" ? "light" : "dark";
    }
  }
};
</script>