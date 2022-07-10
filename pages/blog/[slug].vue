<template>
  <Container fluid class="py-8 sm:py-12 md:py-16 lg:py-20">
    <article class="prose prose-lg prose-dark mx-auto sm:prose-xl">
      <h1>
        {{ data.title }}
      </h1>
      <div
        class="not-prose aspect-w-16 aspect-h-9 relative mb-3 rounded-xl shadow-md"
      >
        <NuxtImg
          v-if="data?.thumbnail"
          :src="`/blog/${data.thumbnail}`"
          class="absolute rounded-xl object-cover"
          format="webp"
          quality="60"
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
import { useHeadHelper } from '~~/utils/meta'
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
const route = useRoute()
/* -------------------------------------------------------------------------- */

/* --------------------------------- Article -------------------------------- */
const { data } = await useAsyncData(`article-${route.path}`, () =>
  queryContent<Article>(route.path).findOne()
)
/* -------------------------------------------------------------------------- */

/* ---------------------------- Page Information ---------------------------- */
useHeadHelper({
  title: data.value.title,
  description: data.value.description,
  keywords: data.value.keywords,
  image: `/blog/${data.value.thumbnail}`,
  type: 'article'
})
/* -------------------------------------------------------------------------- */
</script>

<style scoped></style>
