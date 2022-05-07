<template>
  <NuxtLink
    class="px-3 pt-6 pb-4 text-center hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl transition focus:outline-none focus:ring focus:ring-violet-500"
    :to="technology.url"
    target="_blank"
  >
    <img
      class="w-12 h-12 mx-auto"
      :src="`/images/technologies/${technology.image}`"
      :alt="`${technology.name} Logo`"
    />
    <h3
      class="mt-3 text-lg font-semibold text-zinc-900 dark:text-white md:text-xl"
    >
      {{ technology.name }}
    </h3>
  </NuxtLink>
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
