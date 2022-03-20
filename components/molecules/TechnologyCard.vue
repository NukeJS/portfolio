<template>
  <a
    class="px-3 pt-6 pb-4 text-center hover:bg-white hover:shadow-md rounded-xl transition"
    :href="technology.url"
    rel="noopener noreferrer"
    target="_blank"
  >
    <NuxtImg
      class="w-16 h-16 mx-auto"
      :src="`/images/technologies/${technology.image}`"
      :alt="`${technology.name} Logo`"
    />
    <p class="mt-3 text-lg font-semibold text-gray-800 md:text-xl">
      {{ technology.name }}
    </p>
  </a>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Technology {
  name: string
  image: string
  url: string
}

export default Vue.extend({
  props: {
    technology: {
      type: Object as PropType<Technology>,
    },
  },
})
</script>
