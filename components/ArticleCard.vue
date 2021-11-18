<template>
  <NuxtLink
    :to="`/blog/${article.slug}/`"
    class="flex flex-col overflow-hidden bg-gray-800 rounded-md shadow-lg  sm:transition-transform sm:duration-300 sm:ease-in-out group sm:hover:-translate-y-1"
  >
    <div class="relative" v-if="article.thumbnail">
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
      <div
        class="flex items-center justify-between mt-auto text-sm text-gray-400"
      >
        <div class="flex items-center">
          <IconClock class="w-4 h-4" />
          <p class="ml-1">{{ Math.ceil(article.readingTime.minutes) }} min</p>
        </div>
        <div class="flex items-center">
          <IconCalendar class="w-4 h-4" />
          <time class="ml-1" :datetime="article.date">
            {{ article.formattedDate }}
          </time>
        </div>
      </div>
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

<style scoped></style>
