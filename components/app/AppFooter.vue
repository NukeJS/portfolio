<template>
  <RcFooter class="py-4 border-t border-gray-800">
    <RcContainer
      class="flex flex-col items-center justify-between space-y-4  sm:flex-row sm:space-y-0"
    >
      <div>
        <p class="text-center sm:text-left">
          &copy; {{ new Date().getFullYear() }} RonnieCodes. All rights
          reserved.
        </p>
      </div>
      <div class="flex items-center space-x-4">
        <a
          href="https://github.com/CodingWithNuke"
          target="_blank"
          aria-label="GitHub"
          class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400"
        >
          <IconGithub class="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/TheCodingNuke"
          target="_blank"
          aria-label="Twitter"
          class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400"
        >
          <IconTwitter class="w-6 h-6" />
        </a>
        <Mailto
          mail="info@ronniecodes.com"
          aria-label="E-mail"
          class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400"
        >
          <IconAt class="w-6 h-6" />
        </Mailto>
      </div>
    </RcContainer>
  </RcFooter>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>