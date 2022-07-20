<template>
  <div>
    <header class="py-12 sm:py-16 md:py-20 lg:py-24">
      <Container>
        <h1
          class="text-center text-4xl font-extrabold leading-tight text-white sm:text-left sm:text-5xl"
        >
          I'm <span class="text-pink-500">Ronnie</span>. A developer, blogger,
          and software engineering student.
        </h1>
        <div
          class="mt-8 grid space-y-6 sm:mt-10 sm:block sm:space-y-0 sm:space-x-6"
        >
          <Button to="/blog"> Read my blog </Button>
          <Button to="/about-me" variant="secondary"> Get to know me </Button>
        </div>
      </Container>
    </header>
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <Container>
        <h2 class="text-3xl font-bold text-white">
          Things I share through writing.
        </h2>
        <div class="mt-8 grid gap-8 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          <ArticleCard
            v-for="article in articles"
            :key="article._id"
            v-bind="{ article }"
          />
        </div>
        <div class="mt-12 sm:mt-16">
          <Button to="/blog" variant="secondary">Read more articles</Button>
        </div>
      </Container>
    </section>
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <Container>
        <h2 class="text-3xl font-bold text-white">Things I made.</h2>
        <div class="mt-8 grid gap-8 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            v-for="(project, index) in projects"
            :key="index"
            v-bind="{ project }"
          />
        </div>
        <div class="mt-12 sm:mt-16">
          <Button to="/projects" variant="secondary"> View my work </Button>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import type { Article } from '~~/types/articles'
import DEFAULT_META from '~~/meta.json'
import { getMultipleRandomItems } from '~~/utils/array'
import { useHeadHelper } from '~~/utils/meta'

/* -------------------------------------------------------------------------- */

/* ---------------------------- Page Information ---------------------------- */
useHeadHelper({
  description: DEFAULT_META.description
})
/* -------------------------------------------------------------------------- */

/* -------------------------------- Articles -------------------------------- */
const { data: articles } = await useAsyncData('home-articles', () =>
  queryContent<Article>('/blog')
    .where({ _draft: false })
    .limit(3)
    .sort({ published_at: -1 })
    .find()
)
/* -------------------------------------------------------------------------- */

/* -------------------------------- Projects -------------------------------- */
const { data: projects } = await useAsyncData('home-projects', async () => {
  const data = await $fetch('/api/projects')
  return getMultipleRandomItems(data, 3)
})
/* -------------------------------------------------------------------------- */
</script>
