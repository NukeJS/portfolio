<template>
  <component :is="as" class="px-6">
    <div class="max-w-screen-lg mx-auto">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    fluid?: boolean;
    as?: keyof HTMLElementTagNameMap;
  }>(),
  { as: 'div' }
);
</script>
