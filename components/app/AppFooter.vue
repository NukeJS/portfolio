<template>
  <RcFooter class="py-4 border-t border-gray-800">
    <RcContainer
      class="flex flex-col items-center justify-between space-y-4  sm:flex-row sm:space-y-0"
    >
      <div>
        <p>
          &copy; {{ new Date().getFullYear() }} RonnieCodes.
          {{ $t('components.app.AppFooter.copyright') }}
        </p>
      </div>
      <div class="flex items-center space-x-4">
        <a
          href="https://github.com/CodingWithNuke"
          target="_blank"
          class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400"
        >
          <IconGithub class="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/TheCodingNuke"
          target="_blank"
          class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400"
        >
          <IconTwitter class="w-6 h-6" />
        </a>
        <a
          href="mailto:info@ronniecodes.com"
          target="_blank"
          class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400"
        >
          <IconAt class="w-6 h-6" />
        </a>
      </div>
    </RcContainer>
  </RcFooter>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
</style>