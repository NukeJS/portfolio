<template>
  <div class="flex flex-col p-3 space-y-2 bg-gray-800 rounded-md shadow-lg">
    <div class="space-y-1">
      <h6 class="text-xs font-bold text-indigo-400 uppercase">
        {{ job.type }}
      </h6>
      <h3 class="text-lg font-semibold text-white">{{ job.title }}</h3>
    </div>
    <div class="space-y-1 text-sm text-gray-400">
      <div class="flex items-center">
        <IconOfficeBuilding class="w-4 h-4" />
        <p class="ml-1">{{ job.company }}</p>
      </div>
      <div class="flex items-center">
        <IconLocationMarker class="w-4 h-4" />
        <p class="ml-1">{{ job.place }}</p>
      </div>
      <div class="flex items-center">
        <IconCalendar class="w-4 h-4" />
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

<style scoped></style>
