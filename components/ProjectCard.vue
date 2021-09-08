<template>
  <rc-card
    :href="project.url"
    target="_blank"
    class="flex flex-col px-4 py-3 border rounded shadow-sm dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="flex items-center">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white">
        {{ project.name }}
      </h3>

      <a
        v-if="project.external_url"
        :href="project.external_url"
        target="_blank"
        class="ml-auto"
        title="Open in new tab"
      >
        <IconExternalLink
          class="w-5 h-5 text-gray-900 transition-colors duration-200 dark:text-white hover:text-gray-500 dark:hover:text-gray-400"
        />
      </a>
    </div>
    <p class="flex-grow mt-2 leading-snug text-gray-500 dark:text-gray-400">
      {{ project.description }}
    </p>

    <div class="flex justify-between mt-3 text-sm">
      <p class="text-gray-500 dark:text-gray-400">
        {{ project.language }}
      </p>
      <span class="flex items-center text-gray-500 dark:text-gray-400">
        <IconStar class="w-4 h-4 mr-1 text-yellow-500 dark:text-yellow-400" />
        {{ project.stars }}
      </span>
    </div>
  </rc-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { Project } from "~/types";

export default Vue.extend({
  props: {
    project: Object as PropType<Project>
  }
});
</script>

<style>
</style>