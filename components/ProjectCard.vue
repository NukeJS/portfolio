<template>
  <component
    :is="hasLinks ? NuxtLink : 'div'"
    :to="project.links.external ?? project.links.github ?? ''"
    :target="hasLinks ? '_blank' : ''"
    class="group"
  >
    <div
      class="aspect-video rounded-xl flex items-center justify-center bg-[var(--background-color,white)]"
      :style="{ '--background-color': project.color }"
    >
      <NuxtImg
        :src="`/images/projects/${project.image.name}${
          project.image.extension ?? '.svg'
        }`"
        :alt="`${project.name}`"
        class="h-1/2 w-auto max-w-[60%] object-contain"
      />
    </div>
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
