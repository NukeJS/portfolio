<template>
  <div class="relative flex flex-col max-w-full min-h-screen antialiased">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RcApp',
})
</script>