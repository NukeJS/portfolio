<template>
  <article class="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div
      class="w-full max-w-screen-md mx-auto prose dark:prose-dark md:prose-lg lg:prose-xl"
    >
      <h1>{{ page.title }}</h1>

      <p>{{ page.description }}</p>

      <nuxt-img
        v-if="page.thumbnail"
        :src="page.thumbnail"
        preset="blog"
        class="object-cover w-full border rounded-md shadow-md md:rounded-xl dark:border-transparent lg:shadow-xl"
      ></nuxt-img>

      <nuxt-content :document="page" />
    </div>
    <div class="max-w-screen-md mx-auto mt-10">
      <ArticlePrevNext :prev="prev" :next="next" />
    </div>
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
      path: `/blog/${this.page.slug}`,
      type: "article"
    });
  },

  data: () => ({
    page: {} as IContentDocument,
    prev: {} as IContentDocument,
    next: {} as IContentDocument
  }),

  async asyncData({ $content, params, error }) {
    const page = await $content("blog", params.slug)
      .where({ draft: false })
      .fetch()
      .catch(() => {
        error({
          statusCode: 404,
          message: `This article could not be found`
        });
      });

    const [prev, next] = (await $content("blog")
      .where({ draft: false })
      .sortBy("date")
      .surround(params.slug)
      .only(["title", "slug"])
      .fetch()) as IContentDocument[];

    return {
      page,
      prev,
      next
    };
  }
});
</script>

<style lang="scss">
html {
  scroll-padding-top: 6rem;
}

.nuxt-content {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      @apply no-underline mr-2;
    }
  }

  .icon.icon-link {
    &::before {
      content: "#";
    }
  }
}
</style>