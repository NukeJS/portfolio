<template>
  <RcApp class="text-gray-300 bg-gray-900">
    <AppBar />

    <AppNavigationDrawer />

    <RcMain class="pt-16">
      <Nuxt />
    </RcMain>

    <AppFooter />
  </RcApp>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
