<template>
  <rc-container class="mt-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <rc-card
        v-for="(post, index) in posts"
        :key="index"
        :to="`/blog/${post.slug}`"
        nuxt
        class="dark:border-gray-700 dark:bg-gray-800 shadow-lg border rounded"
      >
        <nuxt-img
          v-if="post.thumbnail"
          :src="post.thumbnail"
          class="h-36 md:h-48 object-cover w-full"
        />
        <div class="px-4 py-3">
          <h3 class="text-gray-900 dark:text-white font-bold text-lg">
            {{ post.title }}
          </h3>
          <p class="text-gray-500 dark:text-gray-400 mt-2 leading-snug">
            {{ post.description }}
          </p>
        </div>
      </rc-card>

      <p
        class="text-xl font-bold text-gray-700 dark:text-gray-300"
        v-if="!posts.length"
      >
        Blog posts coming soon...
      </p>
    </div>
  </rc-container>
</template>

<script>
export default {
  head: {
    title: "Blog"
  },

  async asyncData({ $content }) {
    const posts = await $content("blog")
      .where({ draft: false })
      .only(["slug", "title", "thumbnail", "description"])
      .fetch();

    return {
      posts
    };
  }
};
</script>

<style>
</style>