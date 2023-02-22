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
            Hi, my name is Ronnie and I'm a <ClientOnly>{{ age }}</ClientOnly
            >-year-old full-stack developer. My passion for creating web
            applications led me to specialize in full-stack development. I
            believe in using technology to improve the web experience, which is
            why I've made it my mission to create user-friendly applications.
          </p>
          <p>
            Currently, I'm working at Script as a full-stack developer, where
            I'm developing WordPress and Vue 3 applications. Before this, I
            honed my development skills through self-learning, which helped me
            gain a deeper understanding of the field.
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
            v-for="(technology, index) in technologies"
            :key="index"
            :technology="technologies.get(technology[0])!"
          />
        </div>
      </Container>
    </section>
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <Container>
        <h2 class="text-3xl font-bold text-white">Places I've worked at.</h2>
        <div class="mt-8 space-y-6 text-lg sm:mt-10 sm:space-y-8 sm:text-xl">
          <Timeline :items="jobs" />
        </div>
      </Container>
    </section>
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <Container>
        <h2 class="text-3xl font-bold text-white">Educations I've done.</h2>
        <div class="mt-8 space-y-6 text-lg sm:mt-10 sm:space-y-8 sm:text-xl">
          <Timeline :items="educations" />
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import { differenceInYears } from 'date-fns';

import educations from '~~/data/educations';
import jobs from '~~/data/jobs';
import { technologies } from '~~/data/technologies';
import { useHeadHelper } from '~/utils/meta';
/* -------------------------------------------------------------------------- */

/* ---------------------------- Page Information ---------------------------- */
useHeadHelper({
  title: 'About Me',
});
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
const age = differenceInYears(
  new Date(),
  new Date('November 6, 2001, GMT+0100')
);
/* -------------------------------------------------------------------------- */
</script>
