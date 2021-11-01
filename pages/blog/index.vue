<template>
  <RcContainer>
    <section class="w-full py-6 sm:py-10 md:py-16 lg:py-20">
      <h1
        v-html="$t('pages.blog.content.title')"
        class="text-4xl font-semibold tracking-tight text-white md:text-5xl"
      />
      <p
        v-html="$t('pages.blog.content.subtitle')"
        class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5"
      />
      <div
        class="grid grid-cols-1 gap-4 mt-6  sm:grid-cols-2 lg:grid-cols-3 sm:mt-8"
      >
        <NuxtLink
          v-for="(article, idx) in articles"
          :key="idx"
          :to="localePath(`/blog/${article.slug}`)"
          class="flex flex-col overflow-hidden bg-gray-800 rounded-md shadow-lg  sm:transition-transform sm:duration-300 sm:ease-in-out group sm:hover:-translate-y-1"
        >
          <div class="relative" v-if="article.thumbnail">
            <span
              class="absolute z-10 flex items-center px-2 py-1 text-sm leading-none text-gray-100 bg-gray-900 border border-gray-800 rounded-md shadow  right-2 top-2"
            >
              {{ Math.ceil(article.readingTime.minutes) }} min
            </span>
            <div class="aspect-w-16 aspect-h-9">
              <NuxtImg
                :src="article.thumbnail"
                preset="blog"
                class="object-cover w-full"
              />
            </div>
          </div>
          <div class="flex flex-col flex-grow px-4 py-3">
            <h3
              class="text-lg font-semibold leading-tight text-white  group-hover:underline"
            >
              {{ article.title }}
            </h3>
            <p class="mt-2 mb-3">
              {{ article.description }}
            </p>
            <div class="flex items-center mt-auto text-sm text-gray-400">
              <IconCalendar class="w-4 h-4" />
              <time class="ml-1" :datetime="article.date">{{
                article.formattedDate
              }}</time>
            </div>
          </div>
        </NuxtLink>
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
      title: this.$t('pages.blog.meta.title') as string,
      description: this.$t('pages.blog.meta.description') as string,
      path: '/blog',
      locale: this.$i18n.locale,
      defaultLocale: this.$i18n.defaultLocale,
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