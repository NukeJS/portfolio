<template>
  <NuxtLink
    :to="`/projects/${project.slug}`"
    class="p-4 transition duration-200 ease-in-out bg-white shadow-md rounded-xl hover:shadow-lg hover:-translate-y-1"
  >
    <div class="aspect-w-16 aspect-h-9">
      <NuxtImg
        :src="project.image_url"
        preset="blog"
        class="object-cover w-full rounded-xl"
      />
    </div>
    <div class="mt-3">
      <h3 class="text-lg font-semibold leading-tight text-gray-800 md:text-xl">
        {{ project.name }}
      </h3>
      <p class="mt-3 leading-snug text-gray-500 md:text-lg">
        {{ project.description }}
      </p>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export interface Project {
  slug: string
  name: string
  hidden?: boolean
  image_url: string
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
