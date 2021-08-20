<template>
  <rc-footer class="border-t bg-white dark:bg-gray-900 dark:border-gray-700">
    <rc-container class="flex items-center">
      <p class="text-sm text-gray-700 dark:text-gray-400 font-semibold">
        Copyright {{ new Date().getFullYear() }} &mdash; RonnieCodes
      </p>
    </rc-container>
  </rc-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>