<template>
  <div>
    <section class="py-12 sm:py-16 md:py-20 lg:py-24">
      <Container>
        <div
          class="mb-2 text-center font-semibold uppercase tracking-wider text-pink-500"
        >
          My Blog
        </div>
        <h1 class="text-center text-4xl font-bold text-white sm:text-5xl">
          Insightful and helpful content.
        </h1>
        <div class="mt-10 grid gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          <ArticleCard
            v-for="article in data"
            :key="article._id"
            :article="article"
          />
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import type { Article } from '~~/types/articles'
import { useHeadHelper } from '~~/utils/meta'
/* -------------------------------------------------------------------------- */

/* ---------------------------- Page Information ---------------------------- */
useHeadHelper({
  title: 'Blog',
  description: 'Insightful and helpful content.'
})
/* -------------------------------------------------------------------------- */

/* -------------------------------- Articles -------------------------------- */
const { data } = await useAsyncData('articles', () =>
  queryContent<Article>('/blog')
    .where({ _draft: false })
    .only(['_path', 'title', 'description', 'thumbnail'])
    .find()
)
/* -------------------------------------------------------------------------- */
</script>
