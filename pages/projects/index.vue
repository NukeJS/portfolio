<template>
  <div class="w-full">
    <section>
      <RcContainer :padding="false" class="py-14 sm:py-20 md:py-28 lg:py-32">
        <div class="flex flex-col items-center">
          <h2
            class="text-4xl font-semibold tracking-tight text-gray-800 md:text-5xl"
          >
            My Projects.
          </h2>
          <p class="max-w-2xl mt-2 text-gray-500 md:text-lg sm:mt-3 md:mt-4">
            Here are some things I've worked on.
          </p>
          <p
            class="max-w-2xl mt-6 text-center text-gray-500 md:text-lg sm:mt-8 md:mt-10"
          >
            This page is under construction.
            <br />
            For now, you can checkout my
            <a
              href="https://github.com/CodingWithNuke"
              target="_blank"
              aria-label="GitHub"
              rel="noopener noreferrer"
              class="text-indigo-600 underline hover:text-indigo-500"
              >GitHub</a
            >.
          </p>
        </div>
      </RcContainer>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { IContentDocument } from '@nuxt/content/types/content'

import { meta } from '~/utils/meta'

export default Vue.extend({
  head() {
    return meta({
      title: 'Projects',
      description: "Things I've worked on.",
      path: '/projects/',
    })
  },
})
</script>
