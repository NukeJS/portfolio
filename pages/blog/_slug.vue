<template>
  <article class="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="dark:prose-dark prose md:prose-lg lg:prose-xl mx-auto w-full">
      <h1>{{ article.title }}</h1>

      <nuxt-content :document="article" />
    </div>
    <rc-container class="px-0">
      <ArticlePrevNextPosts
        :prev="prevNextArticle[0]"
        :next="prevNextArticle[1]"
      />
    </rc-container>
  </article>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  useAsync,
  Ref,
  useMeta
} from "@nuxtjs/composition-api";

import { mapMetaInfo } from "~/utils/helpers";

import { IContentDocument } from "@nuxt/content/types/content";

export default defineComponent({
  head: {},

  // async asyncData({ $content, params, error }) {
  //   const [prev, next] = (await ) as IContentDocument[];

  //   return {
  //     page,
  //     prev,
  //     next
  //   };
  // },

  // data: () => ({
  //   page: {} as IContentDocument
  // }),

  setup() {
    const { params, $content, error } = useContext();

    const article = useAsync(() =>
      $content("blog", params.value.slug)
        .where({ draft: false })
        .fetch()
        .catch(err => {
          error({
            statusCode: 404,
            message: `This article could not be found`
          });
        })
    ) as Ref<IContentDocument>;

    const prevNextArticle = useAsync(() =>
      $content("blog")
        .where({ draft: false })
        .sortBy("createdAt")
        .surround(params.value.slug)
        .only(["title", "slug"])
        .fetch()
    );

    useMeta((): object =>
      mapMetaInfo({
        title: article.value.title,
        description: article.value.description,
        image: article.value.thumbnail,
        path: `/blog/${article.value.slug}`
      })
    );

    return {
      article,
      prevNextArticle
    };
  }
});
</script>