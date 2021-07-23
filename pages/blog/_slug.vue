<template>
  <article class="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="dark:prose-dark prose md:prose-lg lg:prose-xl mx-auto w-full">
      <h1>{{ article.title }}</h1>

      <nuxt-content :document="article" />
    </div>
  </article>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  useStatic,
  Ref,
  useMeta,
  computed
} from "@nuxtjs/composition-api";

import { mapMetaInfo } from "~/utils/helpers";

import { IContentDocument } from "@nuxt/content/types/content";

export default defineComponent({
  head: {},

  setup() {
    const { params, $content, error } = useContext();
    const slug = computed(() => params.value.slug);

    const article = useStatic(
      slug =>
        $content("blog", slug)
          .where({ draft: false })
          .fetch()
          .catch(err => {
            error({
              statusCode: 404,
              message: `This article could not be found`
            });
          }) as Promise<IContentDocument>,
      slug,
      "article"
    );

    useMeta((): object =>
      mapMetaInfo({
        title: article.value?.title,
        description: article.value?.description,
        image: article.value?.thumbnail,
        path: `/blog/${article.value?.slug}`
      })
    );

    return {
      article
    };
  }
});
</script>