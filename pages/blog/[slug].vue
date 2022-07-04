<template>
  <Container fluid class="py-8 sm:py-12 md:py-16 lg:py-20">
    <div class="mx-auto max-w-prose sm:prose-lg md:prose-xl">
      <div class="not-prose">
        <NuxtLink
          to="/blog"
          class="mb-6 inline-flex items-center hover:text-white"
        >
          <ArrowLeftIcon class="mr-2 h-6 w-6" /> Go back
        </NuxtLink>
      </div>
      <h1 class="text-4xl font-extrabold text-white md:text-5xl">
        {{ data.title }}
      </h1>

      <div class="not-prose">
        <div class="mt-10" />

        <div class="aspect-w-16 aspect-h-9 relative mb-3 rounded-xl shadow-md">
          <img
            v-if="data?.thumbnail"
            :src="`/blog/${data.thumbnail}`"
            class="absolute rounded-xl object-cover"
          />
          <div v-else class="rounded-xl bg-zinc-800" />
        </div>

        <div class="mb-10" />
      </div>
    </div>
    <article class="prose prose-dark mx-auto sm:prose-lg md:prose-xl">
      <p>{{ data.description }}</p>
      <ContentRenderer
        class="prose prose-lg prose-dark mx-auto sm:prose-xl"
        :value="data"
      />
    </article>
  </Container>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import { ArrowLeftIcon } from '@heroicons/vue/outline'

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
