<template>
  <RcContainer>
    <section
      class="flex flex-col items-center justify-center w-full pt-12 pb-32 text-center  sm:pt-20 sm:pb-36 md:pt-32 md:pb-40 lg:pt-36"
    >
      <h1
        v-html="$t('pages.index.content.hero.title')"
        class="text-4xl font-bold tracking-tight text-white  sm:text-5xl md:text-6xl"
      />
      <p
        v-html="$t('pages.index.content.hero.subtitle')"
        class="max-w-xl mt-6 text-lg text-gray-200  md:max-w-2xl md:text-xl lg:text-2xl sm:mt-10"
      />
      <div class="mt-8 space-x-4 sm:mt-12">
        <RcBtn nuxt :to="localePath('/projects')" color="indigo">
          {{ $t('pages.index.content.hero.projects') }}
        </RcBtn>
        <RcBtn nuxt :to="localePath('/blog')" color="indigo">
          {{ $t('pages.index.content.hero.blog') }}
        </RcBtn>
      </div>
    </section>
    <section class="w-full py-6 sm:py-10 md:py-16 lg:py-20">
      <h2
        v-html="$t('pages.index.content.stack.title')"
        class="text-4xl font-semibold tracking-tight text-white md:text-5xl"
      />
      <p
        v-html="$t('pages.index.content.stack.subtitle')"
        class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5"
      />

      <div
        class="grid grid-cols-2 gap-3 mt-6  sm:mt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7"
      >
        <div
          v-for="(technology, idx) in stack"
          :key="idx"
          class="flex flex-col items-center p-3 bg-gray-800 rounded-md shadow-lg "
        >
          <NuxtImg
            class="w-16 h-16"
            :src="`/images/technologies/${technology.image}`"
            :alt="`${technology.name} Logo`"
          />
          <p class="mt-2 text-lg font-semibold text-white">
            {{ technology.name }}
          </p>
        </div>
      </div>
    </section>
  </RcContainer>
</template>

<script lang="ts">
import Vue from 'vue'

import { meta } from '~/utils/meta'

export default Vue.extend({
  head() {
    return meta({
      title: this.$t('pages.index.meta.title') as string,
      description: this.$t('pages.index.meta.description') as string,
      locale: this.$i18n.locale,
      defaultLocale: this.$i18n.defaultLocale,
    })
  },

  data: () => ({
    stack: [
      {
        image: 'html.svg',
        name: 'HTML',
      },
      {
        image: 'css.svg',
        name: 'CSS',
      },
      {
        image: 'javascript.svg',
        name: 'JavaScript',
      },
      {
        image: 'typescript.svg',
        name: 'TypeScript',
      },
      {
        image: 'node.svg',
        name: 'Node.js',
      },
      {
        image: 'vue.svg',
        name: 'Vue.js',
      },
      {
        image: 'nuxt.svg',
        name: 'Nuxt.js',
      },
      {
        image: 'sass.svg',
        name: 'SASS/SCSS',
      },
      {
        image: 'tailwind.svg',
        name: 'Tailwind CSS',
      },
      {
        image: 'express.svg',
        name: 'Express.js',
      },
      {
        image: 'vsc.svg',
        name: 'VS Code',
      },
      {
        image: 'git.svg',
        name: 'Git',
      },
      {
        image: 'mongodb.svg',
        name: 'MongoDB',
      },
      {
        image: 'react.svg',
        name: 'React.js',
      },
      {
        image: 'laravel.svg',
        name: 'Laravel',
      },
      {
        image: 'mysql.svg',
        name: 'MySQL',
      },
      {
        image: 'php.svg',
        name: 'PHP',
      },
    ],
  }),
})
</script>
