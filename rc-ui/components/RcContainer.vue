<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "rc-container",

  props: {
    fluid: Boolean
  },

  computed: {
    classes() {
      return {
        "max-w-screen-lg xl:max-w-screen-xl": !this.fluid,
        "w-full mx-auto px-4 sm:px-6 md:px-8": true
      };
    }
  }
};
</script>