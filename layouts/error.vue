<template>
  <RcApp class="text-gray-300 bg-gray-900">
    <AppBar />

    <RcMain class="pt-16">
      <RcContainer>
        <section class="w-full py-12 md:py-20">
          <h1
            class="text-4xl font-bold tracking-tight text-white  sm:text-5xl md:text-6xl"
          >
            Error
            <span class="text-indigo-500">{{ error.statusCode || 500 }}</span
            >.
          </h1>
          <p class="max-w-2xl mt-2 text-gray-300 md:text-lg sm:mt-4">
            {{ error.message || "An error has occurred" }}
          </p>
        </section>
      </RcContainer>
    </RcMain>
  </RcApp>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "empty",

  props: {
    error: {
      type: Object,
      default: null,
    },
  },
});
</script>

<style scoped>
</style>