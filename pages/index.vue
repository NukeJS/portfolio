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
        <RcBtn nuxt to="/projects/" color="indigo">My Projects</RcBtn>
        <RcBtn nuxt to="/blog/" color="indigo">My Blog</RcBtn>
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
        <TechnologyCard
          v-for="(technology, idx) in stack"
          :key="idx"
          :technology="technology"
        />
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
        <EducationCard
          v-for="(education, idx) in educations"
          :key="idx"
          :education="education"
          :class="{ 'opacity-30 shadow-none': idx === educations.length - 1 }"
        />
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
        <JobCard
          v-for="(job, idx) in jobs"
          :key="idx"
          :job="job"
          :class="{ 'opacity-30 shadow-none': idx === jobs.length - 1 }"
        />
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
    educations: [
      {
        name: 'Collaborator IT Management',
        institution: 'Alfa-college',
        place: 'Groningen, The Netherlands',
        timespan: '2018 - 2019',
      },
      {
        name: 'Application & Media Developer',
        institution: 'Alfa-college',
        place: 'Groningen, The Netherlands',
        timespan: '2019 - present',
      },
      {
        name: 'More to come',
        institution: 'Who knows where?',
        place: 'Earth',
        timespan: 'The future',
      },
    ],
    jobs: [
      {
        type: 'internship',
        title: 'Front-end Developer',
        company: 'Plaatsbelang',
        place: 'Scheemda, The Netherlands',
        timespan: 'Sep. 2020 - Feb. 2021',
      },
      {
        type: 'Full-time? I hope so...',
        title: 'More to come',
        company: 'FAANG?',
        place: 'Earth',
        timespan: 'The future',
      },
    ],
  }),
})
</script>
