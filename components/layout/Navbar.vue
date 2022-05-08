<template>
  <div
    class="fixed top-0 h-16 bg-white/75 dark:bg-zinc-900/75 backdrop-blur-md w-full border-b border-zinc-200 dark:border-zinc-800"
  >
    <Container class="flex items-center h-full">
      <NuxtLink to="/">
        <Logo class="h-10" />
      </NuxtLink>

      <div class="ml-auto flex items-center">
        <ClientOnly>
          <button
            @click="toggleTheme"
            class="w-6 h-6 text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 transition-colors focus:outline-none"
          >
            <MoonIcon v-if="$colorMode.value === 'dark'" />
            <SunIcon v-else-if="$colorMode.value === 'light'" />
          </button>
        </ClientOnly>
      </div>
    </Container>
  </div>
</template>

<script lang="ts" setup>
/* --------------------------------- Imports -------------------------------- */
import { MoonIcon, SunIcon, RefreshIcon } from "@heroicons/vue/outline";
/* -------------------------------------------------------------------------- */

/* ---------------------------------- Theme --------------------------------- */
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
/* -------------------------------------------------------------------------- */
</script>
