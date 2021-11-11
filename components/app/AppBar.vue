<template>
  <RcAppBar
    fixed
    class="bg-gray-900 bg-opacity-75 border-b border-gray-800  backdrop-filter backdrop-blur"
  >
    <RcContainer class="flex items-center w-full h-full">
      <div class="flex items-center flex-1 space-x-3 lg:space-x-0">
        <button
          @click="showNavigationDrawer"
          class="transition-colors duration-200 lg:hidden hover:text-gray-400"
        >
          <IconMenu class="w-6 h-6" />
        </button>

        <NuxtLink to="/">
          <NuxtImg src="/images/logo.svg" alt="RonnieCodes Logo" class="h-6" />
        </NuxtLink>
      </div>
      <div
        class="items-center justify-center hidden h-full space-x-10 font-bold  lg:flex"
      >
        <NuxtLink
          to="/"
          exact-active-class="text-indigo-500 hover:!text-indigo-500 before:!block"
          class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400 before:w-6 before:h-1 before:rounded-full before:absolute before:bg-indigo-500 before:left-1/2 before:-translate-x-1/2 before:transform before:bottom-3 before:hidden"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/projects/"
          exact-active-class="text-indigo-500 hover:!text-indigo-500 before:!block"
          class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400 before:w-6 before:h-1 before:rounded-full before:absolute before:bg-indigo-500 before:left-1/2 before:-translate-x-1/2 before:transform before:bottom-3 before:hidden"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          to="/blog/"
          exact-active-class="text-indigo-500 hover:!text-indigo-500 before:!block"
          class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400 before:w-6 before:h-1 before:rounded-full before:absolute before:bg-indigo-500 before:left-1/2 before:-translate-x-1/2 before:transform before:bottom-3 before:hidden"
        >
          Blog
        </NuxtLink>
      </div>
      <div class="flex items-center justify-end flex-1 font-bold"></div>
    </RcContainer>
  </RcAppBar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    showNavigationDrawer() {
      this.$store.dispatch('setNavigationDrawer', true)
    },
  },
})
</script>