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
            >-year-old developer, blogger, and software engineering student who
            specializes in full-stack development. My mission is to create
            functional web applications that help improve the web experience.
          </p>
          <p>
            I am currently working as a full-stack developer at Script, where I
            develop WordPress and Vue 3 applications.
          </p>
          <p>
            Before working at Script, I improved my development skills by
            learning them myself. So far, I understand and make use of
            JavaScript, TypeScript, Node.js, Vue.js, Nuxt.js, SASS/SCSS,
            Tailwind CSS, Git, MongoDB, Laravel, and PHP.
          </p>
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
import { headHelper } from '~~/utils/meta'
/* -------------------------------------------------------------------------- */

/* ---------------------------- Page Information ---------------------------- */
useHead(
  headHelper({
    title: 'About Me'
  })
)
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
const jobs = useAsyncData('jobs', () => $fetch('/api/jobs'))
const educations = useAsyncData('educations', () => $fetch('/api/educations'))

const age = differenceInYears(
  new Date(),
  new Date('November 6, 2001, GMT+0100')
)
/* -------------------------------------------------------------------------- */
</script>
