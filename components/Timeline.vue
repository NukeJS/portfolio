<template>
  <ol class="relative space-y-10 border-l border-zinc-700">
    <li v-for="(item, index) in items" :key="index" class="ml-4">
      <div
        class="absolute -left-1.5 mt-2.5 h-3 w-3 rounded-full border border-zinc-900 bg-zinc-600"
      />
      <div>
        <time class="text-sm leading-none sm:text-base">
          {{ item.timespan }}
        </time>
        <div
          v-if="item.label"
          class="text-xs font-bold uppercase tracking-widest text-pink-500 sm:text-sm"
        >
          {{ item.label }}
        </div>
        <h3 class="text-xl font-semibold text-zinc-100 sm:text-2xl">
          {{ item.title }}
        </h3>
        <p v-if="item.subtitle" class="text-base sm:text-lg">
          {{ item.subtitle }}
        </p>
      </div>
      <p v-if="item.description" class="mt-4 mb-4 text-lg sm:text-xl">
        {{ item.description }}
      </p>
    </li>
  </ol>
</template>

<script setup lang="ts">
/* ---------------------------------- Types --------------------------------- */
interface TimelineItem {
  label?: string
  title: string
  subtitle?: string
  timespan: string
  description?: string
}
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
defineProps<{
  items: TimelineItem[]
}>()
/* -------------------------------------------------------------------------- */
</script>

<style scoped></style>
