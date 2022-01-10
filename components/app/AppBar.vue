<template>
  <RcAppBar fixed class="bg-gray-800 shadow-lg">
    <RcContainer class="flex items-center w-full h-full">
      <div class="flex items-center flex-1 space-x-3 lg:space-x-0">
        <button
          @click="showNavigationDrawer"
          class="text-gray-300 transition-colors duration-200 lg:hidden hover:text-gray-400"
        >
          <IconMenu class="w-6 h-6" />
          <span class="sr-only">Menu</span>
        </button>

        <NuxtLink to="/">
          <NuxtImg src="/images/logo.svg" alt="RonnieCodes Logo" class="h-6" />
        </NuxtLink>
      </div>
      <div
        class="items-center justify-center hidden h-full space-x-10 font-medium lg:flex"
      >
        <NuxtLink
          to="/"
          exact-active-class="!text-white hover:!text-white"
          class="relative inline-flex items-center h-full text-gray-300 transition-colors duration-200 hover:text-gray-400"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/projects/"
          exact-active-class="!text-white hover:!text-white"
          class="relative inline-flex items-center h-full text-gray-300 transition-colors duration-200 hover:text-gray-400"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          to="/blog/"
          exact-active-class="!text-white hover:!text-white"
          class="relative inline-flex items-center h-full text-gray-300 transition-colors duration-200 hover:text-gray-400"
        >
          Blog
        </NuxtLink>
      </div>
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
