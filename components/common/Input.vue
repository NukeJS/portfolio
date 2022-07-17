<template>
  <div>
    <label
      v-if="label"
      class="mb-1 block text-sm font-medium text-zinc-300"
      v-text="label"
    />
    <div
      class="flex w-full cursor-text items-center rounded-md border border-zinc-600 bg-zinc-800 px-3 py-2 shadow-sm focus-within:border-pink-500 focus-within:outline-none focus-within:ring focus-within:ring-pink-400/50"
      @click.self="focusInputElement"
    >
      <div v-if="slots['prepend-inner']" class="pointer-events-none">
        <slot name="prepend-inner" />
      </div>
      <input
        ref="inputElement"
        v-bind="{
          value: modelValue,
          type,
          required,
          placeholder,
          disabled
        }"
        :class="[
          'flex-1 bg-transparent text-zinc-200 placeholder:text-zinc-500 focus:outline-none',
          {
            'pl-2': !!slots['prepend-inner'],
            'pr-2': !!slots['append-inner']
          }
        ]"
        @input="onInput"
      />
      <div v-if="slots['append-inner']" class="pointer-events-none">
        <slot name="append-inner" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* --------------------------------- Globals -------------------------------- */
withDefaults(
  defineProps<{
    type?: string
    modelValue: string | number | null | undefined
    label?: string
    required?: boolean
    placeholder?: string
    disabled?: boolean
  }>(),
  {
    type: undefined,
    label: undefined,
    placeholder: undefined
  }
)

const emit = defineEmits<{
  (_e: 'update:modelValue', _v: string | number | null | undefined): void
}>()

const slots = useSlots()
/* -------------------------------------------------------------------------- */

/* --------------------------------- Events --------------------------------- */
const onInput = (e: Event) =>
  emit('update:modelValue', (e.target as HTMLInputElement).value)
/* -------------------------------------------------------------------------- */

/* ---------------------------------- Input --------------------------------- */
const inputElement = ref<HTMLInputElement>(null)

const focusInputElement = () => inputElement.value.focus()
/* -------------------------------------------------------------------------- */
</script>
