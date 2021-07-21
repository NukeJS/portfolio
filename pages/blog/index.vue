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
      <rc-card
        v-for="(article, index) in filteredArticles"
        :key="index"
        :to="`/blog/${article.slug}`"
        nuxt
        class="dark:border-gray-700 dark:bg-gray-800 shadow-sm border rounded flex flex-col"
      >
        <div class="aspect-w-16 aspect-h-9 border-b dark:border-gray-700">
          <nuxt-img
            v-if="article.thumbnail"
            :src="article.thumbnail"
            class="object-cover w-full"
          />
        </div>

        <div class="px-4 py-3 flex flex-col flex-grow">
          <h3 class="text-gray-900 dark:text-white font-bold text-lg">
            {{ article.title }}
          </h3>
          <p
            class="text-gray-500 dark:text-gray-400 mt-2 leading-snug flex-grow"
          >
            {{ article.description }}
          </p>
          <p
            class="text-sm text-gray-500 dark:text-gray-300 mt-2 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {{ article.readingTime.text }}
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
    query: ""
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
};
</script>

<style>
</style>