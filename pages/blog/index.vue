<template>
  <RcContainer>
    <section class="w-full py-6 sm:py-10 md:py-16 lg:py-20">
      <h1 class="text-4xl font-semibold tracking-tight text-white md:text-5xl">
        My <span class="text-indigo-500">Blog</span>.
      </h1>
      <p class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5">
        A collection of articles I've written.
      </p>
      <div
        class="grid grid-cols-1 gap-4 mt-6  sm:grid-cols-2 lg:grid-cols-3 sm:mt-8"
      >
        <ArticleCard
          v-for="(article, idx) in articles"
          :key="idx"
          :article="article"
        />
      </div>
    </section>
  </RcContainer>
</template>

<script lang="ts">
import Vue from 'vue'

import { IContentDocument } from '@nuxt/content/types/content'

import { meta } from '~/utils/meta'

export default Vue.extend({
  head() {
    return meta({
      title: 'Blog',
      description: "A collection of articles I've written.",
      path: '/blog',
    })
  },

  async asyncData({ $content }) {
    const articles = await $content('blog')
      .where({ draft: false })
      .only([
        'slug',
        'title',
        'thumbnail',
        'description',
        'date',
        'readingTime',
        'formattedDate',
        'labels',
      ])
      .sortBy('date', 'desc')
      .fetch()

    return {
      articles,
    }
  },

  data: () => ({
    articles: null as IContentDocument[] | null,
  }),
})
</script>
