<template>
  <div :class="`alert alert--${type} p-4 my-4 border-l-4`">
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <component :is="icon" class="w-6 h-6 mt-px alert__icon" />
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

  a {
    @apply text-gray-700 dark:text-gray-300 #{!important};
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
    @apply bg-blue-100 border-blue-400 dark:bg-blue-900 dark:border-blue-700;

    code {
      @apply bg-blue-200 shadow-none border-0 text-current dark:bg-blue-800;
    }

    .alert__icon {
      @apply text-blue-700;
    }

    .alert__content {
      @apply text-blue-700 dark:text-blue-300;
    }
  }

  &--success {
    @apply bg-green-100 border-green-400 dark:bg-green-900 dark:border-green-700;

    code {
      @apply bg-green-200 shadow-none border-0 text-current dark:bg-green-800;
    }

    .alert__icon {
      @apply text-green-700;
    }

    .alert__content {
      @apply text-green-700 dark:text-green-300;
    }
  }

  &--warning {
    @apply bg-orange-100 border-orange-400 dark:bg-yellow-900 dark:border-yellow-700;

    code {
      @apply bg-orange-200 shadow-none border-0 text-current dark:bg-yellow-800;
    }

    .alert__icon {
      @apply text-orange-700;
    }

    .alert__content {
      @apply text-orange-700 dark:text-yellow-300;
    }
  }

  &--danger {
    @apply bg-red-100 border-red-400 dark:bg-red-900 dark:border-red-700;

    code {
      @apply bg-red-200 shadow-none border-0 text-current dark:bg-red-800;
    }

    .alert__icon {
      @apply text-red-700;
    }

    .alert__content {
      @apply text-red-700 dark:text-red-300;
    }
  }
}
</style>