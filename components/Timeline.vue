<template>
  <ol
    class="relative space-y-10 before:absolute before:border-l before:border-zinc-700 before:h-full before:left-[calc(theme(spacing.3)/2)] before:-translate-x-1/2 before:-z-[1]"
  >
    <li
      v-for="(item, index) in items"
      :key="index"
      class="grid col-span-full grid-cols-[auto_1fr] gap-x-3 before:rounded-full before:w-3 before:aspect-square before:border before:self-center before:border-zinc-900 before:bg-zinc-600 *:col-start-2"
    >
      <time class="text-sm">
        {{ item.timespan }}
      </time>
      <span
        v-if="item.label"
        class="text-h6 font-bold uppercase tracking-widest text-pink-500"
      >
        {{ item.label }}
      </span>
      <h3 class="text-zinc-100">
        {{ item.title }}
      </h3>
      <p v-if="item.subtitle" class="text-sm">
        {{ item.subtitle }}
      </p>
      <p
        v-if="item.description"
        class="mt-4 text-body"
        v-text="item.description"
      ></p>
    </li>
  </ol>
</template>

<script setup lang="ts">
interface TimelineItem {
  label?: string;
  title: string;
  subtitle?: string;
  timespan: string;
  description?: string;
}

defineProps<{
  items: TimelineItem[];
}>();
</script>
