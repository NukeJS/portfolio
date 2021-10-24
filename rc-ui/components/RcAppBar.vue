<template>
  <div :class="['top-0 z-50 w-full h-16', { fixed: fixed }]">
    <div class="flex items-center h-full">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RcAppBar',

  props: {
    fixed: {
      type: Boolean,
    },
  },
})
</script>