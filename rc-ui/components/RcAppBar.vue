<template>
  <header class="fixed top-0 z-50 w-full h-16">
    <div class="flex items-center h-full">
      <slot></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: "rc-app-bar"
};
</script>