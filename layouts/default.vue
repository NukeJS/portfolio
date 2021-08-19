<template>
  <rc-app class="bg-white dark:bg-gray-900 font-poppins">
    <TheAppBar />

    <TheNavigationDrawer />

    <rc-main class="pt-16">
      <nuxt />
    </rc-main>
    <TheFooter />
  </rc-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
