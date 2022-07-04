<template>
  <div
    :class="[
      'mx-auto w-full px-6',
      {
        'max-w-screen-lg': !fluid
      }
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
/* --------------------------------- Globals -------------------------------- */
defineProps<{
  fluid?: boolean
}>()
/* -------------------------------------------------------------------------- */
</script>
