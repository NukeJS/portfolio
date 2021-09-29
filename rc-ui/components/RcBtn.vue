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
    type: {
      type: String
    },
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
    },
    disabled: {
      type: Boolean
    }
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