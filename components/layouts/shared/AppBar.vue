<template>
  <rc-app-bar class="border-b bg-white dark:bg-gray-900 dark:border-gray-700">
    <rc-container class="flex items-center h-full">
      <nuxt-link to="/" class="dark:text-white text-lg font-bold select-none">
        <img class="h-6" src="/images/logo.svg" alt="RonnieCodes Logo" />
      </nuxt-link>

      <rc-spacer />

      <div class="flex items-center space-x-6 sm:space-x-10">
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
          <svg
            v-if="!darkTheme"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
          </svg>
        </span>
      </div>
    </rc-container>
  </rc-app-bar>
</template>

<script>
export default {
  computed: {
    darkTheme() {
      return this.$colorMode.preference != "light";
    }
  },

  methods: {
    toggleDarkTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference != "light" ? "light" : "dark";
    }
  }
};
</script>