<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="close">
      <div class="fixed inset-0 z-[9999] overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="fixed inset-0 bg-black/40 dark:bg-neutral-700/40"
            />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 translate-y-4"
            enter-to="opacity-100 translate-y-0"
            leave="duration-200 ease-in"
            leave-from="opacity-100 translate-y-0"
            leave-to="opacity-0 translate-y-4"
          >
            <div
              :class="[
                'my-8 inline-block w-full transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 p-6 text-left align-middle shadow-xl transition-all',
                {
                  'max-w-xs': size === 'xs',
                  'max-w-sm': size === 'sm',
                  'max-w-md': size === 'md',
                  'max-w-lg': size === 'lg',
                  'max-w-xl': size === 'xl',
                  'max-w-2xl': size === '2xl',
                  'max-w-3xl': size === '3xl',
                  'max-w-4xl': size === '4xl',
                  'max-w-5xl': size === '5xl',
                  'max-w-6xl': size === '6xl',
                  'max-w-7xl': size === '7xl',
                },
              ]"
            >
              <DialogTitle
                v-if="title"
                as="h3"
                class="text-xl font-semibold leading-6 text-neutral-900 dark:text-white mb-3"
              >
                {{ title }}
              </DialogTitle>

              <slot v-bind="{ close }" />
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import { computed } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    title?: string;
    size?:
      | "xs"
      | "sm"
      | "md"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "6xl"
      | "7xl";
  }>(),
  {
    size: "md",
  }
);

const emit = defineEmits<{
  (_e: "update:modelValue", _value: boolean): void;
  (_e: "close"): void;
}>();
/* -------------------------------------------------------------------------- */

/* ---------------------------------- Modal --------------------------------- */
const isOpen = computed({
  get: () => props.modelValue ?? false,
  set: (value: boolean) => emit("update:modelValue", value),
});

const close = () => {
  isOpen.value = false;
  emit("close");
};
/* -------------------------------------------------------------------------- */

/* --------------------------------- Expose --------------------------------- */
defineExpose({
  isOpen,
});
/* -------------------------------------------------------------------------- */
</script>
