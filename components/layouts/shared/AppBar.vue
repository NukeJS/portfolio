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

        <a
          href="https://github.com/CodingWithNuke/portfolio"
          target="blank"
          class="text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 22 22"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
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