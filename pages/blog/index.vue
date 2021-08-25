<template>
  <rc-container class="my-6 md:my-8">
    <h2
      class="text-3xl font-bold leading-none tracking-tight text-gray-900 sm:mt-2 md:mt-4 dark:text-white sm:text-4xl md:text-5xl"
    >
      My <span class="text-indigo-600 dark:text-indigo-500">Blog</span>.
    </h2>
    <rc-input
      class="mt-6 sm:mt-10"
      v-model="query"
      placeholder="Search through blog posts..."
    />
    <div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
      <ArticleCard
        v-for="(article, index) in filteredArticles"
        :key="index"
        :article="article"
      />
    </div>

    <p
      class="mt-4 text-xl font-bold text-gray-700 dark:text-gray-300"
      v-if="!articles.length"
    >
      No articles to display.
    </p>

    <p
      class="mt-4 text-xl font-bold text-gray-700 dark:text-gray-300"
      v-if="articles.length && !filteredArticles.length"
    >
      No articles found with search query "{{ query }}".
    </p>
  </rc-container>
</template>

<script lang="ts">
import Vue from "vue";

import { IContentDocument } from "@nuxt/content/types/content";

import { mapMetaInfo } from "~/utils/helpers";

export default Vue.extend({
  head(): object {
    return mapMetaInfo({
      title: "Blog",
      description: "An overview of my blog articles.",
      path: "/blog"
    });
  },

  async asyncData({ $content }) {
    const articles = await $content("blog")
      .where({ draft: false })
      .only(["slug", "title", "thumbnail", "description", "readingTime"])
      .sortBy("date", "desc")
      .fetch();

    return {
      articles
    };
  },

  data: () => ({
    query: "",
    articles: [] as IContentDocument[]
  }),

  computed: {
    filteredArticles() {
      return this.articles.filter(
        article =>
          article.title.toLowerCase().includes(this.query.toLowerCase()) ||
          article.description.toLowerCase().includes(this.query.toLowerCase())
      );
    }
  }
});
</script>

<style>
</style>