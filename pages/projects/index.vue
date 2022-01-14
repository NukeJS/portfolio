<template>
  <div class="w-full">
    <section>
      <RcContainer :padding="false" class="py-14 sm:py-20 md:py-28 lg:py-32">
        <div class="text-center">
          <h2
            class="text-4xl font-semibold tracking-tight text-gray-800 md:text-5xl"
          >
            My Projects.
          </h2>
          <p
            class="max-w-2xl mx-auto mt-2 text-gray-500 md:text-lg sm:mt-3 md:mt-4"
          >
            Here are some things I've worked on.
          </p>
        </div>

        <div
          class="grid gap-6 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          <ProjectCard
            v-for="(project, idx) in projects"
            :key="idx"
            :project="project"
          />
        </div>
      </RcContainer>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import projects from '~/data/projects.json'
import { Project } from '~/components/ProjectCard.vue'

import { meta } from '~/utils/meta'

export default Vue.extend({
  head() {
    return meta({
      title: 'Projects',
      description: "Things I've worked on.",
      path: '/projects/',
    })
  },

  data: () => ({
    projects: (projects as Project[]).filter((p) => !p.hidden),
  }),
})
</script>
