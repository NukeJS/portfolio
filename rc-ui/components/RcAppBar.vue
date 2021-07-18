<template>
  <header :class="{ 'top-0 z-50 w-full h-16': true, fixed: fixed }">
    <div class="flex items-center h-full">
      <slot></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: "rc-app-bar",

  props: {
    fixed: Boolean
  }
};
</script>