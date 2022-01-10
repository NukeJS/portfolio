<template>
  <div class="flex flex-col p-3 bg-white rounded shadow-md">
    <span class="text-xs font-bold tracking-widest text-indigo-600 uppercase">
      {{ job.type }}
    </span>
    <h3 class="mt-2 text-lg font-semibold text-gray-800">{{ job.title }}</h3>
    <div class="mt-3 space-y-1 text-sm text-gray-500">
      <div class="flex items-center">
        <IconOfficeBuilding class="w-4 h-4 text-indigo-600" />
        <p class="ml-1">{{ job.company }}</p>
      </div>
      <div class="flex items-center">
        <IconLocationMarker class="w-4 h-4 text-indigo-600" />
        <p class="ml-1">{{ job.place }}</p>
      </div>
      <div class="flex items-center">
        <IconCalendar class="w-4 h-4 text-indigo-600" />
        <p class="ml-1">{{ job.timespan }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Job {
  type: string
  title: string
  company: string
  place: string
  timespan: string
}

export default Vue.extend({
  props: {
    job: {
      type: Object as PropType<Job>,
    },
  },
})
</script>
