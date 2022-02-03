<template>
  <div class="w-full">
    <section>
      <RcContainer class="py-14 sm:py-20 md:py-28 lg:py-32">
        <div class="text-center">
          <h2
            class="text-4xl font-semibold tracking-tight text-gray-800 md:text-5xl"
          >
            My Blog.
          </h2>
          <p
            class="max-w-2xl mx-auto mt-2 text-gray-500 md:text-lg sm:mt-3 md:mt-4"
          >
            A collection of articles I've written.
          </p>
        </div>
        <div
          class="grid gap-6 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          <ArticleCard
            v-for="(article, idx) in articles"
            :key="idx"
            :article="article"
          />
        </div>
      </RcContainer>
    </section>
  </div>
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
      path: '/blog/'
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
        'labels'
      ])
      .sortBy('date', 'desc')
      .fetch()

    return {
      articles
    }
  },

  data: () => ({
    articles: null as IContentDocument[] | null
  })
})
</script>
