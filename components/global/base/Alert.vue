<template>
  <div :class="`alert alert--${type} p-4 my-4 border-l-4`">
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <component
          :is="icon"
          class="w-6 h-6 mt-px md:mt-1 lg:mt-1.5 alert__icon"
        />
      </div>
      <div class="flex-grow ml-2 overflow-auto alert__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "info",
      validator(value) {
        return ["info", "success", "warning", "danger"].includes(value);
      }
    }
  },

  computed: {
    icon() {
      return {
        info: "IconInformationCircle",
        success: "IconCheckCircle",
        warning: "IconExclamationCircle",
        danger: "IconXCircle"
      }[this.type];
    }
  }
};
</script>

<style lang="scss">
.alert {
  p {
    @apply m-0 #{!important};
  }

  strong {
    @apply text-current dark:text-current;
  }

  &__content {
    pre code {
      background-color: inherit !important;
    }
  }

  &--info {
    @apply bg-indigo-100 border-indigo-500 dark:border-indigo-400 dark:bg-indigo-800;

    code {
      @apply bg-indigo-200 shadow-none border-0 text-current dark:bg-indigo-900;
    }

    a {
      @apply text-indigo-700 dark:text-indigo-300 #{!important};
    }

    .alert__icon {
      @apply text-indigo-700 dark:text-indigo-300;
    }

    .alert__content {
      @apply dark:text-white;
    }
  }

  &--success {
    @apply bg-green-100 border-green-500 dark:border-green-400 dark:bg-green-800;

    code {
      @apply bg-green-200 shadow-none border-0 text-current dark:bg-green-900;
    }

    a {
      @apply text-green-700 dark:text-green-300 #{!important};
    }

    .alert__icon {
      @apply text-green-700 dark:text-green-300;
    }

    .alert__content {
      @apply dark:text-white;
    }
  }

  &--warning {
    @apply bg-orange-100 border-orange-500 dark:border-yellow-400 dark:bg-yellow-800;

    code {
      @apply bg-orange-200 shadow-none border-0 text-current dark:bg-yellow-900;
    }

    a {
      @apply text-orange-700 dark:text-orange-300 #{!important};
    }

    .alert__icon {
      @apply text-orange-700 dark:text-orange-300;
    }

    .alert__content {
      @apply dark:text-white;
    }
  }

  &--danger {
    @apply bg-red-100 border-red-500 dark:border-red-400 dark:bg-red-800;

    code {
      @apply bg-red-200 shadow-none border-0 text-current dark:bg-red-900;
    }

    a {
      @apply text-red-700 dark:text-red-300 #{!important};
    }

    .alert__icon {
      @apply text-red-700 dark:text-red-300;
    }

    .alert__content {
      @apply dark:text-white;
    }
  }
}
</style>