<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, computed } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "rc-container",

  props: {
    fluid: Boolean
  },

  setup(props) {
    const classes = computed(() => ({
      "max-w-screen-lg xl:max-w-screen-xl": !props.fluid,
      "w-full mx-auto px-4 sm:px-6 md:px-8": true
    }));

    return {
      classes
    };
  }
});
</script>