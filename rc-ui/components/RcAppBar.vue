<template>
  <header :class="{ 'top-0 z-50 w-full h-16': true, fixed: fixed }">
    <div class="flex items-center h-full">
      <slot></slot>
    </div>
  </header>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "rc-app-bar",

  props: {
    fixed: Boolean as PropType<boolean>
  }
});
</script>