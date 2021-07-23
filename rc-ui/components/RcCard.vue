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
    to: [String, Object] as PropType<string | object>,
    nuxt: Boolean as PropType<boolean>,
    exact: Boolean as PropType<boolean>,
    href: [String, Object] as PropType<string | object>,
    target: String as PropType<string>,
    activeClass: String as PropType<string>,
    exactActiveClass: String as PropType<string>
  }
});
</script>