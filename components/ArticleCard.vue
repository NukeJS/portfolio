<template>
  <NuxtLink
    :to="`/blog/${article.slug}/`"
    class="flex flex-col transition duration-200 transform group"
  >
    <div class="relative" v-if="article.thumbnail">
      <div class="aspect-w-16 aspect-h-9">
        <NuxtImg
          :src="article.thumbnail"
          preset="blog"
          class="object-cover w-full transition duration-200 transform border rounded shadow-md group-hover:-translate-y-1 group-hover:shadow-lg"
        />
      </div>
    </div>
    <div class="flex flex-col flex-grow px-1 py-3">
      <h3
        class="text-lg font-semibold leading-tight text-gray-800 group-hover:underline"
      >
        {{ article.title }}
      </h3>
      <time class="mt-1 text-sm text-indigo-600" :datetime="article.date">
        {{ article.formattedDate }}
      </time>
      <p class="mt-2 text-gray-500">
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
