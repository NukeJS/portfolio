<template>
  <RcFooter class="py-8 text-gray-200 bg-gray-800">
    <RcContainer
      class="flex flex-col items-center justify-between space-y-8 sm:flex-row sm:space-y-0"
    >
      <div class="flex flex-col justify-center text-center sm:text-left">
        <p>&copy; {{ new Date().getFullYear() }} &mdash; RonnieCodes</p>
        <p class="mt-1 text-sm text-gray-400">
          Made with
          <a
            href="https://nuxtjs.org"
            target="_blank"
            rel="noopener noreferrer"
            class="text-indigo-300 underline hover:text-indigo-200"
          >
            Nuxt.js</a
          >
          and
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-indigo-300 underline hover:text-indigo-200"
          >
            Tailwind CSS</a
          >.
        </p>
      </div>
      <div class="flex items-center space-x-4">
        <a
          href="https://github.com/CodingWithNuke"
          target="_blank"
          aria-label="GitHub"
          rel="noopener noreferrer"
          class="relative inline-flex items-center h-full transition-colors duration-200 hover:text-gray-400"
        >
          <IconGithub class="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/TheCodingNuke"
          target="_blank"
          aria-label="Twitter"
          rel="noopener noreferrer"
          class="relative inline-flex items-center h-full transition-colors duration-200 hover:text-gray-400"
        >
          <IconTwitter class="w-6 h-6" />
        </a>
        <Mailto
          tabindex="-1"
          mail="info@ronniecodes.com"
          aria-label="E-mail"
          class="relative inline-flex items-center h-full transition-colors duration-200 hover:text-gray-400"
        >
          <IconMail class="w-6 h-6" />
        </Mailto>
      </div>
    </RcContainer>
  </RcFooter>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
