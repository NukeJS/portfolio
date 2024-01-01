<template>
  <component
    :is="hasLinks ? NuxtLink : 'div'"
    :to="project.links.external ?? project.links.github ?? ''"
    :target="hasLinks ? '_blank' : ''"
    class="group"
  >
    <NuxtImg
      :src="`/images/projects/${project.image_name}.png`"
      :alt="`${project.name}`"
      class="aspect-video w-full rounded-lg object-cover"
    />
    <h3 class="text-h4 text-white mt-4">
      {{ project.name }}
    </h3>
    <p class="text-lg">{{ project.description }}</p>
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
import type { Project } from '~/data/projects';

const { project } = defineProps<{
  project: Project;
}>();

const hasLinks = computed(() => !!Object.keys(project.links).length);
</script>
