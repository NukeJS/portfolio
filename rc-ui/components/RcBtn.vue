<template>
  <component
    :type="type"
    :is="nuxt ? 'NuxtLink' : to ? 'RouterLink' : href ? 'a' : 'button'"
    :to="to"
    :exact="(to || nuxt) && exact"
    :href="href"
    :target="target"
    :class="classes"
    :active-class="(to || nuxt) && activeClass"
    :exact-active-class="(to || nuxt) && exactActiveClass"
    :disabled="disabled"
    v-on="{ click: onClick }"
  >
    <slot></slot>
  </component>
</template>

<script>
import { defineComponent, computed } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "rc-btn",

  props: {
    type: String,
    to: [String, Object],
    nuxt: Boolean,
    exact: Boolean,
    href: [String, Object],
    target: String,
    activeClass: String,
    exactActiveClass: String,
    disabled: Boolean
  },

  setup(props, { emit }) {
    const classes = computed(() => ({
      "inline-flex items-center justify-center focus:outline-none outline-none transition-all duration-200 ease-in-out": true
    }));

    function onClick(e) {
      emit("click", e);
    }

    return {
      classes,
      onClick
    };
  }
});
</script>

<style>
</style>