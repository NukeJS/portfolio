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

        <div class="mt-10 sm:mt-16">
          <Input v-model="searchQuery" placeholder="Enter a search term">
            <template #prepend-inner>
              <SearchIcon class="h-5 w-5" />
            </template>
          </Input>
        </div>
        <div class="mt-10">
          <div
            v-if="filteredArticles.length"
            class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <ArticleCard
              v-for="article in filteredArticles"
              :key="article._id"
              v-bind="{ article }"
            />
          </div>

          <template v-else>
            <p class="break-words">
              Your search query "{{ searchQuery }}" did not match any articles.
            </p>
          </template>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import { SearchIcon } from '@heroicons/vue/outline'
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
const { data: articles } = await useAsyncData('blog-articles', () =>
  queryContent<Article>('/blog')
    .where({ _draft: false })
    .only(['_path', 'title', 'description', 'thumbnail', 'keywords'])
    .sort({ published_at: -1 })
    .find()
)

const searchQuery = ref('')

const filteredArticles = computed(() =>
  articles.value.filter(article => {
    const matchesTitle = article.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
    const matchesKeywords = article.keywords
      ?.map(keyword => keyword.toLowerCase())
      .join(' ')
      .includes(searchQuery.value.toLowerCase())
    const matchesLabels = article.labels
      ?.map(label => label.toLowerCase())
      .join(' ')
      .includes(searchQuery.value.toLowerCase())

    return matchesTitle || matchesKeywords || matchesLabels
  })
)
/* -------------------------------------------------------------------------- */
</script>
