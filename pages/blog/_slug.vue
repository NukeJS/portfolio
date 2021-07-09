<template>
  <article class="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <rc-seo
      :title="page.title"
      :description="page.description"
      :image="page.thumbnail"
    />

    <div class="dark:prose-dark prose md:prose-lg lg:prose-xl mx-auto w-full">
      <h1>{{ page.title }}</h1>

      <nuxt-content :document="page" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const page = await $content(`blog/${params.slug}`)
      .where({ draft: false })
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