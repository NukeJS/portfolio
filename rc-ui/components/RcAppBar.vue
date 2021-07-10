<template>
  <header class="fixed top-0 z-50 w-full h-16">
    <div class="flex items-center h-full">
      <slot></slot>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "rc-app-bar"
});
</script>