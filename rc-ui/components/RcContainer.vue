<template>
  <div
    :class="[
      'w-full mx-auto px-4',
      {
        'max-w-screen-lg xl:max-w-screen-xl': !fluid,
        'px-4 sm:px-6 md:px-8': padding,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RcContainer',

  props: {
    fluid: {
      type: Boolean,
    },
    padding: {
      type: Boolean,
      default: true,
    },
  },
})
</script>
