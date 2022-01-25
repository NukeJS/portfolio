<template>
  <RcNavigationDrawer v-model="navigationDrawer">
    <div class="flex flex-col h-full bg-gray-50">
      <RcAppBar class="h-16 bg-gray-800">
        <RcContainer :padding="false" class="flex items-center w-full h-full">
          <div class="flex items-center flex-1 space-x-3">
            <button
              @click="hideNavigationDrawer"
              class="text-gray-300 transition-colors duration-200 lg:hidden hover:text-gray-400"
            >
              <IconX class="w-6 h-6" />
            </button>

            <NuxtLink to="/">
              <NuxtImg
                src="/images/logo.svg"
                alt="RonnieCodes Logo"
                class="h-6"
              />
            </NuxtLink>
          </div>
          <!-- <div class="flex items-center justify-end flex-1 font-bold">
          </div> -->
        </RcContainer>
      </RcAppBar>
      <div>
        <ul class="p-4 space-y-4 font-bold text-gray-600">
          <li>
            <NuxtLink
              to="/"
              exact-active-class="text-indigo-500 hover:!text-indigo-500"
              class="relative inline-flex items-center h-full transition-colors duration-200 hover:text-gray-400"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/projects/"
              exact-active-class="text-indigo-500 hover:!text-indigo-500"
              class="relative inline-flex items-center h-full transition-colors duration-200 hover:text-gray-400"
            >
              Projects
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/blog/"
              exact-active-class="text-indigo-500 hover:!text-indigo-500"
              class="relative inline-flex items-center h-full transition-colors duration-200 hover:text-gray-400"
            >
              Blog
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
  },

  methods: {
    hideNavigationDrawer() {
      this.$store.dispatch('setNavigationDrawer', false)
    },
  },
})
</script>
