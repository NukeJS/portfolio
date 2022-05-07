<template>
  <div
    class="px-6 py-4 border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded-xl space-y-3"
  >
    <div
      class="text-xs font-bold tracking-widest text-violet-600 dark:text-violet-500 uppercase md:text-sm -mb-2"
    >
      {{ education.info }}
    </div>
    <h3 class="text-lg font-semibold dark:text-white text-gray-900 md:text-xl">
      {{ education.name }}
    </h3>
    <ul class="md:text-lg space-y-1 text-zinc-500 dark:text-zinc-400">
      <li>
        <AcademicCapIcon
          class="w-5 h-5 mr-1 text-violet-600 dark:text-violet-500 inline -mt-1"
        />
        {{ education.institution }}
      </li>
      <li>
        <LocationMarkerIcon class="w-5 h-5 mr-1 text-violet-500 inline -mt-1" />
        {{ education.place }}
      </li>
      <li>
        <CalendarIcon class="w-5 h-5 mr-1 text-violet-500 inline -mt-1" />
        {{ education.timespan }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import {
  AcademicCapIcon,
  LocationMarkerIcon,
  CalendarIcon,
} from "@heroicons/vue/solid";
import type { Education } from "~/types";
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
defineProps<{
  education: Education;
}>();
/* -------------------------------------------------------------------------- */
</script>
