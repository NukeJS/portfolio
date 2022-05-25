<template>
  <div class="relative space-y-4">
    <div>
      <h3 class="text-xl font-semibold">{{ timeline.title }}</h3>
      <p
        v-if="timeline.description"
        class="text-neutral-500 dark:text-neutral-400"
      >
        {{ timeline.description }}
      </p>
    </div>
    <ul
      class="relative before:content-[''] before:left-2 before:absolute before:bg-neutral-300 dark:before:bg-neutral-600 before:w-0.5 before:h-[calc(100%-8px)] before:bottom-0 before:top-2 space-y-2"
    >
      <li
        v-for="(item, index) in timeline.items"
        :key="index"
        class="flex items-start relative"
      >
        <div class="py-2">
          <div
            :class="[
              'rounded-full h-3 w-3 ml-[0.2rem]',
              index % 2 ? 'bg-pink-500' : 'bg-indigo-500',
            ]"
          ></div>
        </div>
        <div
          class="flex-1 ml-4 text-neutral-500 dark:text-neutral-400 space-y-2 pb-3"
        >
          <div>
            <div
              v-if="item.label"
              class="text-xs font-bold tracking-widest text-pink-600 dark:text-pink-500 uppercase mt-1.5"
            >
              {{ item.label }}
            </div>
            <h4 class="text-lg font-semibold text-neutral-900 dark:text-white">
              {{ item.title }}
            </h4>
            <p>{{ item.timespan }}</p>
          </div>
          <p v-if="item.description" class="mb-4">{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
/* ---------------------------------- Types --------------------------------- */
interface Timeline {
  title: string;
  description?: string;
  items: TimelineItem[];
}

interface TimelineItem {
  label?: string;
  title: string;
  timespan: string;
  description?: string;
}
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
defineProps<{
  timeline: Timeline;
}>();
/* -------------------------------------------------------------------------- */
</script>

<style scoped></style>
