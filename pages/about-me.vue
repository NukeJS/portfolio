<template>
  <div>
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <Container>
        <div
          class="mb-2 text-center font-semibold uppercase tracking-wider text-pink-500"
        >
          About Me
        </div>
        <h1 class="text-center text-4xl font-bold text-white sm:text-5xl">
          Get to know me.
        </h1>
        <div
          class="mt-8 space-y-6 text-lg sm:mt-10 sm:space-y-8 sm:text-xl [&>*]:leading-relaxed"
        >
          <p>
            I'm Ronnie, a <ClientOnly>{{ age }}</ClientOnly
            >-year-old full-stack developer, and blogger who
            specializes in full-stack development. My mission is to create
            functional web applications that help improve the web experience.
          </p>
          <p>
            I am currently working as a full-stack developer at Script, where I
            develop WordPress and Vue 3 applications.
          </p>
          <p>
            Before working at Script, I improved my development skills by
            self-learning.
          </p>
        </div>
      </Container>
    </section>
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <Container>
        <h2 class="text-3xl font-bold text-white">
          Technologies I make use of.
        </h2>
        <div
          class="mt-8 grid grid-cols-2 gap-4 text-lg sm:mt-10 sm:grid-cols-3 sm:text-xl md:grid-cols-4 lg:grid-cols-4"
        >
          <TechnologyCard
            v-for="(technology, index) in technologies.data.value"
            :key="index"
            v-bind="{ technology }"
          />
        </div>
      </Container>
    </section>
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <Container>
        <h2 class="text-3xl font-bold text-white">Places I've worked at.</h2>
        <div class="mt-8 space-y-6 text-lg sm:mt-10 sm:space-y-8 sm:text-xl">
          <Timeline :items="jobs.data.value" />
        </div>
      </Container>
    </section>
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <Container>
        <h2 class="text-3xl font-bold text-white">Educations I've done.</h2>
        <div class="mt-8 space-y-6 text-lg sm:mt-10 sm:space-y-8 sm:text-xl">
          <Timeline :items="educations.data.value" />
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import { differenceInYears } from 'date-fns'
import { useHeadHelper } from '~/utils/meta'
/* -------------------------------------------------------------------------- */

/* ---------------------------- Page Information ---------------------------- */
useHeadHelper({
  title: 'About Me'
})
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
const technologies = useAsyncData('technologies', () =>
  $fetch('/api/technologies')
)
const jobs = useAsyncData('jobs', () => $fetch('/api/jobs'))
const educations = useAsyncData('educations', () => $fetch('/api/educations'))

const age = differenceInYears(
  new Date(),
  new Date('November 6, 2001, GMT+0100')
)
/* -------------------------------------------------------------------------- */
</script>
