<template>
  <footer class="w-full h-12">
    <div class="flex items-center h-full">
      <slot></slot>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "rc-footer"
});
</script>