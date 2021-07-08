<template>
  <article class="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <nuxt-content
      :document="page"
      class="dark:prose-dark prose sm:prose md:prose-lg lg:prose-xl mx-auto w-full"
    />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const page = await $content(`blog/${params.slug}`)
      .fetch()
      .catch(err => {
        error({
          statusCode: 404,
          message: `Blog post with slug '${params.slug}' not found.`
        });
      });

    return {
      page
    };
  }
};
</script>