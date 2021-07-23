<template>
  <div class="flex flex-col min-h-screen max-w-full relative antialiased">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "rc-app"
});
</script>