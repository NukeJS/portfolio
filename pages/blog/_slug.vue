<template>
  <article
    v-if="!$fetchState.pending && !$fetchState.error"
    class="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
  >
    <rc-seo
      :title="post.title"
      :description="post.description"
      :image="post.thumbnail"
    />

    <div class="dark:prose-dark prose md:prose-lg lg:prose-xl mx-auto w-full">
      <h1>{{ post.title }}</h1>

      <nuxt-content :document="post" />
    </div>
  </article>
</template>

<script>
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
  useMeta
} from "@nuxtjs/composition-api";

import { mapMetaInfo } from "~/utils/helpers";

export default defineComponent({
  head: {},

  setup() {
    const { params, $content, error } = useContext();

    const post = ref(null);
    const metaData = ref(null);

    useFetch(async () => {
      post.value = await $content(`blog/${params.value.slug}`)
        .where({ draft: false })
        .fetch()
        .catch(() => {
          return error({
            statusCode: 404,
            message: `Blog post with slug '${params.value.slug}' not found.`
          });
        });

      metaData.value = mapMetaInfo({
        title: post.value.title,
        description: post.value.description,
        image: post.value.thumbnail,
        path: `/blog/${post.value.slug}`
      });
    });

    useMeta(() => ({
      ...metaData.value
    }));

    return {
      post
    };
  }
});
</script>