<template>
  <NuxtLink
    class="px-3 pt-6 pb-4 text-center hover:bg-zinc-800 border-transparent border hover:border-zinc-100/5 rounded-xl transition focus:outline-none focus:ring focus:ring-violet-500"
    :to="technology.url"
    target="_blank"
  >
    <img
      class="w-16 h-16 mx-auto"
      :src="`/images/technologies/${technology.image}`"
      :alt="`${technology.name} Logo`"
    />
    <h3 class="mt-3 text-lg font-semibold text-zinc-50 md:text-xl">
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
