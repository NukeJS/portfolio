<template>
  <RcContainer>
    <section class="w-full py-6 sm:py-10 md:py-16 lg:py-20">
      <h1 class="text-4xl font-semibold tracking-tight text-white md:text-5xl">
        Error
        <span class="text-indigo-500">{{ error.statusCode || 500 }}</span
        >.
      </h1>
      <p class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5">
        {{ error.message || 'An unexpected error has occurred.' }}
      </p>
      <div class="mt-8 sm:mt-12">
        <RcBtn nuxt to="/" color="indigo">Go Home</RcBtn>
      </div>
    </section>
  </RcContainer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  head() {
    return {
      title: `Error ${this.error.statusCode || 500}`,
    }
  },
})
</script>
