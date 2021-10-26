<template>
  <RcContainer>
    <section
      class="flex flex-col items-center justify-center w-full pt-12 pb-32 text-center  sm:pt-20 sm:pb-36 md:pt-32 md:pb-40 lg:pt-36"
    >
      <h1
        class="text-4xl font-bold tracking-tight text-white  sm:text-5xl md:text-6xl"
      >
        Hey, I'm <span class="text-indigo-500">Ronnie</span>.
        <br />
        A <span class="text-indigo-500">Full-stack Developer</span>.
      </h1>
      <p
        class="max-w-xl mt-6 text-lg text-gray-200  md:max-w-2xl md:text-xl lg:text-2xl sm:mt-10"
      >
        I'm currently based in the Netherlands, creating modern and functional
        web applications.
      </p>
      <div class="mt-8 space-x-4 sm:mt-12">
        <nuxt-link
          to="/projects"
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
    <section class="w-full py-6 sm:py-10 md:py-16 lg:py-20">
      <h2 class="text-4xl font-semibold tracking-tight text-white md:text-5xl">
        My <span class="text-indigo-500">Stack</span>.
      </h2>
      <p class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5">
        Technologies that I understand and use.
      </p>

      <div
        class="grid grid-cols-2 gap-3 mt-6  sm:mt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7"
      >
        <div
          v-for="(technology, idx) in stack"
          :key="idx"
          class="flex flex-col items-center p-3 bg-gray-800 border border-gray-700 rounded-md shadow-sm "
        >
          <NuxtImg
            class="w-16 h-16"
            :src="technology.image"
            :alt="`${technology.name} Logo`"
          />
          <p class="mt-2 text-lg font-semibold text-white">
            {{ technology.name }}
          </p>
        </div>
      </div>
    </section>
  </RcContainer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    stack: [
      {
        image: '/images/javascript.svg',
        name: 'JavaScript',
      },
      {
        image: '/images/typescript.svg',
        name: 'TypeScript',
      },
      {
        image: '/images/vue.svg',
        name: 'Vue',
      },
      {
        image: '/images/nuxt.svg',
        name: 'Nuxt',
      },
      {
        image: '/images/sass.svg',
        name: 'SASS/SCSS',
      },
      {
        image: '/images/tailwind.svg',
        name: 'Tailwind CSS',
      },
      {
        image: '/images/express.svg',
        name: 'Express',
      },
      {
        image: '/images/mongodb.svg',
        name: 'MongoDB',
      },
      {
        image: '/images/react.svg',
        name: 'React',
      },
      {
        image: '/images/laravel.svg',
        name: 'Laravel',
      },
      {
        image: '/images/vsc.svg',
        name: 'VS Code',
      },
      {
        image: '/images/git.svg',
        name: 'Git',
      },
    ],
  }),
})
</script>
