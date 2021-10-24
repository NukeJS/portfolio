<template>
  <RcAppBar
    fixed
    class="bg-gray-900 border-b border-gray-800  bg-opacity-80 backdrop-filter backdrop-blur"
  >
    <RcContainer class="flex items-center w-full h-full">
      <div class="flex items-center flex-1">
        <nuxt-link to="/" class="text-lg font-bold text-white select-none">
          RC
        </nuxt-link>
      </div>
      <div class="flex items-center justify-center h-full space-x-10 font-bold">
        <nuxt-link
          to="/"
          exact-active-class="text-indigo-500 hover:text-indigo-500 before:h-1 before:w-6 before:rounded-t-full before:bg-indigo-500 before:absolute before:left-1/2 before:-translate-x-1/2 before:transform before:bottom-0"
          class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400"
        >
          Home
        </nuxt-link>
        <nuxt-link
          to="/blog"
          exact-active-class="text-indigo-500 hover:text-indigo-500 before:h-1 before:w-6 before:rounded-t-full before:bg-indigo-500 before:absolute before:left-1/2 before:-translate-x-1/2 before:transform before:bottom-0"
          class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400"
        >
          Blog
        </nuxt-link>
        <nuxt-link
          to="/projects"
          exact-active-class="text-indigo-500 hover:text-indigo-500 before:h-1 before:w-6 before:rounded-t-full before:bg-indigo-500 before:absolute before:left-1/2 before:-translate-x-1/2 before:transform before:bottom-0"
          class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400"
        >
          Projects
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