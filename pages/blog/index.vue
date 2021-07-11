<template>
  <rc-container class="mt-4">
    <rc-input v-model="query" placeholder="Filter through blog posts..." />
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <rc-card
        v-for="(article, index) in filteredArticles"
        :key="index"
        :to="`/blog/${article.slug}`"
        nuxt
        class="dark:border-gray-700 dark:bg-gray-800 shadow-lg border rounded"
      >
        <div class="aspect-w-16 aspect-h-9 border-b dark:border-gray-700">
          <nuxt-img
            v-if="article.thumbnail"
            :src="article.thumbnail"
            class="object-cover w-full"
          />
        </div>

        <div class="px-4 py-3">
          <h3 class="text-gray-900 dark:text-white font-bold text-lg">
            {{ article.title }}
          </h3>
          <p class="text-gray-500 dark:text-gray-400 mt-2 leading-snug">
            {{ article.description }}
          </p>
        </div>
      </rc-card>

      <p
        class="text-xl font-bold text-gray-700 dark:text-gray-300"
        v-if="!articles.length"
      >
        Articles coming soon...
      </p>
    </div>
  </rc-container>
</template>

<script>
import { mapMetaInfo } from "~/utils/helpers";

export default {
  head() {
    return mapMetaInfo({
      title: "Blog",
      description: "An overview of my blog posts.",
      path: "/blog"
    });
  },

  async asyncData({ $content }) {
    const articles = await $content("articles")
      .where({ draft: false })
      .only(["slug", "title", "thumbnail", "description"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles
    };
  },

  data: () => ({
    query: ""
  }),

  computed: {
    filteredArticles() {
      return this.articles.filter(article =>
        article.title.toLowerCase().includes(this.query.toLowerCase())
      );
    }
  }
};
</script>

<style>
</style>