<template>
  <div class="w-full">
    <article
      class="max-w-screen-md px-4 py-6 mx-auto sm:px-6 lg:px-8 sm:py-10 md:py-16 lg:py-20"
    >
      <NuxtLink
        to="/blog/"
        class="inline-flex items-center font-bold transition-colors duration-200 hover:text-gray-400 md:text-lg"
      >
        <IconArrowNarrowLeft class="w-6 h-6 mr-1 md:h-7 md:w-7" /> Back
      </NuxtLink>

      <div
        class="mx-auto mt-4 prose max-w-none prose-dark md:prose-lg lg:prose-xl sm:mt-6 md:mt-8 lg:mt-10"
      >
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <NuxtImg
          v-if="article.thumbnail"
          :src="article.thumbnail"
          preset="blog"
          class="object-cover w-full rounded-md shadow-lg"
        />

        <NuxtContent :document="article" />

        <hr />
      </div>

      <div class="mt-10">
        <div class="flex flex-col justify-between gap-3 md:flex-row">
          <NuxtLink
            v-if="previousArticle"
            :to="`/blog/${previousArticle.slug}`"
            class="flex flex-col w-full py-3 space-y-1 md:w-1/2 group"
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
            :to="`/blog/${nextArticle.slug}`"
            class="flex flex-col w-full py-3 space-y-1 md:w-1/2 group md:text-right"
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { IContentDocument } from '@nuxt/content/types/content'

import { meta } from '~/utils/meta'

export default Vue.extend({
  head() {
    const { title, description, keywords, thumbnail, slug } = this.article

    return meta({
      title,
      description,
      keywords,
      image: thumbnail,
      path: `/blog/${slug}/`,
      type: 'article',
    })
  },

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
})
</script>

<style lang="scss">
html {
  scroll-padding-top: 6rem;
}
.nuxt-content {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      @apply no-underline mr-2 lg:mr-0 relative;
    }
  }
  .icon.icon-link {
    &::before {
      content: '#';
      @apply lg:absolute -left-10;
    }
  }

  img {
    @apply rounded-md shadow-lg;
  }

  .nuxt-content-highlight {
    @apply relative selection:bg-indigo-100 selection:bg-opacity-10;

    &:hover {
      & > .filename {
        @apply opacity-25;
      }
    }

    & > .filename {
      @apply absolute right-2 top-2 text-gray-300 z-10 font-mono text-sm tracking-tight leading-none select-none px-2 py-1 bg-gray-800 rounded-md border border-gray-700 transition-opacity shadow-md;
    }
  }
}
</style>
