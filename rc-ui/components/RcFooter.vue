<template>
  <footer class="w-full">
    <div class="flex items-center h-full">
      <slot></slot>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "rc-footer"
});
</script>