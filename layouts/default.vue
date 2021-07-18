<template>
  <rc-app class="bg-white dark:bg-gray-900 font-open-sans">
    <TheAppBar />

    <TheNavigationDrawer />

    <rc-main class="pt-16">
      <nuxt />
    </rc-main>
    <TheFooter />
  </rc-app>
</template>

<script>
export default {};
</script>
