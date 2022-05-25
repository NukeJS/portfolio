<template>
  <div
    :class="[
      'w-full mx-auto px-6',
      {
        'max-w-screen-lg': !fluid,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
/* --------------------------------- Globals -------------------------------- */
defineProps<{
  fluid?: boolean;
}>();
/* -------------------------------------------------------------------------- */
</script>
