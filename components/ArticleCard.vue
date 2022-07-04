<template>
  <NuxtLink :to="article._path" class="group">
    <div
      class="aspect-w-16 aspect-h-9 mb-3 rounded-xl shadow-md transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105"
    >
      <img
        :src="`/blog/${article.thumbnail}`"
        class="absolute rounded-xl object-cover"
      />
    </div>
    <h3 class="text-xl font-semibold text-white">{{ article.title }}</h3>
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
