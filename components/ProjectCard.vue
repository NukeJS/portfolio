<template>
  <div class="space-y-3 rounded-xl bg-zinc-800 p-4">
    <h3 class="text-xl font-semibold text-white group-hover:underline">
      {{ project.name }}
    </h3>
    <div class="flex space-x-2">
      <NuxtLink
        v-if="project.github_slug"
        :to="`https://github.com/NukeJS/${project.github_slug}`"
        target="_blank"
        class="hover:text-white"
        aria-label="Open GitHub repository"
      >
        <GithubIcon class="h-6 w-6" />
      </NuxtLink>
      <NuxtLink
        v-if="project.blog_slug"
        :to="`/blog/${project.blog_slug}`"
        target="_blank"
        class="hover:text-white"
        aria-label="Open blog article"
      >
        <RssIcon class="h-6 w-6" />
      </NuxtLink>
      <NuxtLink
        v-if="project.website_url"
        :to="project.website_url"
        target="_blank"
        class="hover:text-white"
        aria-label="Open website"
      >
        <GlobeAltIcon class="h-6 w-6" />
      </NuxtLink>
    </div>
    <p v-if="project.description">
      {{ project.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import { GlobeAltIcon, RssIcon } from '@heroicons/vue/outline'
import type { Project } from '~/types/projects'
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
defineProps<{
  project: Project
}>()
/* -------------------------------------------------------------------------- */
</script>

<style scoped></style>
