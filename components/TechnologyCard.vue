<template>
  <div
    class="flex flex-col items-center gap-3 rounded-lg bg-zinc-800 p-4 lg:flex-row"
  >
    <NuxtImg
      :src="`/images/technologies/${technology.image_name}.svg`"
      :alt="`${technology.name} logo`"
      class="aspect-square w-12 lg:w-8 object-contain"
    />
    <h3 class="grow text-h5 text-white">
      {{ technology.name }}
    </h3>
  </div>
</template>

<script setup lang="ts">
import type { TechnologyInfo } from '~/data/technologies';

defineProps<{
  technology: TechnologyInfo;
}>();
</script>
