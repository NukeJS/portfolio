<template>
  <rc-container class="my-4">
    <h2
      class="text-3xl font-bold leading-none tracking-tight text-gray-900 sm:mt-2 md:mt-4 dark:text-white sm:text-4xl md:text-5xl"
    >
      My <span class="text-indigo-600 dark:text-indigo-500">Projects</span>.
    </h2>
    <div
      v-if="!$fetchState.pending"
      class="grid grid-cols-1 gap-4 mt-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      <ProjectCard
        v-for="repository in repositories"
        :key="repository.id"
        :project="repository"
      />
    </div>

    <p
      class="mt-6 text-xl font-bold text-gray-600 sm:mt-10 dark:text-gray-300"
      v-if="$fetchState.pending"
    >
      Loading repositories...
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

export default Vue.extend({
  head(): object {
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
      .filter((repo: any) => !repo.fork && repo.description)
      .map((repository: any) => ({
        id: repository.id,
        name: repository.name,
        url: repository.html_url,
        description: repository.description,
        language: repository.language,
        stars: repository.stargazers_count
      }))
      .sort((a: any, b: any) => b.stars - a.stars);
  }
});
</script>