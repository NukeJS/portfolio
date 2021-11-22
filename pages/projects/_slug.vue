<template>
  <RcContainer>
    <section class="w-full py-6 sm:py-10 md:py-16 lg:py-20">
      <h1 class="text-4xl font-semibold tracking-tight text-white md:text-5xl">
        {{ project.displayName || project.name }}.
      </h1>
      <p class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5">
        {{ project.description }}
      </p>
      <div
        class="flex items-center max-w-2xl mt-3 space-x-4  md:text-lg sm:mt-4 md:mt-5"
      >
        <a
          v-if="project.github_slug"
          :href="`https://github.com/CodingWithNuke/${project.github_slug}`"
          target="_blank"
          rel="noopener"
          aria-label="Open GitHub repository"
          class="inline-flex items-center transition-colors duration-200  hover:text-gray-400"
        >
          <IconGithub class="w-6 h-6" />
        </a>
        <a
          v-if="project.external_url"
          :href="project.external_url"
          target="_blank"
          rel="noopener"
          :aria-label="`Open ${
            project.displayName || project.name
          } in external page`"
          class="inline-flex items-center transition-colors duration-200  hover:text-gray-400"
        >
          <IconExternalLink class="w-6 h-6" />
        </a>
      </div>

      <h3
        class="mt-6 text-2xl font-semibold tracking-tight text-white  sm:mt-8 md:text-3xl"
      >
        <span class="text-indigo-500">Technologies</span> Used.
      </h3>
      <div class="flex flex-wrap gap-3 mt-3">
        <div
          v-for="(technology, idx) in project.technologies"
          :key="idx"
          class="p-3 overflow-hidden bg-gray-800 rounded-md shadow-lg"
        >
          <NuxtImg
            class="w-12 h-12"
            :src="`/images/technologies/${technology.image}`"
            :alt="`${technology.name} Logo`"
          />
        </div>
      </div>
    </section>
  </RcContainer>
</template>

<script lang="ts">
import Vue from 'vue'

import projects from '~/data/projects.json'
import { meta } from '~/utils/meta'

export default Vue.extend({
  async asyncData({ params }) {
    const project = projects.find((item) => item.name === params.slug)

    return {
      project,
    }
  },

  head() {
    const { name, displayName, description } = this.project

    return meta({
      title: displayName || name,
      description,
      path: `/projects/${name}/`,
    })
  },

  data: () => ({
    project: {} as any,
  }),
})
</script>
