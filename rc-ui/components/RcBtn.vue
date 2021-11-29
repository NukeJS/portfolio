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
    v-on="{ click }"
    :class="[
      'text-lg font-medium border outline-none  sm:text-xl transition-colors duration-200',
      {
        'px-5 py-3': padding,
        'border-transparent': !border,
        'ring-offset-2 focus:ring ring-offset-gray-900': ring,
        'cursor-pointer': !disabled,
        'rounded-md': !rounded,
        'rounded-full': rounded,
      },
      {
        'bg-indigo-600 ring-indigo-600 text-white hover:bg-indigo-500':
          color === 'indigo',
      },
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
      validator: (value: string) => ['indigo'].includes(value),
    },
    padding: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
    },
    ring: {
      type: Boolean,
      default: true,
    },
    rounded: {
      type: Boolean,
    },
  },

  methods: {
    click() {
      this.$emit('click')
    },
  },
})
</script>
