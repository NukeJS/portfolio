<template>
  <article class="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="dark:prose-dark prose md:prose-lg lg:prose-xl mx-auto w-full">
      <h1>{{ page.title }}</h1>

      <p>{{ page.description }}</p>

      <nuxt-img
        v-if="page.thumbnail"
        :src="page.thumbnail"
        class="rounded-md md:rounded-xl object-cover w-full border dark:border-transparent shadow-md lg:shadow-xl"
      />

      <nuxt-content :document="page" />
    </div>
    <!-- <rc-container class="px-0">
      <ArticlePrevNextPosts :prev="prev" :next="next" />
    </rc-container> -->
  </article>
</template>

<script lang="ts">
import Vue from "vue";

import { IContentDocument } from "@nuxt/content/types/content";

import { mapMetaInfo } from "~/utils/helpers";

export default Vue.extend({
  head(): object {
    return mapMetaInfo({
      title: this.page.title,
      description: this.page.description,
      keywords: this.page.keywords,
      image: this.page.thumbnail,
      path: `/blog/${this.page.slug}`
    });
  },

  data: () => ({
    page: {} as IContentDocument
  }),

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

    // const [prev, next] = (await $content("blog")
    //   .where({ draft: false })
    //   .sortBy("date")
    //   .surround(params.slug)
    //   .only(["title", "slug"])
    //   .fetch()) as IContentDocument[];

    return {
      page
      // prev,
      // next
    };
  }
});
</script>