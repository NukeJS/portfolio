<template>
  <RcContainer>
    <section class="w-full py-6 sm:py-10 md:py-16 lg:py-20">
      <h1 class="text-4xl font-semibold tracking-tight text-white md:text-5xl">
        My <span class="text-indigo-500">Projects</span>.
      </h1>
      <p class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5">
        A collection of projects I've created.
      </p>

      <div
        v-if="projects && projects.length"
        class="grid grid-cols-1 gap-4 mt-6  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mt-8"
      >
        <ProjectCard
          v-for="(project, idx) in projects"
          :key="idx"
          :project="project"
        />
      </div>

      <p v-else class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5">
        Fetching my projects...
      </p>

      <p class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5">
        You can discover more of my projects on my
        <a
          href="https://github.com/CodingWithNuke"
          target="_blank"
          rel="noopener"
          class="text-indigo-400 underline hover:text-indigo-300"
          >GitHub page</a
        >.
      </p>
    </section>
  </RcContainer>
</template>

<script lang="ts">
import Vue from 'vue'

import projects from '~/data/projects.json'
import { meta } from '~/utils/meta'

export default Vue.extend({
  head() {
    return meta({
      title: 'Projects',
      description: "A collection of public GitHub repositories I've created.",
      path: '/projects/',
    })
  },

  data: () => ({
    projects,
  }),
})
</script>
