<template>
  <div class="w-full">
    <section>
      <RcContainer :padding="false" class="py-14 sm:py-20 md:py-28 lg:py-32">
        <div class="flex flex-col items-center">
          <h1
            class="text-4xl font-semibold tracking-tight text-gray-800 md:text-5xl"
          >
            Error
            {{ error.statusCode || 500 }}.
          </h1>
          <p class="max-w-2xl mt-2 text-gray-600 md:text-lg sm:mt-3 md:mt-4">
            {{ error.message || 'An unexpected error has occurred' }}.
          </p>
          <div class="mt-6 sm:mt-10">
            <RcBtn nuxt to="/" color="indigo" ring class="shadow-lg">
              Go Home
            </RcBtn>
          </div>
        </div>
      </RcContainer>
    </section>
  </div>
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
