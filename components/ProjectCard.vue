<template>
  <NuxtLink
    :to="`/projects/${project.name}/`"
    class="flex flex-col px-4 py-3 overflow-hidden bg-gray-800 rounded-md shadow-lg sm:transition-transform sm:duration-300 sm:ease-in-out group sm:hover:-translate-y-1"
  >
    <h3
      class="text-lg font-semibold leading-tight text-white group-hover:underline"
    >
      {{ project.displayName || project.name }}
    </h3>
    <p class="flex-grow mt-2 leading-snug">
      {{ project.description }}
    </p>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Project {
  name: string
  displayName: string | null
  description: string
  technologies: Record<string, string>[]
  github_slug: string
  external_url: string
}

export default Vue.extend({
  props: {
    project: {
      type: Object as PropType<Project>,
    },
  },
})
</script>
