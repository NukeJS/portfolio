<template>
  <rc-container class="my-4">
    <h2
      class="sm:mt-2 md:mt-4 text-gray-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none"
    >
      My <span class="text-indigo-600 dark:text-indigo-500">Projects</span>.
    </h2>
    <div
      class="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <rc-card
        v-for="repository in repositories"
        :key="repository.id"
        :href="repository.url"
        target="_blank"
        class="dark:border-gray-700 dark:bg-gray-800 shadow-sm border rounded"
      >
        <div class="px-4 py-3">
          <h3 class="text-gray-900 dark:text-white font-bold text-lg">
            {{ repository.name }}
          </h3>
          <p class="text-gray-500 dark:text-gray-400 mt-2 leading-snug">
            {{ repository.description }}
          </p>

          <div class="flex justify-between text-sm mt-3">
            <p class="text-gray-500 dark:text-gray-400">
              {{ repository.language }}
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
              {{ repository.stars }}
            </span>
          </div>
        </div>
      </rc-card>
    </div>

    <p
      class="text-xl font-bold text-gray-600 dark:text-gray-300"
      v-if="!repositories.length"
    >
      Loading repositories...
    </p>
  </rc-container>
</template>

<script>
import { mapMetaInfo } from "~/utils/helpers";

export default {
  head() {
    return mapMetaInfo({
      title: "Projects",
      description: "An overview of my projects listed on GitHub.",
      path: "/projects"
    });
  },

  data: () => ({
    repositories: []
  }),

  fetchOnServer: false,
  async fetch() {
    const repositories = await this.$axios.$get(
      "https://api.github.com/users/CodingWithNuke/repos"
    );

    this.repositories = repositories
      .filter(repo => !repo.fork && repo.description)
      .map(repository => ({
        id: repository.id,
        name: repository.name,
        url: repository.html_url,
        description: repository.description,
        language: repository.language,
        stars: repository.stargazers_count
      }));
  }
};
</script>