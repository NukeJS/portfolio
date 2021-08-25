<template>
  <div>
    <label
      v-if="label"
      class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
      >{{ label }}</label
    >
    <textarea
      v-model="internalValue"
      :placeholder="placeholder"
      :required="required"
      rows="3"
      class="block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 dark:bg-gray-700 sm:text-sm dark:border-gray-600 dark:text-white dark:placeholder-gray-300"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "rc-textarea",

  props: {
    value: String as PropType<string>,
    label: String as PropType<string>,
    placeholder: String as PropType<string>,
    required: Boolean as PropType<boolean>
  },

  data: () => ({
    internalLazyValue: null as null | string
  }),

  computed: {
    internalValue: {
      get(): null | string {
        return this.internalLazyValue;
      },
      set(val: string) {
        this.internalLazyValue = val;
        this.$emit("input", val);
      }
    }
  }
});
</script>
