<template>
  <div>
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <Container>
        <div
          class="mb-2 text-center font-semibold uppercase tracking-wider text-pink-500"
        >
          My Work
        </div>
        <h1 class="text-center text-4xl font-bold text-white sm:text-5xl">
          Things I've made.
        </h1>
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
    </section>
  </div>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import projects from '~~/data/projects';
import { useHeadHelper } from '~/utils/meta';
/* -------------------------------------------------------------------------- */

/* ---------------------------- Page Information ---------------------------- */
useHeadHelper({
  title: 'Work',
  description: "Things I've worked on.",
});
/* -------------------------------------------------------------------------- */
</script>
