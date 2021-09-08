<template>
  <rc-card
    class="flex items-center px-3 py-3 space-x-4 bg-white border rounded shadow-sm dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="flex items-center justify-center flex-none w-14 h-14">
      <nuxt-img :src="skill.image" :alt="`${skill.name} Logo`" />
    </div>
    <h3 class="text-lg font-bold text-gray-900 dark:text-white">
      {{ skill.name }}
    </h3>
  </rc-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { Skill } from "~/types";

export default Vue.extend({
  props: {
    skill: Object as PropType<Skill>
  }
});
</script>

<style>
</style>