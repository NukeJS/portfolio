<template>
  <div class="flex flex-col p-4 bg-white shadow-md rounded-xl">
    <span
      class="font-bold tracking-widest text-indigo-600 uppercase text-xs md:text-sm"
    >
      {{ job.type }}
    </span>
    <h3 class="mt-2 text-lg font-semibold text-gray-800 md:text-xl">
      {{ job.title }}
    </h3>
    <ul class="mt-3 space-y-1 text-gray-500 md:text-lg">
      <li class="flex items-center">
        <IconOfficeBuilding class="w-5 h-5 text-indigo-600" />
        <p class="ml-2">{{ job.company }}</p>
      </li>
      <li class="flex items-center">
        <IconLocationMarker class="w-5 h-5 text-indigo-600" />
        <p class="ml-2">{{ job.place }}</p>
      </li>
      <li class="flex items-center">
        <IconCalendar class="w-5 h-5 text-indigo-600" />
        <p class="ml-2">{{ job.timespan }}</p>
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
