<template>
  <RcApp class="text-gray-300 bg-gray-900">
    <AppBar />

    <AppNavigationDrawer />

    <RcMain class="pt-16">
      <RcContainer>
        <section class="w-full py-6 sm:py-10 md:py-16 lg:py-20">
          <h1
            class="text-4xl font-semibold tracking-tight text-white md:text-5xl"
          >
            Error
            <span class="text-indigo-500">{{ error.statusCode || 500 }}</span
            >.
          </h1>
          <p class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5">
            {{ error.message || 'An unexpected error has occurred.' }}
          </p>
          <div class="mt-8 sm:mt-12">
            <RcBtn nuxt :to="localePath('/')" color="indigo">Go Home</RcBtn>
          </div>
        </section>
      </RcContainer>
    </RcMain>

    <AppFooter />
  </RcApp>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'empty',

  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
})
</script>