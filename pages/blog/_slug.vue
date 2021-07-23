<template>
  <article class="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="dark:prose-dark prose md:prose-lg lg:prose-xl mx-auto w-full">
      <h1>{{ page.title }}</h1>

      <nuxt-content :document="page" />
    </div>
    <rc-container class="px-0">
      <ArticlePrevNextPosts :prev="prev" :next="next" />
    </rc-container>
  </article>
</template>

<script lang="ts">
import Vue from "vue";

import { mapMetaInfo } from "~/utils/helpers";

import { IContentDocument } from "@nuxt/content/types/content";

export default Vue.extend({
  head(): object {
    return mapMetaInfo({
      title: this.page.title,
      description: this.page.description,
      image: this.page.thumbnail,
      path: `/blog/${this.page.slug}`
    });
  },

  async asyncData({ $content, params, error }) {
    const page = await $content("blog", params.slug)
      .where({ draft: false })
      .fetch()
      .catch(err => {
        error({
          statusCode: 404,
          message: `This article could not be found`
        });
      });

    const [prev, next] = (await $content("blog")
      .where({ draft: false })
      .sortBy("createdAt")
      .surround(params.slug)
      .only(["title", "slug"])
      .fetch()) as IContentDocument[];

    return {
      page,
      prev,
      next
    };
  },

  data: () => ({
    page: {} as IContentDocument
  })
});
</script>