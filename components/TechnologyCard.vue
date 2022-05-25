<template>
  <div
    class="px-6 py-4 shadow-md bg-white dark:bg-neutral-800 rounded-xl space-y-3"
  >
    <h3 class="text-lg font-semibold dark:text-white text-gray-900 md:text-xl">
      {{ technology.title }}
    </h3>
    <div class="grid grid-cols-6 sm:grid-cols-5 md:grid-cols-6 gap-4">
      <div
        v-for="(item, index) in technology.items"
        :key="index"
        class="aspect-w-1 aspect-h-1"
      >
        <img
          :src="`/images/technologies/${item.image}.svg`"
          :alt="`${item.name} logo`"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import type { Technology } from "~/types";
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
defineProps<{
  technology: Technology;
}>();
/* -------------------------------------------------------------------------- */
</script>
