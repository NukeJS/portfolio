<template>
  <div
    class="antialiased bg-white dark:bg-neutral-900 min-h-screen flex flex-col"
  >
    <Navbar />

    <main class="pt-16 flex-1">
      <slot />
    </main>

    <Footer />
  </div>
</template>
