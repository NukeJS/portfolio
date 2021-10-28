<template>
  <component
    :is="nuxt ? 'NuxtLink' : to ? 'RouterLink' : href ? 'a' : 'button'"
    :type="type"
    :to="to"
    :exact="(to || nuxt) && exact"
    :href="href"
    :target="target"
    :active-class="(to || nuxt) && activeClass"
    :exact-active-class="(to || nuxt) && exactActiveClass"
    :disabled="disabled"
    :class="[
      'text-lg font-medium border border-transparent rounded-md outline-none  sm:text-xl ring-offset-2 ring-offset-gray-900 focus:ring',
      { 'px-5 py-3': padding },
      { 'bg-indigo-500 ring-indigo-500 text-white': color === 'indigo' },
    ]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    type: {
      type: String,
      default: 'button',
    },
    to: {
      type: [String, Object],
    },
    nuxt: {
      type: Boolean,
    },
    exact: {
      type: Boolean,
    },
    href: {
      type: String,
    },
    target: {
      type: String,
    },
    activeClass: {
      type: String,
    },
    exactActiveClass: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    color: {
      type: String,
      default: 'indigo',
      validator: (value: string) => ['indigo'].includes(value),
    },
    padding: {
      type: Boolean,
      default: true,
    },
  },
})
</script>