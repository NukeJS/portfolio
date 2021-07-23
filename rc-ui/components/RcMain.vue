<template>
  <main class="flex flex-auto max-w-full relative">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "rc-main"
});
</script>