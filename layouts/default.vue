<template>
  <RcApp class="text-gray-300 bg-gray-900">
    <AppBar />

    <AppNavigationDrawer />

    <RcBtn
      @click="scrollToTop"
      :padding="false"
      :ring="false"
      rounded
      :class="{
        'fixed z-10 p-1 bg-gray-800 border border-gray-700 shadow-lg bottom-4 right-4 hover:bg-gray-700 transition-all': true,
        'translate-y-10 opacity-0': !showScrollButton,
        'translate-y-0 opacity-100': showScrollButton,
      }"
    >
      <IconChevronUp class="w-7 h-7" />
    </RcBtn>

    <RcMain class="pt-16">
      <Nuxt />
    </RcMain>

    <AppFooter />
  </RcApp>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    showScrollButton: false,
  }),

  methods: {
    scrollToTop() {
      scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },

    onScroll() {
      const scrollTotal =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      if (document.documentElement.scrollTop / scrollTotal > 0.2) {
        this.showScrollButton = true
      } else {
        this.showScrollButton = false
      }
    },
  },

  mounted() {
    document.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.onScroll)
  },
})
</script>
