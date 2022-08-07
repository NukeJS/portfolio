<template>
  <div class="flex items-center rounded-xl bg-zinc-800 p-4">
    <div class="mr-3 h-8 w-8 flex-none">
      <div class="aspect-w-1 aspect-h-1">
        <NuxtImg
          :src="`/technologies/${technology.image_name}.svg`"
          quality="60"
          :alt="`${technology.name} logo`"
          width="32"
          height="32"
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
import type { Technology } from '~/types/technologies'
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
defineProps<{
  technology: Technology
}>()
/* -------------------------------------------------------------------------- */
</script>

<style scoped></style>
