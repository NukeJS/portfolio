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
        <RcBtn nuxt to="/projects/" color="indigo"> My Projects </RcBtn>
        <RcBtn nuxt to="/blog/" color="indigo"> My Blog </RcBtn>
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
          class="flex flex-col items-center p-3 bg-gray-800 rounded-md shadow-lg "
        >
          <NuxtImg
            class="w-16 h-16"
            :src="`/images/technologies/${technology.image}`"
            :alt="`${technology.name} Logo`"
          />
          <p class="mt-2 text-lg font-semibold text-white">
            {{ technology.name }}
          </p>
        </div>
      </div>
    </section>
    <section class="w-full py-6 sm:py-10 md:py-16 lg:py-20">
      <h2 class="text-4xl font-semibold tracking-tight text-white md:text-5xl">
        My <span class="text-indigo-500">Education</span>.
      </h2>
      <p class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5">
        All the educations I've done.
      </p>
      <div class="grid gap-3 mt-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          class="flex flex-col p-3 space-y-2 bg-gray-800 rounded-md shadow-lg"
        >
          <h3 class="text-lg font-semibold text-white">
            Collaborator IT Management
          </h3>
          <div class="space-y-1 text-sm text-gray-400">
            <div class="flex items-center">
              <IconAcademicCap class="w-4 h-4" />
              <p class="ml-1">Alfa-college</p>
            </div>
            <div class="flex items-center">
              <IconLocationMarker class="w-4 h-4" />
              <p class="ml-1">Groningen, The Netherlands</p>
            </div>
            <div class="flex items-center">
              <IconCalendar class="w-4 h-4" />
              <p class="ml-1">2018 - 2019</p>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col p-3 space-y-2 bg-gray-800 rounded-md shadow-lg"
        >
          <h3 class="text-lg font-semibold text-white">
            Application & Media Developer
          </h3>
          <div class="space-y-1 text-sm text-gray-400">
            <div class="flex items-center">
              <IconAcademicCap class="w-4 h-4" />
              <p class="ml-1">Alfa-college</p>
            </div>
            <div class="flex items-center">
              <IconLocationMarker class="w-4 h-4" />
              <p class="ml-1">Groningen, The Netherlands</p>
            </div>
            <div class="flex items-center">
              <IconCalendar class="w-4 h-4" />
              <p class="ml-1">2019 - present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full py-6 sm:py-10 md:py-16 lg:py-20">
      <h2 class="text-4xl font-semibold tracking-tight text-white md:text-5xl">
        My <span class="text-indigo-500">Working Experience</span>.
      </h2>
      <p class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5">
        All the places I've worked at.
      </p>
      <div class="grid gap-3 mt-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          class="flex flex-col p-3 space-y-2 bg-gray-800 rounded-md shadow-lg"
        >
          <div class="space-y-1">
            <h6 class="text-xs font-bold text-indigo-400 uppercase">
              Internship
            </h6>
            <h3 class="text-lg font-semibold text-white">
              Front-end Developer
            </h3>
          </div>
          <div class="space-y-1 text-sm text-gray-400">
            <div class="flex items-center">
              <IconOfficeBuilding class="w-4 h-4" />
              <p class="ml-1">Plaatsbelang</p>
            </div>
            <div class="flex items-center">
              <IconLocationMarker class="w-4 h-4" />
              <p class="ml-1">Scheemda, The Netherlands</p>
            </div>
            <div class="flex items-center">
              <IconCalendar class="w-4 h-4" />
              <p class="ml-1">sep. 2020 - feb. 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </RcContainer>
</template>

<script lang="ts">
import Vue from 'vue'

import { meta } from '~/utils/meta'

import { description } from '~/meta.json'

export default Vue.extend({
  head() {
    return meta({
      title: 'Home',
      description,
    })
  },

  data: () => ({
    stack: [
      {
        image: 'html.svg',
        name: 'HTML',
      },
      {
        image: 'css.svg',
        name: 'CSS',
      },
      {
        image: 'javascript.svg',
        name: 'JavaScript',
      },
      {
        image: 'typescript.svg',
        name: 'TypeScript',
      },
      {
        image: 'node.svg',
        name: 'Node.js',
      },
      {
        image: 'vue.svg',
        name: 'Vue.js',
      },
      {
        image: 'nuxt.svg',
        name: 'Nuxt.js',
      },
      {
        image: 'sass.svg',
        name: 'SASS/SCSS',
      },
      {
        image: 'tailwind.svg',
        name: 'Tailwind CSS',
      },
      {
        image: 'express.svg',
        name: 'Express.js',
      },
      {
        image: 'vsc.svg',
        name: 'VS Code',
      },
      {
        image: 'git.svg',
        name: 'Git',
      },
      {
        image: 'mongodb.svg',
        name: 'MongoDB',
      },
      {
        image: 'react.svg',
        name: 'React.js',
      },
      {
        image: 'laravel.svg',
        name: 'Laravel',
      },
      {
        image: 'mysql.svg',
        name: 'MySQL',
      },
      {
        image: 'php.svg',
        name: 'PHP',
      },
    ],
  }),
})
</script>
