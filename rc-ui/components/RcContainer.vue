<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "rc-container",

  props: {
    fluid: Boolean,
    padless: Boolean
  },

  computed: {
    classes() {
      return {
        "max-w-screen-lg xl:max-w-screen-xl": !this.fluid,
        "px-4 sm:px-6 md:px-8": !this.padless,
        "w-full mx-auto ": true
      };
    }
  }
};
</script>