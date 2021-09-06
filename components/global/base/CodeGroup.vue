<template>
  <div class="code-group">
    <div
      class="relative px-2 text-sm text-white bg-gray-800 border-b-2 border-gray-700 rounded-t-md"
    >
      <button
        v-for="({ label }, index) in tabs"
        :key="index"
        ref="tabs"
        :class="[
          'px-4 py-3 font-mono font-bold text-gray-400 code-group__button',
          { 'code-group__button--active': activeTabIndex === index }
        ]"
        @click="updateTabs(index)"
      >
        {{ label }}
      </button>
      <span
        ref="highlight-underline"
        class="code-group__highlight-underline"
      ></span>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  data: () => ({
    tabs: [],
    activeTabIndex: 0
  }),

  watch: {
    activeTabIndex(newValue) {
      this.switchTab(newValue);
    }
  },

  mounted() {
    this.tabs = this.$slots.default
      .filter(slot => Boolean(slot.componentOptions))
      .map(slot => ({
        label: slot.componentOptions.propsData.label,
        elm: slot.elm
      }));
    this.$nextTick(this.updateHighlighteUnderlinePosition);
  },

  methods: {
    switchTab(i) {
      this.tabs.forEach(tab => {
        tab.elm.style.display = "none";
      });
      this.tabs[i].elm.style.display = "block";
    },
    updateTabs(i) {
      this.activeTabIndex = i;
      this.updateHighlighteUnderlinePosition();
    },
    updateHighlighteUnderlinePosition() {
      const activeTab = this.$refs.tabs[this.activeTabIndex];

      if (!activeTab) return;

      const highlightUnderline = this.$refs["highlight-underline"];
      highlightUnderline.style.left = `${activeTab.offsetLeft}px`;
      highlightUnderline.style.width = `${activeTab.clientWidth}px`;
    }
  }
};
</script>

<style lang="scss">
.code-group {
  pre[class*="language-"] {
    @apply rounded-t-none mt-0;
  }

  &__button {
    outline: none;

    &--active {
      @apply text-white;
    }
  }

  &__highlight-underline {
    @apply bg-indigo-600 dark:bg-indigo-500 absolute;
    bottom: -2px;
    height: 2px;
    transition: left 150ms, width 150ms;
  }
}
</style>