<template>
  <a
    :href="project.url"
    target="_blank"
    rel="noopener"
    class="flex flex-col px-4 py-3 overflow-hidden bg-gray-800 rounded-md shadow-lg  sm:transition-transform sm:duration-300 sm:ease-in-out group sm:hover:-translate-y-1"
  >
    <h3
      class="text-lg font-semibold leading-tight text-white  group-hover:underline"
    >
      {{ project.name }}
    </h3>
    <p class="flex-grow mt-2 leading-snug">
      {{ project.description }}
    </p>
    <div class="flex justify-between mt-3 text-sm">
      <p>
        {{ project.language }}
      </p>
      <span v-if="project.stars" class="flex items-center">
        <IconStar class="w-4 h-4 mr-1 text-yellow-400" />
        {{ project.stars }}
      </span>
    </div>
  </a>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Project {
  name: string
  description: string
  url?: string
  language: string
  stars?: number
}

export default Vue.extend({
  props: {
    project: {
      type: Object as PropType<Project>,
    },
  },
})
</script>

<style scoped></style>
