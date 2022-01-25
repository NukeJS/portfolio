<template>
  <div class="p-4 bg-white shadow-md rounded-xl">
    <h3 class="text-lg font-semibold text-gray-800 md:text-xl">
      {{ education.name }}
    </h3>
    <ul class="mt-3 space-y-1 text-gray-500 md:text-lg">
      <li v-if="education.info" class="flex items-center">
        <IconInformationCircle class="w-5 h-5 text-indigo-600" />
        <p class="ml-2">{{ education.info }}</p>
      </li>
      <li class="flex items-center">
        <IconAcademicCap class="w-5 h-5 text-indigo-600" />
        <p class="ml-2">{{ education.institution }}</p>
      </li>
      <li class="flex items-center">
        <IconLocationMarker class="w-5 h-5 text-indigo-600" />
        <p class="ml-2">{{ education.place }}</p>
      </li>
      <li class="flex items-center">
        <IconCalendar class="w-5 h-5 text-indigo-600" />
        <p class="ml-2">{{ education.timespan }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Education {
  name: string
  info?: string
  institution: string
  place: string
  timespan: string
}

export default Vue.extend({
  props: {
    education: {
      type: Object as PropType<Education>,
    },
  },
})
</script>
