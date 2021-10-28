<template>
  <RcContainer>
    <section class="w-full py-6 sm:py-10 md:py-16 lg:py-20">
      <h1
        v-html="$t('pages.projects.content.title')"
        class="text-4xl font-semibold tracking-tight text-white md:text-5xl"
      />
      <p
        v-html="$t('pages.projects.content.subtitle')"
        class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5"
      />
      <div
        v-if="projects && projects.length"
        class="grid grid-cols-1 gap-4 mt-6  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mt-8"
      >
        <a
          v-for="(project, idx) in projects"
          :key="idx"
          :href="project.url"
          target="_blank"
          class="flex flex-col px-4 py-3 overflow-hidden bg-gray-800 rounded-md shadow-lg  sm:transition-transform sm:duration-300 sm:ease-in-out group sm:hover:-translate-y-1"
        >
          <h3
            class="text-lg font-semibold leading-tight text-white  group-hover:underline"
          >
            {{ project.name }}
          </h3>
          <p class="flex-grow mt-2 leading-snug">
            {{ project.description }}
          </p>
          <div class="flex justify-between mt-3 text-sm">
            <p>
              {{ project.language }}
            </p>
            <span v-if="project.stars" class="flex items-center">
              <IconStar class="w-4 h-4 mr-1 text-yellow-400" />
              {{ project.stars }}
            </span>
          </div>
        </a>
      </div>

      <p
        v-else
        v-html="$t('pages.projects.content.fetching')"
        class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5"
      />
    </section>
  </RcContainer>
</template>

<script lang="ts">
import Vue from 'vue'

import { mapGetters } from 'vuex'

import { meta } from '~/utils/meta'

export default Vue.extend({
  async fetch() {
    try {
      await this.$store.dispatch('fetchProjects')
    } catch (error) {
      this.$nuxt.error({
        statusCode: 500,
        message: 'An error occurred while trying to load my projects.',
      })
    }
  },
  fetchOnServer: false,

  head() {
    return meta({
      title: this.$t('pages.projects.meta.title') as string,
      description: this.$t('pages.projects.meta.description') as string,
      path: '/projects',
      locale: this.$i18n.locale,
      defaultLocale: this.$i18n.defaultLocale,
    })
  },

  computed: {
    ...mapGetters(['projects']),
  },
})
</script>

<style scoped>
</style>