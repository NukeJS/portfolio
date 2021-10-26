<template>
  <RcAppBar
    fixed
    class="bg-gray-900 bg-opacity-75 border-b border-gray-700  backdrop-filter backdrop-blur"
  >
    <RcContainer class="flex items-center w-full h-full">
      <div class="flex items-center flex-1">
        <nuxt-link to="/" class="text-lg font-bold text-white select-none">
          <NuxtImg src="/images/logo.svg" alt="RonnieCodes Logo" class="h-6" />
        </nuxt-link>
      </div>
      <div class="flex items-center justify-center h-full space-x-10 font-bold">
        <nuxt-link
          to="/"
          exact-active-class="text-indigo-500 hover:!text-indigo-500 before:!block"
          class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400 before:w-6 before:h-1 before:rounded-full before:absolute before:bg-indigo-500 before:left-1/2 before:-translate-x-1/2 before:transform before:bottom-3 before:hidden"
        >
          Home
        </nuxt-link>
        <nuxt-link
          to="/projects"
          exact-active-class="text-indigo-500 hover:!text-indigo-500 before:!block"
          class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400 before:w-6 before:h-1 before:rounded-full before:absolute before:bg-indigo-500 before:left-1/2 before:-translate-x-1/2 before:transform before:bottom-3 before:hidden"
        >
          Projects
        </nuxt-link>
        <nuxt-link
          to="/blog"
          exact-active-class="text-indigo-500 hover:!text-indigo-500 before:!block"
          class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400 before:w-6 before:h-1 before:rounded-full before:absolute before:bg-indigo-500 before:left-1/2 before:-translate-x-1/2 before:transform before:bottom-3 before:hidden"
        >
          Blog
        </nuxt-link>
      </div>
      <div class="flex items-center justify-end flex-1"></div>
    </RcContainer>
  </RcAppBar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
</style>