<template>
  <div class="flex flex-col min-h-screen max-w-full relative antialiased">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "rc-app"
});
</script>