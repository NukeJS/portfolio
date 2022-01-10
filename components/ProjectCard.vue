<template>
  <a
    :href="`https://github.com/CodingWithNuke/${project.github_slug}`"
    target="_blank"
    rel="noopener noreferrer"
    class="flex flex-col p-3 transition duration-200 ease-in-out bg-white rounded shadow-md hover:shadow-lg hover:-translate-y-1"
  >
    <h3 class="text-lg font-semibold leading-tight text-gray-800">
      {{ project.displayName || project.name }}
    </h3>
    <p class="flex-grow mt-2 leading-snug text-gray-500">
      {{ project.description }}
    </p>
  </a>
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
