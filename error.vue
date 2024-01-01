<template>
  <NuxtLayout name="default" class="font-poppins">
    <section class="py-12 sm:py-16 md:py-20 lg:py-24">
      <Container>
        <div
          class="font-montserrat mb-2 text-center font-semibold uppercase tracking-wider text-pink-500"
        >
          Error {{ error.statusCode }}
        </div>
        <h1
          class="font-montserrat text-center text-4xl font-bold text-white sm:text-5xl"
        >
          {{ error.statusMessage }}
        </h1>

        <div class="mt-8 flex sm:mt-10">
          <Button class="mx-auto" @click="goHome"> Go Home </Button>
        </div>
      </Container>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
defineProps<{
  error: Record<string, any>;
}>();

const goHome = () => clearError({ redirect: "/" });
</script>

<style>
:root {
  color-scheme: dark;
}
</style>
