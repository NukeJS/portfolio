<template>
  <RcNavigationDrawer v-model="navigationDrawer">
    <div class="flex flex-col h-full bg-gray-900 border-r border-gray-800">
      <RcAppBar class="h-16 border-b border-gray-800">
        <RcContainer class="flex items-center w-full h-full">
          <div class="flex items-center flex-1 space-x-3">
            <button
              @click="hideNavigationDrawer"
              class="transition-colors duration-200  lg:hidden hover:text-gray-400"
            >
              <IconX class="w-6 h-6" />
            </button>

            <NuxtLink :to="localePath('/')">
              <NuxtImg
                src="/images/logo.svg"
                alt="RonnieCodes Logo"
                class="h-6"
              />
            </NuxtLink>
          </div>
          <div class="flex items-center justify-end flex-1 font-bold">
            <NuxtLink
              :to="switchLocalePath(locale === 'en' ? 'nl' : 'en')"
              class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400"
            >
              <IconTranslate class="w-6 h-6" />
              {{ locale === 'en' ? 'NL' : 'EN' }}
            </NuxtLink>
          </div>
        </RcContainer>
      </RcAppBar>
      <div>
        <ul class="p-4 space-y-4 font-bold">
          <li>
            <NuxtLink
              :to="localePath('/')"
              exact-active-class="text-indigo-500 hover:!text-indigo-500 before:!block"
              class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400 before:w-1 before:h-6 before:rounded-full before:absolute before:bg-indigo-500 before:-left-2 before:top-1/2 before:-translate-y-1/2 before:transform before:bottom-3 before:hidden"
            >
              {{ $t('components.app.AppBar.home') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="localePath('/projects')"
              exact-active-class="text-indigo-500 hover:!text-indigo-500 before:!block"
              class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400 before:w-1 before:h-6 before:rounded-full before:absolute before:bg-indigo-500 before:-left-2 before:top-1/2 before:-translate-y-1/2 before:transform before:bottom-3 before:hidden"
            >
              {{ $t('components.app.AppBar.projects') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="localePath('/blog')"
              exact-active-class="text-indigo-500 hover:!text-indigo-500 before:!block"
              class="relative inline-flex items-center h-full transition-colors duration-200  hover:text-gray-400 before:w-1 before:h-6 before:rounded-full before:absolute before:bg-indigo-500 before:-left-2 before:top-1/2 before:-translate-y-1/2 before:transform before:bottom-3 before:hidden"
            >
              {{ $t('components.app.AppBar.blog') }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </RcNavigationDrawer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    navigationDrawer: {
      get(): boolean {
        return this.$store.getters['navigationDrawer']
      },
      set(value: boolean) {
        this.$store.dispatch('setNavigationDrawer', value)
      },
    },

    locale() {
      return this.$i18n.locale
    },
  },

  methods: {
    hideNavigationDrawer() {
      this.$store.dispatch('setNavigationDrawer', false)
    },
  },
})
</script>