<template>
  <rc-container class="my-6 md:my-8">
    <h2
      class="text-3xl font-bold leading-none tracking-tight text-gray-900 sm:mt-2 md:mt-4 dark:text-white sm:text-4xl md:text-5xl"
    >
      My <span class="text-indigo-600 dark:text-indigo-500">Projects</span>.
    </h2>

    <div
      v-if="!$fetchState.pending && repos.length"
      class="grid grid-cols-1 gap-4 mt-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      <rc-card
        v-for="project in repos"
        :key="project.id"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-900 transition-colors duration-200 dark:text-white hover:text-gray-500 dark:hover:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 mr-1 text-yellow-500 dark:text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            {{ project.stars }}
          </span>
        </div>
      </rc-card>
    </div>

    <p
      class="mt-6 text-xl font-bold text-gray-600 sm:mt-10 dark:text-gray-300"
      v-if="$fetchState.pending"
    >
      Loading projects...
    </p>

    <p
      class="mt-6 text-xl font-bold text-gray-600 sm:mt-10 dark:text-gray-300"
      v-if="$fetchState.error"
    >
      An error occurred whilst trying to load my projects... Try again later.
    </p>

    <p
      class="mt-4 text-lg font-medium text-gray-500 dark:text-gray-300 sm:mt-8"
    >
      Discover more projects on my
      <a
        class="text-indigo-600 dark:text-indigo-400"
        href="https://github.com/CodingWithNuke"
        target="_blank"
        >GitHub</a
      >.
    </p>
  </rc-container>
</template>

<script lang="ts">
import Vue from "vue";

import { mapMetaInfo } from "~/utils/helpers";

interface Project {
  id: number;
  name: string;
  url: string;
  external_url: string | null;
  description: string;
  language: string;
  stars: number;
}

export default Vue.extend({
  head(): object {
    return mapMetaInfo({
      title: "Projects",
      description: "An overview of my projects listed on GitHub.",
      path: "/projects"
    });
  },

  data: () => ({
    repos: [] as Project[]
  }),

  async fetch() {
    this.repos = await this.$axios.$get<Project[]>("/v1/projects");
  },
  fetchOnServer: false
});
</script>