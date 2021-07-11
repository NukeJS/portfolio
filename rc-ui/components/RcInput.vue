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
      class="focus:ring-indigo-500 dark:bg-gray-700 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:text-gray-100 dark:placeholder-gray-300"
    />
  </div>
</template>

<script>
export default {
  name: "rc-input",

  props: {
    value: {
      type: String
    },
    label: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String
    }
  },

  data: () => ({
    internalLazyValue: null
  }),

  computed: {
    internalValue: {
      get() {
        return this.internalLazyValue;
      },
      set(val) {
        this.internalLazyValue = val;
        this.$emit("input", val);
      }
    }
  }
};
</script>

<style>
</style>