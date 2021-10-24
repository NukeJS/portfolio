<template>
  <RcContainer>
    <section
      class="flex flex-col items-center w-full py-20 text-center  md:py-32 lg:py-44"
    >
      <h1
        class="text-4xl font-bold tracking-tight text-white  sm:text-5xl md:text-6xl"
      >
        Hi, I'm <span class="text-indigo-500">Ronnie</span>.
        <br />
        A <span class="text-indigo-500">Full-stack Developer</span>.
      </h1>
      <p
        class="max-w-xl mt-6 text-lg font-medium text-gray-200  md:max-w-2xl md:text-xl lg:text-2xl sm:mt-10"
      >
        I'm currently based in the Netherlands, creating modern and functional
        web applications.
      </p>
      <div class="mt-8 space-x-4 sm:mt-12">
        <nuxt-link
          to="/blog"
          class="px-5 py-3 text-lg font-medium text-white bg-indigo-500 border border-transparent rounded-md outline-none  sm:text-xl ring-offset-2 ring-offset-gray-900 focus:ring ring-indigo-500"
        >
          My Projects
        </nuxt-link>
        <nuxt-link
          to="/blog"
          class="px-5 py-3 text-lg font-medium text-white bg-indigo-500 border border-transparent rounded-md outline-none  sm:text-xl ring-offset-2 ring-offset-gray-900 focus:ring ring-indigo-500"
        >
          My Blog
        </nuxt-link>
      </div>
    </section>
    <section class="w-full py-12 md:py-20">
      <h2 class="text-4xl font-medium tracking-tight text-white md:text-5xl">
        My Stack.
      </h2>
      <p class="max-w-2xl mt-2 text-gray-300 md:text-lg sm:mt-4">
        Here are some projects I've created over the years.
      </p>
    </section>
  </RcContainer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
