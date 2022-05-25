<template>
  <div v-for="post in posts" :key="post._id">
    {{ post.description }}
    <NuxtLink :to="post._path">
      {{ post.title }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = useAsyncData("blog", () =>
  queryContent("/blog").where({ _draft: false }).find()
);
</script>
