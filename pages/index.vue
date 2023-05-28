<template>
  <div>
    <header class="py-12 sm:py-16 md:py-20 lg:py-24">
      <Container>
        <h1
          class="text-center text-4xl font-extrabold leading-tight text-white sm:text-left sm:text-5xl"
        >
          I'm <span class="text-pink-500">Ronnie</span>, a full-stack developer
          with a passion for developing robust and scalable web applications.
        </h1>
        <div
          class="mt-8 grid space-y-6 sm:mt-10 sm:block sm:space-x-6 sm:space-y-0"
        >
          <Button to="/about-me"> Get to know me </Button>
        </div>
      </Container>
    </header>
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <Container>
        <h2 class="text-3xl font-bold text-white">Things I worked on.</h2>
        <div class="mt-8 grid gap-8 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            v-for="(project, index) in featuredProjects"
            :key="index"
            v-bind="{ project }"
          />
        </div>
        <div class="mt-12 sm:mt-16">
          <Button to="/projects" variant="secondary"> View All </Button>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import { description } from '~/data/meta';
import { getMultipleRandomItems } from '~/utils/array';
import { useHeadHelper } from '~/utils/meta';
import projects from '~~/data/projects';

/* -------------------------------------------------------------------------- */

/* ---------------------------- Page Information ---------------------------- */
useHeadHelper({
  description,
});
/* -------------------------------------------------------------------------- */

/* -------------------------------- Projects -------------------------------- */
const featuredProjects = getMultipleRandomItems(projects, 3);
/* -------------------------------------------------------------------------- */
</script>
