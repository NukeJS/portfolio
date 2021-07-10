<template>
  <main class="flex flex-auto max-w-full relative">
    <slot></slot>
  </main>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "rc-main"
});
</script>