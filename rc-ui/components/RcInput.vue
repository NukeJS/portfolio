<template>
  <div>
    <label
      v-if="label"
      class="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300"
      >{{ label }}</label
    >
    <input
      :type="type"
      v-model="internalValue"
      :placeholder="placeholder"
      class="focus:ring-indigo-500 bg-gray-100 dark:bg-gray-700 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:text-gray-100 dark:placeholder-gray-300"
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
