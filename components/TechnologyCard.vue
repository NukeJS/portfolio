<template>
  <div class="flex flex-col items-center p-3 bg-gray-800 rounded-md shadow-lg">
    <NuxtImg
      class="w-16 h-16"
      :src="`/images/technologies/${technology.image}`"
      :alt="`${technology.name} Logo`"
    />
    <p class="mt-2 text-lg font-semibold text-white">
      {{ technology.name }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Technology {
  name: string
  image: string
}

export default Vue.extend({
  props: {
    technology: {
      type: Object as PropType<Technology>,
    },
  },
})
</script>

<style scoped></style>
