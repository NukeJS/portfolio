<template>
  <rc-card
    :href="project.url"
    target="_blank"
    class="dark:border-gray-700 dark:bg-gray-800 shadow-sm border rounded px-4 py-3 flex flex-col"
  >
    <h3 class="text-gray-900 dark:text-white font-bold text-lg">
      {{ project.name }}
    </h3>
    <p class="text-gray-500 dark:text-gray-400 mt-2 leading-snug flex-grow">
      {{ project.description }}
    </p>

    <div class="flex justify-between text-sm mt-3">
      <p class="text-gray-500 dark:text-gray-400">
        {{ project.language }}
      </p>
      <span class="flex items-center text-gray-500 dark:text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-yellow-500 dark:text-yellow-400 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
        {{ project.stars }}
      </span>
    </div>
  </rc-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    project: Object as PropType<object>
  }
});
</script>

<style>
</style>