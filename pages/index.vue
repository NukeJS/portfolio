<template>
  <Container as="header" class="my-12 sm:my-16 md:my-20 lg:my-24">
    <h1 class="text-center sm:text-left text-white">
      I'm <span class="text-pink-500">Ronnie</span>, a full-stack developer with
      a passion for developing robust and scalable web applications.
    </h1>
    <div
      class="mt-8 grid space-y-6 sm:mt-10 sm:block sm:space-x-6 sm:space-y-0"
    >
      <Button to="/about-me"> Get to know me </Button>
    </div>
  </Container>
  <Container as="section" class="my-8 sm:my-12 md:my-16 lg:my-20">
    <h2 class="text-white">Things I worked on.</h2>
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
</template>

<script setup lang="ts">
import { description } from '~/data/meta';
import { getMultipleRandomItems } from '~/utils/array';
import { useHeadHelper } from '~/utils/meta';
import projects from '~~/data/projects';

useHeadHelper({
  description,
});

const { data: featuredProjects } = useAsyncData(async () =>
  getMultipleRandomItems(projects, 3)
);
</script>
