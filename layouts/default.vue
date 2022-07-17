<template>
  <div class="flex min-h-screen flex-col bg-zinc-900 text-zinc-400 antialiased">
    <Navbar />

    <main class="h-full flex-1 pt-16">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style>
:root {
  color-scheme: dark;
}
</style>
