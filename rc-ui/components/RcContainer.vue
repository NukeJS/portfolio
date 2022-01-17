<template>
  <div
    :class="[
      'w-full mx-auto px-4',
      {
        'max-w-screen-lg xl:max-w-screen-xl': !fluid,
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
  },
})
</script>
