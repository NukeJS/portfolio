<template>
  <NuxtLink
    :to="`/blog/${article.slug}/`"
    class="flex flex-col p-4 transition duration-200 transform bg-white shadow-md rounded-xl hover:shadow-lg hover:-translate-y-1"
  >
    <div class="relative" v-if="article.thumbnail">
      <div class="aspect-w-16 aspect-h-9">
        <NuxtImg
          :src="article.thumbnail"
          preset="blog"
          class="object-cover w-full rounded-xl"
          alt="Article thumbnail image"
        />
      </div>
    </div>
    <div class="flex flex-col flex-grow mt-4">
      <h3 class="text-lg font-semibold leading-tight text-gray-800 md:text-xl">
        {{ article.title }}
      </h3>
      <time class="mt-1 text-sm text-indigo-600" :datetime="article.date">
        {{ article.formattedDate }}
      </time>
      <p class="mt-3 text-gray-500 md:text-lg">
        {{ article.description }}
      </p>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Article {
  title: string
  description: string
  thumbnail?: string
  slug: string
  readingTime: any
  date: Date
  formattedDate: string
}

export default Vue.extend({
  props: {
    article: {
      type: Object as PropType<Article>,
    },
  },
})
</script>
