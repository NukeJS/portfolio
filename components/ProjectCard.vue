<template>
  <component
    :is="Object.keys(project.links).length ? NuxtLink : 'div'"
    :to="project.links.external ?? project.links.github ?? ''"
    class="group"
  >
    <NuxtImg
      :src="`/images/projects/${project.image_name}.png`"
      :alt="`${project.name}`"
      class="aspect-video w-full rounded-md"
    />
    <div class="mt-4">
      <div>
        <h4 class="text-2xl font-semibold text-white">
          {{ project.name }}
        </h4>
        <p class="text-lg">{{ project.description }}</p>
      </div>
      <div class="mt-4">
        <h5 class="text-sm font-semibold uppercase text-zinc-200">
          Techs Used
        </h5>
        <div class="mt-2 flex items-center gap-2">
          <div v-for="technology in project.technologies" :key="technology">
            <NuxtImg
              class="object-centertransition-[filter] aspect-square object-contain grayscale duration-300 group-hover:grayscale-0"
              width="25px"
              :src="`/images/technologies/${
                technologies.get(technology)?.image_name
              }.svg`"
              :alt="`${technologies.get(technology)?.name} logo`"
              :title="technologies.get(technology)?.name"
            />
          </div>
        </div>
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import { NuxtLink } from '#components';
import type { Project } from '~/data/projects';
import { technologies } from '~~/data/technologies';
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
defineProps<{
  project: Project;
}>();
/* -------------------------------------------------------------------------- */
</script>

<style scoped></style>
