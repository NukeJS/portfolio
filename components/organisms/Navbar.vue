<template>
  <transition
    enter-active-class="transition-all duration-200 transform"
    enter-class="-translate-y-full"
    enter-to-class="translate-y-0"
    leave-active-class="transition-all duration-200 transform"
    leave-class="translate-y-0"
    leave-to-class="-translate-y-full"
  >
    <RcAppBar
      v-show="showAppBar"
      ref="appBar"
      fixed
      class="bg-gray-800 shadow-lg"
    >
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
            <NuxtImg
              src="/images/logo.svg"
              alt="RonnieCodes Logo"
              class="h-6"
            />
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
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    showAppBar: true,
    lastScrollPosition: 0,
    scrollValue: 0,
  }),

  methods: {
    showNavigationDrawer() {
      this.$store.dispatch('setNavigationDrawer', true)
    },
    hideAppBarOnScrollDown() {
      const appBarElement = (this.$refs['appBar'] as Vue).$el

      if (window.pageYOffset < 0) {
        return
      }

      if (
        Math.abs(window.pageYOffset - this.lastScrollPosition) <
        appBarElement.clientHeight
      ) {
        return
      }

      this.showAppBar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
  },

  mounted() {
    this.hideAppBarOnScrollDown()
    window.addEventListener('scroll', this.hideAppBarOnScrollDown)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.hideAppBarOnScrollDown)
  },
})
</script>
