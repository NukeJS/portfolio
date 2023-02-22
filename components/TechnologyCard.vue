<template>
  <div
    class="flex flex-col items-center space-y-3 rounded-xl bg-zinc-800 p-4 lg:flex-row lg:space-y-0 lg:space-x-3"
  >
    <div class="h-12 w-12 flex-none lg:h-8 lg:w-8">
      <div class="aspect-square">
        <img
          :src="`/images/technologies/${technology.image_name}.svg`"
          quality="60"
          :alt="`${technology.name} logo`"
          width="32"
          height="32"
          class="h-full w-full object-contain"
        />
      </div>
    </div>
    <div class="flex-1 font-semibold text-white">
      {{ technology.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import type { TechnologyInfo } from '~/data/technologies';
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
defineProps<{
  technology: TechnologyInfo;
}>();
/* -------------------------------------------------------------------------- */
</script>

<style scoped></style>
