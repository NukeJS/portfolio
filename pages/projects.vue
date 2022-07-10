<template>
  <div>
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <Container>
        <div
          class="mb-2 text-center font-semibold uppercase tracking-wider text-pink-500"
        >
          My Projects
        </div>
        <h1 class="text-center text-4xl font-bold text-white sm:text-5xl">
          Things I've made.
        </h1>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import { useHeadHelper } from '~~/utils/meta'
/* -------------------------------------------------------------------------- */

/* ---------------------------- Page Information ---------------------------- */
useHeadHelper({
  title: 'Projects',
  description: "Things I've made."
})
/* -------------------------------------------------------------------------- */
</script>
