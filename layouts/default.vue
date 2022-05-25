<template>
  <div
    class="antialiased bg-neutral-50 dark:bg-neutral-900 min-h-screen flex flex-col"
  >
    <Navbar />

    <main class="pt-16 flex-1">
      <slot />
    </main>

    <Footer />
  </div>
</template>
