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
export default {
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

  computed: {
    classes() {
      return {
        "inline-flex items-center justify-center focus:outline-none outline-none transition duration-200 ease-in-out": true
      };
    }
  },

  methods: {
    onClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>

<style>
</style>