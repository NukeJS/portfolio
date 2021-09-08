<template>
  <rc-card
    :to="`/blog/${article.slug}`"
    nuxt
    class="flex flex-col overflow-hidden bg-white border rounded shadow-sm group dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="border-b aspect-w-16 aspect-h-9 dark:border-gray-700">
      <nuxt-img
        v-if="article.thumbnail"
        :src="article.thumbnail"
        class="object-cover w-full"
      />
    </div>

    <div class="flex flex-col flex-grow px-4 py-3">
      <h3
        class="text-lg font-semibold text-gray-900 dark:text-white group-hover:underline"
      >
        {{ article.title }}
      </h3>
      <p class="flex-grow mt-2 leading-snug text-gray-500 dark:text-gray-400">
        {{ article.description }}
      </p>
      <p
        class="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        <IconClock class="w-4 h-4 mr-1" />
        {{ article.readingTime.text }}
      </p>
    </div>
  </rc-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

interface Article {
  slug: string;
  thumbnail: string;
  title: string;
  description: string;
  readingTime: any;
}

export default Vue.extend({
  props: {
    article: Object as PropType<Article>
  }
});
</script>