<template>
  <main class="relative flex flex-auto max-w-full">
    <slot />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RcMain',
})
</script>