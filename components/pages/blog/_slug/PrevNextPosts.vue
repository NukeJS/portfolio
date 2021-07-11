<template>
  <div class="flex flex-col md:flex-row justify-between gap-4">
    <rc-card
      v-if="prev"
      nuxt
      :to="`/blog/${prev.slug}`"
      class="dark:border-gray-700 dark:bg-gray-800 border rounded px-3 py-2 md:max-w-sm w-full flex flex-col"
    >
      <h6 class="text-gray-500 dark:text-gray-400 font-bold uppercase text-xs">
        Previous Post
      </h6>
      <h4 class="mt-1 text-gray-900 dark:text-white font-semibold">
        {{ prev.title }}
      </h4>
    </rc-card>
    <span v-else>&nbsp;</span>
    <rc-card
      v-if="next"
      nuxt
      :to="`/blog/${next.slug}`"
      class="dark:border-gray-700 dark:bg-gray-800 border rounded px-3 py-2 md:max-w-sm w-full flex flex-col"
    >
      <h6 class="text-gray-500 dark:text-gray-400 font-bold uppercase text-xs">
        Next Post
      </h6>
      <h4 class="mt-1 text-gray-900 dark:text-white font-semibold">
        {{ next.title }}
      </h4>
    </rc-card>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object
    },
    next: {
      type: Object
    }
  }
};
</script>

<style>
</style>