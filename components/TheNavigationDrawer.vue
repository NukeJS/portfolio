<template>
  <rc-navigation-drawer v-model="navigationDrawer">
    <div
      class="h-full bg-white border-r dark:border-gray-700 dark:bg-gray-900 flex flex-col"
    >
      <div class="flex flex-col divide-y dark:divide-gray-700">
        <nuxt-link
          to="/"
          class="text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 font-semibold px-3 py-3"
        >
          Home
        </nuxt-link>
        <nuxt-link
          to="/blog"
          class="text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 font-semibold px-3 py-3"
        >
          Blog
        </nuxt-link>
        <nuxt-link
          to="/projects"
          class="text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 font-semibold px-3 py-3"
        >
          Projects
        </nuxt-link>
      </div>
    </div>
  </rc-navigation-drawer>
</template>

<script>
export default {
  computed: {
    navigationDrawer: {
      get() {
        return this.$store.getters["navigationDrawer"];
      },
      set(val) {
        this.$store.dispatch("setNavigationDrawer", val);
      }
    }
  }
};
</script>

<style>
</style>