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
      'text-lg font-medium border outline-none sm:text-xl transition-all duration-200 inline-flex items-center',
      {
        'px-6 py-4': padding,
        'border-transparent': !border,
        'focus:ring': ring,
        'cursor-pointer': !disabled,
        'rounded-lg': !rounded,
        'rounded-full': rounded,
      },
      {
        'bg-indigo-600 ring-indigo-600 text-white hover:bg-indigo-500':
          color === 'indigo',
        'bg-pink-600 ring-pink-600 text-white hover:bg-pink-500':
          color === 'pink',
        'bg-white ring-gray-400 text-gray-800 hover:bg-gray-300':
          color === 'white',
        'bg-gray-900 ring-gray-600 text-gray-50 hover:bg-gray-800':
          color === 'black',
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
      validator: (value: string) =>
        ['indigo', 'pink', 'white', 'black'].includes(value),
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
