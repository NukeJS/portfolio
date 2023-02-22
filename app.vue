<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  @apply font-poppins bg-zinc-900 text-zinc-400 antialiased;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-montserrat;
}

.page-enter-active,
.page-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(7.5px);
}
</style>
