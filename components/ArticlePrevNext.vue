<template>
  <div class="flex flex-col justify-between gap-4 md:flex-row">
    <rc-card
      v-if="prev"
      nuxt
      :to="`/blog/${prev.slug}`"
      class="flex flex-col w-full px-3 py-2 border rounded group dark:border-gray-700 dark:bg-gray-800 md:max-w-sm"
    >
      <h6 class="text-xs font-bold text-gray-500 uppercase dark:text-gray-400">
        Previous Post
      </h6>
      <h4
        class="mt-1 font-semibold text-gray-900 group-hover:underline dark:text-white"
      >
        {{ prev.title }}
      </h4>
    </rc-card>
    <rc-card
      v-if="next"
      nuxt
      :to="`/blog/${next.slug}`"
      class="flex flex-col w-full px-3 py-2 border rounded group md:text-right dark:border-gray-700 dark:bg-gray-800 md:max-w-sm"
    >
      <h6 class="text-xs font-bold text-gray-500 uppercase dark:text-gray-400">
        Next Post
      </h6>
      <h4
        class="mt-1 font-semibold text-gray-900 group-hover:underline dark:text-white"
      >
        {{ next.title }}
      </h4>
    </rc-card>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

interface PrevNextArticle {
  slug: string;
  title: string;
}

export default Vue.extend({
  props: {
    prev: {
      type: Object as PropType<PrevNextArticle>
    },
    next: {
      type: Object as PropType<PrevNextArticle>
    }
  }
});
</script>