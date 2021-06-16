<template>
  <rc-app class="bg-white dark:bg-gray-900 font-open-sans">
    <AppBar />
    <rc-main class="pt-16">
      <nuxt />
    </rc-main>
  </rc-app>
</template>

<script>
import AppBar from "~/components/layouts/shared/AppBar.vue";

export default {
  components: {
    AppBar
  }
};
</script>