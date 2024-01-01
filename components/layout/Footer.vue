<template>
  <footer class="mt-14 md:mt-20 pb-4 md:pb-8">
    <Container class="border-t border-zinc-700 pt-6 lg:pt-8">
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
            <EnvelopeIcon class="h-6 w-6" />
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
            to="https://discord.com/users/237878725130059777"
            target="_blank"
            class="hover:text-white"
            aria-label="Open Discord profile"
          >
            <DiscordIcon class="h-6 w-6" />
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
import { EnvelopeIcon } from '@heroicons/vue/24/solid';
import { NAVIGATION } from '~/constants';
</script>
