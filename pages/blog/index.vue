<template>
  <rc-container class="my-4">
    <h2
      class="sm:mt-2 md:mt-4 text-gray-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none"
    >
      My <span class="text-indigo-600 dark:text-indigo-500">Blog</span>.
    </h2>
    <rc-input
      class="mt-6 sm:mt-10"
      v-model="query"
      placeholder="Filter through blog posts..."
    />
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
  </rc-container>
</template>

<script lang="ts">
import Vue from "vue";

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
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles
    };
  },

  data: () => ({
    articles: [],
    query: ""
  }),

  computed: {
    filteredArticles() {
      return this.articles.filter(
        (article: any) =>
          article.title.toLowerCase().includes(this.query.toLowerCase()) ||
          article.description.toLowerCase().includes(this.query.toLowerCase())
      );
    }
  }
});
</script>

<style>
</style>