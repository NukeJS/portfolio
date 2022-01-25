<template>
  <div :class="`alert alert--${type} p-4 my-4 border-l-4 border rounded-md`">
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

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    type: {
      type: String,
      default: 'info',
      validator: (v) => ['info', 'success', 'warning', 'danger'].includes(v),
    },
  },

  computed: {
    icon(): string | undefined {
      return {
        info: 'IconInformationCircle',
        success: 'IconCheckCircle',
        warning: 'IconExclamationCircle',
        danger: 'IconXCircle',
      }[this.type]
    },
  },
})
</script>

<style lang="scss">
.alert {
  p {
    @apply m-0 #{!important};
  }

  strong {
    @apply text-current;
  }

  &__content {
    pre code {
      background-color: inherit !important;
    }
  }

  code {
    @apply shadow-none border-0;
  }

  &--info {
    @apply bg-blue-100 border-blue-500;
    a {
      @apply text-blue-700 #{!important};
    }
    .alert__icon {
      @apply text-blue-700;
    }
  }

  &--success {
    @apply bg-green-100 border-green-500;
    a {
      @apply text-green-700 #{!important};
    }
    .alert__icon {
      @apply text-green-700;
    }
  }

  &--warning {
    @apply bg-orange-100 border-orange-500;
    a {
      @apply text-orange-700 #{!important};
    }
    .alert__icon {
      @apply text-orange-700;
    }
  }

  &--danger {
    @apply bg-red-100 border-red-500;
    a {
      @apply text-red-700 #{!important};
    }
    .alert__icon {
      @apply text-red-700;
    }
  }
}
</style>
