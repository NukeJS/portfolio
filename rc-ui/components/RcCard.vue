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

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "rc-card",

  props: {
    to: [String, Object],
    nuxt: Boolean,
    exact: Boolean,
    href: [String, Object],
    target: String,
    activeClass: String,
    exactActiveClass: String
  }
});
</script>