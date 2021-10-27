<template>
  <article
    class="w-full px-4 py-6 mx-auto sm:px-6 lg:px-8 sm:py-10 md:py-16 lg:py-20"
  >
    <div
      class="max-w-screen-md mx-auto prose prose-dark md:prose-lg lg:prose-xl"
    >
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <NuxtImg
        :src="article.thumbnail"
        preset="blog"
        class="object-cover w-full rounded-md shadow-lg"
      />

      <NuxtContent :document="article" />
    </div>
    <div class="w-full max-w-screen-md mx-auto mt-10">
      <div class="flex flex-col justify-between gap-3 md:flex-row">
        <NuxtLink
          v-if="previousArticle"
          :to="localePath(`/blog/${previousArticle.slug}`)"
          class="flex flex-col w-full px-4 py-3 bg-gray-800 rounded-md shadow-lg  md:max-w-sm group"
        >
          <h6 class="text-xs font-bold text-gray-400 uppercase">
            Previous Article
          </h6>
          <h4 class="font-semibold text-white group-hover:underline">
            {{ previousArticle.title }}
          </h4>
        </NuxtLink>
        <div v-else class="-mt-3"></div>
        <NuxtLink
          v-if="nextArticle"
          :to="localePath(`/blog/${nextArticle.slug}`)"
          class="flex flex-col w-full px-4 py-3 bg-gray-800 rounded-md shadow-lg  md:max-w-sm group md:text-right"
        >
          <h6 class="text-xs font-bold text-gray-400 uppercase">
            Next Article
          </h6>
          <h4 class="font-semibold text-white group-hover:underline">
            {{ nextArticle.title }}
          </h4>
        </NuxtLink>
        <div v-else></div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

import { IContentDocument } from '@nuxt/content/types/content'

import { meta } from '~/utils/meta'

export default Vue.extend({
  async asyncData({ $content, params, error }) {
    const article = await $content('blog', params.slug)
      .where({ draft: false })
      .fetch()
      .catch(() =>
        error({
          statusCode: 404,
          message: 'This article could not be found',
        })
      )

    // @ts-ignore
    const [previousArticle, nextArticle] = await $content('blog')
      .where({ draft: false })
      .sortBy('date')
      .surround(params.slug)
      .only(['title', 'slug'])
      .fetch()

    return {
      article,
      previousArticle,
      nextArticle,
    }
  },

  data: () => ({
    article: {} as IContentDocument,
    previousArticle: null as IContentDocument | null,
    nextArticle: null as IContentDocument | null,
  }),

  head() {
    const { title, description, keywords, thumbnail, slug } = this.article

    return meta({
      title,
      description,
      keywords,
      image: thumbnail,
      path: `/blog/${slug}`,
      type: 'article',
      locale: this.$i18n.locale,
      defaultLocale: this.$i18n.defaultLocale,
    })
  },
})
</script>

<style scoped>
</style>