<template>
  <RcBtn
    ref="copyBtn"
    border
    :padding="false"
    :ring="false"
    aria-label="Copy to clipboard"
    :class="[
      'copy absolute p-1 transition-all border bottom-2 right-2 shadow-md',
      {
        'border-gray-700 bg-gray-800 hover:bg-gray-700': !copied,
        'border-green-700 bg-green-800 text-white': copied,
      },
    ]"
  >
    <IconClipboard v-if="!copied" class="w-5 h-5" />
    <IconClipboardCheck v-else class="w-5 h-5" />
  </RcBtn>
</template>

<script lang="ts">
import Vue from 'vue'

import Clipboard from 'clipboard'

export default Vue.extend({
  data: () => ({
    copied: false,
  }),

  mounted() {
    console.log(this.$refs.copyBtn)

    //@ts-ignore
    const copy = new Clipboard(this.$refs.copyBtn.$el, {
      target(trigger) {
        return trigger.previousElementSibling!
      },
    })

    copy.on('success', (event) => {
      event.clearSelection()
      this.copied = true
      setTimeout(() => (this.copied = false), 2000)
    })
  },
})
</script>
