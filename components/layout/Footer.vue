<template>
  <footer class="mt-6 py-4 shadow md:py-8">
    <Container>
      <div class="sm:flex sm:items-center sm:justify-between">
        <ul
          class="mb-6 flex flex-wrap items-center space-x-4 sm:mb-0 md:space-x-6"
        >
          <li v-for="(item, index) in NAVIGATION" :key="index">
            <NuxtLink :to="item.to" class="hover:underline">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <hr class="my-6 border-zinc-700 sm:mx-auto lg:my-8" />

      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="sm:text-center">
          © 2022 NukeJS. All Rights Reserved.
        </span>
        <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <NuxtLink
            to="mailto:me@nukejs.dev"
            class="hover:text-white"
            aria-label="Send me an email"
          >
            <MailIcon class="h-6 w-6" />
          </NuxtLink>
          <NuxtLink
            to="https://twitter.com/nuke_js"
            target="_blank"
            class="hover:text-white"
            aria-label="Open Twitter profile"
          >
            <TwitterIcon class="h-6 w-6" />
          </NuxtLink>
          <NuxtLink
            to="https://github.com/NukeJS"
            target="_blank"
            class="hover:text-white"
            aria-label="Open GitHub profile"
          >
            <GithubIcon class="h-6 w-6" />
          </NuxtLink>
        </div>
      </div>
    </Container>
  </footer>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import { MailIcon } from '@heroicons/vue/solid'
import { NAVIGATION } from '~/constants'
/* -------------------------------------------------------------------------- */
</script>
