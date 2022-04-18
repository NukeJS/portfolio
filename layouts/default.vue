<template>
  <div class="antialiased text-zinc-400 bg-zinc-900 min-h-screen">
    <div
      class="fixed top-0 h-16 bg-zinc-900/80 backdrop-blur-md w-full border-b border-zinc-100/5"
    >
      <Container class="flex items-center h-full">
        <Logo class="h-10" />
      </Container>
    </div>

    <main class="pt-16">
      <slot />
    </main>
  </div>
</template>
