<template>
  <NuxtLink :to="article._path" class="group">
    <div
      class="aspect-w-16 aspect-h-9 mb-3 rounded-xl bg-zinc-800 shadow-md transition-transform duration-300"
    >
      <NuxtImg
        :src="`/blog/${article.thumbnail}`"
        class="absolute rounded-xl object-cover"
        format="webp"
        quality="60"
        alt="Article thumbnail"
        width="304"
        height="171"
      />
    </div>
    <h3 class="text-xl font-semibold text-white group-hover:underline">
      {{ article.title }}
    </h3>
  </NuxtLink>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import type { Article } from '~~/types/articles'
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
defineProps<{
  article: Article
}>()
/* -------------------------------------------------------------------------- */
</script>

<style scoped></style>
