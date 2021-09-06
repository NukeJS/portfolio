<template>
  <div :class="['code-block', { 'code-block--active': active }]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    active: Boolean
  }
};
</script>

<style lang="scss">
.code-block {
  @apply hidden;

  &--active {
    @apply block;
  }
}
</style>
