<template>
  <div class="flex flex-col p-4 bg-white shadow-md rounded-xl">
    <span class="text-xs font-bold tracking-widest text-indigo-600 uppercase">
      {{ job.type }}
    </span>
    <h3 class="mt-2 text-lg font-semibold text-gray-800">{{ job.title }}</h3>
    <ul class="mt-3 space-y-1 text-sm text-gray-500">
      <li class="flex items-center">
        <IconOfficeBuilding class="w-4 h-4 text-indigo-600" />
        <p class="ml-1">{{ job.company }}</p>
      </li>
      <li class="flex items-center">
        <IconLocationMarker class="w-4 h-4 text-indigo-600" />
        <p class="ml-1">{{ job.place }}</p>
      </li>
      <li class="flex items-center">
        <IconCalendar class="w-4 h-4 text-indigo-600" />
        <p class="ml-1">{{ job.timespan }}</p>
      </li>
    </ul>
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
