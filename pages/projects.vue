<template>
  <Container as="section" class="my-8 sm:my-12 md:my-16 lg:my-20">
    <div
      class="text-h5 text-center font-semibold uppercase tracking-wider text-pink-500"
    >
      My Work
    </div>
    <h1 class="text-center text-white mt-2">Things I've made.</h1>
    <div class="mt-10 sm:mt-16">
      <div
        v-if="projects"
        class="grid gap-x-9 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          v-bind="{ project }"
        />
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import projects from '~~/data/projects';
import { useHeadHelper } from '~/utils/meta';

useHeadHelper({
  title: 'Work',
  description: "Things I've worked on.",
});
</script>
