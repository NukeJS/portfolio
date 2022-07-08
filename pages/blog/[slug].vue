<template>
  <Container fluid class="py-8 sm:py-12 md:py-16 lg:py-20">
    <article class="prose prose-lg prose-dark mx-auto sm:prose-xl">
      <h1>
        {{ data.title }}
      </h1>
      <div
        class="not-prose aspect-w-16 aspect-h-9 relative mb-3 rounded-xl shadow-md"
      >
        <img
          v-if="data?.thumbnail"
          :src="`/blog/${data.thumbnail}`"
          class="absolute rounded-xl object-cover"
        />
        <div v-else class="rounded-xl bg-zinc-800" />
      </div>
      <ContentRenderer :value="data" />
    </article>
  </Container>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import { Article } from '~~/types/articles'
/* -------------------------------------------------------------------------- */

/* --------------------------------- Article -------------------------------- */
const { data } = await useAsyncData('article', () =>
  queryContent<Article>(useRoute().path).findOne()
)
/* -------------------------------------------------------------------------- */

/* ---------------------------- Page Information ---------------------------- */
useHead({
  title: data.value.title
})
/* -------------------------------------------------------------------------- */
</script>

<style scoped></style>
