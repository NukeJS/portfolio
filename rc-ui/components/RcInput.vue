<template>
  <div>
    <label
      v-if="label"
      class="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300"
      >{{ label }}</label
    >
    <input
      :type="type"
      v-model="internalValue"
      :placeholder="placeholder"
      class="block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 dark:bg-gray-700 sm:text-sm dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-300"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "rc-input",

  props: {
    value: {
      type: String as PropType<string>
    },
    label: {
      type: String as PropType<string>
    },
    type: {
      type: String as PropType<string>,
      default: "text"
    },
    placeholder: {
      type: String as PropType<string>
    }
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
