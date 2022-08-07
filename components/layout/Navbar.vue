<template>
  <div
    :class="[
      'pointer-events-none fixed z-[100] flex max-h-screen w-full flex-col overflow-y-hidden backdrop-blur-md',
      isOpen ? 'h-full' : 'h-fit'
    ]"
  >
    <Disclosure
      as="nav"
      class="pointer-events-auto overflow-y-auto bg-zinc-900/80"
    >
      <Container class="border-b border-zinc-700 md:border-b-0">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
            <DisclosureButton
              class="inline-flex items-center justify-center rounded-full bg-zinc-900 p-2"
              aria-label="Toggle navigation"
              @click="toggleDisclosurePanel()"
            >
              <MenuIcon v-if="!isOpen" class="block h-6 w-6" />
              <XIcon v-else class="block h-6 w-6" />
            </DisclosureButton>
          </div>
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <div class="flex flex-shrink-0 items-center">
              <NuxtLink to="/" aria-label="Logo">
                <Logo class="w-9" />
              </NuxtLink>
            </div>
          </div>
          <div class="hidden md:ml-6 md:block">
            <div class="flex font-medium md:space-x-6">
              <NuxtLink
                v-for="(item, index) in NAVIGATION"
                :key="index"
                :to="item.to"
                class="hover:underline"
                v-bind="{
                  [item.exact ? 'exact-active-class' : 'active-class']:
                    'text-pink-500 hover:no-underline'
                }"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </Container>

      <DisclosurePanel
        v-show="isOpen"
        static
        class="border-b border-zinc-700 md:hidden"
      >
        <Container>
          <div class="flex flex-col space-y-4 pt-4 pb-6 font-medium">
            <DisclosureButton
              v-for="(item, index) in NAVIGATION"
              :key="index"
              :as="NuxtLink"
              :to="item.to"
              class="hover:underline"
              v-bind="{
                [item.exact ? 'exact-active-class' : 'active-class']:
                  'text-pink-500 hover:no-underline'
              }"
            >
              {{ item.name }}
            </DisclosureButton>
          </div>
        </Container>
      </DisclosurePanel>
    </Disclosure>

    <div
      v-if="isOpen"
      class="pointer-events-auto flex-1 bg-black/60"
      @click="toggleDisclosurePanel(false)"
    />
  </div>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { NuxtLink } from '#components'
import { NAVIGATION } from '~/constants'
/* -------------------------------------------------------------------------- */

/* ------------------------------- Disclosure ------------------------------- */
const isOpen = ref(false)

const toggleDisclosurePanel = (value?: boolean) => {
  isOpen.value = value ?? !isOpen.value

  if (isOpen.value) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = ''
  }
}

watch(
  () => useRoute().fullPath,
  () => toggleDisclosurePanel(false)
)

const windowResizeListener = () => {
  const disclosurePanelBreakpoint = 768
  if (window.innerWidth >= disclosurePanelBreakpoint && isOpen.value) {
    toggleDisclosurePanel(false)
  }
}

onMounted(() => window.addEventListener('resize', windowResizeListener))
onBeforeUnmount(() =>
  window.removeEventListener('resize', windowResizeListener)
)
/* -------------------------------------------------------------------------- */
</script>

<style scoped></style>
