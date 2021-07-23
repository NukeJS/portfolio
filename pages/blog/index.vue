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
import {
  defineComponent,
  useContext,
  useMeta,
  useAsync,
  computed,
  ref
} from "@nuxtjs/composition-api";

import { mapMetaInfo } from "~/utils/helpers";

import { IContentDocument } from "@nuxt/content/types/content";

export default defineComponent({
  head: {},

  // async asyncData({ $content }) {
  //   const articles = await ;

  //   return {
  //     articles
  //   };
  // },

  // data: () => ({
  //   articles: [],
  //   query: ""
  // }),

  // computed: {
  //   filteredArticles() {
  //     return this.articles.filter(
  //       (article: any) =>
  //         article.title.toLowerCase().includes(this.query.toLowerCase()) ||
  //         article.description.toLowerCase().includes(this.query.toLowerCase())
  //     );
  //   }
  // },

  setup() {
    const { $content } = useContext();
    const query = ref<string>("");

    const articles = useAsync(() =>
      $content("blog")
        .where({ draft: false })
        .only(["slug", "title", "thumbnail", "description", "readingTime"])
        .sortBy("createdAt", "desc")
        .fetch()
    );

    const filteredArticles = computed(() => {
      articles.value?.filter(
        (article: any) =>
          article.title.toLowerCase().includes(query.value.toLowerCase()) ||
          article.description.toLowerCase().includes(query.value.toLowerCase())
      );
    });

    useMeta((): object =>
      mapMetaInfo({
        title: "Blog",
        description: "An overview of my blog articles.",
        path: "/blog"
      })
    );

    return {
      filteredArticles,
      query
    };
  }
});
</script>

<style>
</style>