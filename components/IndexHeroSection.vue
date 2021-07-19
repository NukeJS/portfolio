<template>
  <section class="max-w-full py-12 sm:py-16 md:py-20">
    <h1
      class="text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none"
    >
      Hi, I'm
      <span class="text-indigo-600 dark:text-indigo-500">Ronnie</span>. I'm a
      <span class="text-indigo-600 dark:text-indigo-500"
        >Full Stack Web Developer</span
      >.
    </h1>

    <p
      class="max-w-2xl text-gray-500 dark:text-gray-300 text-lg font-semibold mt-6 sm:mt-8 mb-8 sm:mb-10"
    >
      I'm a guy that is fond of creating full stack web apps. I'm currently
      based in the Netherlands. I create modern and functional web apps.
    </p>

    <div class="flex space-y-4 sm:space-y-0">
      <rc-btn
        nuxt
        to="/projects"
        class="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg px-6 py-3 rounded-md sm:rounded-full font-semibold text-xl leading-6 w-full sm:w-auto flex-none"
        >My Projects</rc-btn
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>