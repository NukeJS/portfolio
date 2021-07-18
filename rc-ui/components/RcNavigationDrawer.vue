<template>
  <div class="fixed inset-0 overflow-hidden z-50 pointer-events-none">
    <div class="absolute inset-0 overflow-hidden">
      <transition
        enter-class-active="ease-in-out duration-500"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in-out duration-500"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          @click="internalValue = false"
          v-show="internalValue"
          class="absolute inset-0 bg-black bg-opacity-60 transition-opacity pointer-events-auto"
        ></div>
      </transition>

      <div class="fixed inset-y-0 left-0 pr-10 max-w-full flex">
        <transition
          enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
          enter-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
          leave-class="translate-x-0"
          leave-to-class="-translate-x-full"
        >
          <div
            v-show="internalValue"
            class="relative w-screen max-w-xs pointer-events-auto"
          >
            <slot></slot>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  },

  computed: {
    internalValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },

  methods: {
    windowResizeListener() {
      if (window.innerWidth >= 768 && this.internalValue) {
        this.internalValue = false;
      }
    },
    onRouteChange() {
      if (this.internalValue && !this._isDestroyed) {
        this.internalValue = false;
      }
    }
  },

  mounted() {
    window.addEventListener("resize", this.windowResizeListener);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.windowResizeListener);
  },

  watch: {
    $route: "onRouteChange"
  }
};
</script>

<style>
</style>