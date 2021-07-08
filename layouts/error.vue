<template>
  <rc-app class="bg-white dark:bg-gray-900 font-open-sans">
    <AppBar />
    <rc-main class="pt-16">
      <rc-container class="flex items-start justify-center sm:items-center">
        <section class="max-w-full py-6 sm:py-12 md:py-16 text-center">
          <h2
            class="text-gray-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none"
          >
            Error
            <span class="text-indigo-600 dark:text-indigo-500">
              {{ error.statusCode }}</span
            >.
          </h2>
          <p
            v-text="error.message"
            class="text-gray-500 dark:text-gray-300 sm:text-lg font-semibold mt-6 mb-8"
          ></p>

          <rc-btn
            nuxt
            to="/"
            class="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-5 py-3 rounded-md font-semibold text-lg leading-6 flex-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              />
            </svg>
            Go Home
          </rc-btn>
        </section>
      </rc-container>
    </rc-main>
    <Footer />
  </rc-app>
</template>

<script>
import AppBar from "~/components/layouts/shared/AppBar.vue";
import Footer from "~/components/layouts/shared/Footer.vue";

export default {
  layout: "empty",

  props: {
    error: {
      type: Object,
      default: null
    }
  },

  components: {
    AppBar,
    Footer
  }
};
</script>