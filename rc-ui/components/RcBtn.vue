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

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "rc-btn",

  props: {
    type: String as PropType<string>,
    to: [String, Object] as PropType<string | object>,
    nuxt: Boolean as PropType<boolean>,
    exact: Boolean as PropType<boolean>,
    href: String as PropType<string>,
    target: String as PropType<string>,
    activeClass: String as PropType<string>,
    exactActiveClass: String as PropType<string>,
    disabled: Boolean as PropType<boolean>
  },

  computed: {
    classes(): Record<string, boolean> {
      return {
        "inline-flex items-center justify-center focus:outline-none outline-none transition duration-200 ease-in-out cursor-pointer": true
      };
    }
  },

  methods: {
    onClick(event: Event) {
      this.$emit("click", event);
    }
  }
});
</script>