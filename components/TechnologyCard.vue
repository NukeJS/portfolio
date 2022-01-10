<template>
  <div
    class="flex flex-col items-center px-3 pt-6 pb-4 bg-white rounded shadow-md"
  >
    <NuxtImg
      class="w-16 h-16"
      :src="`/images/technologies/${technology.image}`"
      :alt="`${technology.name} Logo`"
    />
    <p class="mt-3 text-lg font-semibold text-gray-800">
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
