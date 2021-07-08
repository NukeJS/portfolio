<template>
  <rc-app class="bg-white dark:bg-gray-900 font-open-sans">
    <AppBar />
    <rc-main class="pt-16">
      <nuxt />
    </rc-main>
    <Footer />
  </rc-app>
</template>

<script>
import AppBar from "~/components/layouts/shared/AppBar.vue";
import Footer from "~/components/layouts/shared/Footer.vue";

export default {
  components: {
    AppBar,
    Footer
  }
};
</script>