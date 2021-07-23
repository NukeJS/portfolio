<template>
  <rc-card
    class="bg-white dark:border-gray-700 dark:bg-gray-800 flex items-start space-x-4 px-3 py-3  shadow-sm border rounded"
  >
    <div class="w-14 h-14 flex-none flex items-center justify-center">
      <nuxt-img :src="skill.image" :alt="`${skill.name} Logo`" />
    </div>
    <div class="flex-auto">
      <h3
        class="text-gray-900 dark:text-white font-bold text-lg"
        v-text="skill.name"
      ></h3>
      <p
        class="text-gray-500 dark:text-gray-400 mt-2 leading-snug"
        v-text="skill.description"
      ></p>
    </div>
  </rc-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    skill: Object as PropType<object>
  }
});
</script>