<template>
  <div
    class="px-6 py-4 bg-zinc-800 rounded-xl border border-zinc-100/5 space-y-3"
  >
    <div
      class="text-xs font-bold tracking-widest text-violet-500 uppercase md:text-sm -mb-2"
    >
      {{ education.info }}
    </div>
    <h3 class="text-lg font-semibold text-zinc-50 md:text-xl">
      {{ education.name }}
    </h3>
    <ul class="md:text-lg space-y-1 text-zinc-400">
      <li>
        <AcademicCapIcon class="w-5 h-5 mr-1 text-violet-500 inline -mt-1" />
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
