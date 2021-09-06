<template>
  <rc-app class="bg-white dark:bg-gray-900 font-poppins">
    <AppBar />

    <AppNavigationDrawer />

    <rc-main class="pt-16">
      <nuxt />
    </rc-main>
    <AppFooter />
  </rc-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
