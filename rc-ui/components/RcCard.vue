<template>
  <component
    :is="nuxt ? 'NuxtLink' : to ? 'RouterLink' : href ? 'a' : 'div'"
    :to="to"
    :exact="(to || nuxt) && exact"
    :href="href"
    :target="target"
    :active-class="(to || nuxt) && activeClass"
    :exact-active-class="(to || nuxt) && exactActiveClass"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "rc-card",

  props: {
    to: {
      type: [String, Object]
    },
    nuxt: {
      type: Boolean
    },
    exact: {
      type: Boolean
    },
    href: {
      type: String
    },
    target: {
      type: String
    },
    activeClass: {
      type: String
    },
    exactActiveClass: {
      type: String
    }
  }
});
</script>