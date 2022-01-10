<template>
  <div class="flex flex-col p-4 bg-white shadow-md rounded-xl">
    <h3 class="text-lg font-semibold text-gray-800">{{ education.name }}</h3>
    <div class="mt-3 space-y-1 text-sm text-gray-500">
      <div v-if="education.info" class="flex items-center">
        <IconInformationCircle class="w-4 h-4 text-indigo-600" />
        <p class="ml-1">{{ education.info }}</p>
      </div>
      <div class="flex items-center">
        <IconAcademicCap class="w-4 h-4 text-indigo-600" />
        <p class="ml-1">{{ education.institution }}</p>
      </div>
      <div class="flex items-center">
        <IconLocationMarker class="w-4 h-4 text-indigo-600" />
        <p class="ml-1">{{ education.place }}</p>
      </div>
      <div class="flex items-center">
        <IconCalendar class="w-4 h-4 text-indigo-600" />
        <p class="ml-1">{{ education.timespan }}</p>
      </div>
    </div>
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
