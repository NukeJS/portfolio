<template>
  <div class="flex min-h-screen flex-col">
    <Navbar />

    <main class="h-full flex-1 pt-16">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style>
:root {
  color-scheme: dark;
}
</style>
