<template>
  <rc-card
    :to="`/blog/${article.slug}`"
    nuxt
    class="bg-white dark:border-gray-700 dark:bg-gray-800 shadow-sm border rounded flex flex-col overflow-hidden"
  >
    <div class="aspect-w-16 aspect-h-9 border-b dark:border-gray-700">
      <img
        v-if="article.thumbnail"
        :src="article.thumbnail"
        class="object-cover w-full"
      />
    </div>

    <div class="px-4 py-3 flex flex-col flex-grow">
      <h3 class="text-gray-900 dark:text-white font-bold text-lg">
        {{ article.title }}
      </h3>
      <p class="text-gray-500 dark:text-gray-400 mt-2 leading-snug flex-grow">
        {{ article.description }}
      </p>
      <p
        class="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {{ article.readingTime.text }}
      </p>
    </div>
  </rc-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    article: Object as PropType<object>
  }
});
</script>