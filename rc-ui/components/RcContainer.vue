<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "rc-container",

  props: {
    fluid: Boolean as PropType<boolean>,
    padless: Boolean as PropType<boolean>
  },

  computed: {
    classes(): Record<string, boolean> {
      return {
        "max-w-screen-lg xl:max-w-screen-xl": !this.fluid,
        "px-4 sm:px-6 md:px-8": !this.padless,
        "w-full mx-auto": true
      };
    }
  }
});
</script>