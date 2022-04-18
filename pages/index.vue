<template>
  <header>
    <Container class="py-20 sm:py-28 md:py-36 lg:py-48">
      <h1
        class="text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center font-bold"
      >
        Hey, I'm
        <span
          class="bg-clip-text bg-gradient-to-tr text-transparent from-pink-500 to-indigo-500"
          >Nuke</span
        >.
        <br />
        A
        <span
          class="bg-clip-text bg-gradient-to-tr text-transparent from-pink-500 to-indigo-500"
          >Full-stack</span
        >
        Developer.
      </h1>
      <p
        class="max-w-xl mx-auto mt-6 text-lg text-zinc-400 md:max-w-2xl md:text-xl lg:text-2xl sm:mt-10 text-center"
      >
        I'm currently based in the Netherlands, creating modern and functional
        web applications.
      </p>
    </Container>
  </header>
  <hr class="my-4 sm:my-8 md:my-12 border-zinc-100/5" />
  <section class="py-14 sm:py-20 md:py-28 lg:py-32">
    <Container>
      <h2 class="text-4xl font-bold tracking-tight text-zinc-50 md:text-5xl">
        About Me.
      </h2>
      <p class="mt-4 text-zinc-400 max-w-2xl md:text-lg">
        Let me introduce myself.
      </p>
      <div
        class="mt-10 sm:mt-12 md:mt-16 text-lg md:text-xl text-zinc-300 space-y-6 max-w-4xl"
      >
        <p class="leading-relaxed">
          Hey, I'm Ronnie. A <ClientOnly>{{ age }}</ClientOnly
          >-year-old full-stack developer. Back in 2017-2018, I started to look
          into web developement. I practiced the art of HTML, CSS, and
          JavaScript.
        </p>
        <p class="leading-relaxed">
          After learning the basics, I started to look into front-end
          frameworks. First I tried out React.js, I didn't like the way it
          worked so I took a look at Vue.js. Eventually, after using Vue.js for
          a couple of days I fell in love with it. It was also at this point
          that I got my first look at Tailwind CSS and Nuxt.js.
        </p>
        <p class="leading-relaxed">
          I wanted to learn more about the backside of web applications so I
          decided to give back-end development a try. The first library I used
          for back-end development was Express.js. I also picked up some
          TypeScript along the way. After building many APIs with Express.js I
          took some time to look into Laravel.
        </p>
        <p>This is where I am now.</p>
      </div>
    </Container>
  </section>
  <hr class="my-4 sm:my-8 md:my-12 border-zinc-100/5" />
  <section class="py-14 sm:py-20 md:py-28 lg:py-32">
    <Container>
      <h2 class="text-4xl font-bold tracking-tight text-zinc-50 md:text-5xl">
        My Education.
      </h2>
      <p class="mt-4 text-zinc-400 max-w-2xl md:text-lg">
        All the educations I've done.
      </p>
      <div
        class="grid gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        <EducationCard
          v-for="(education, index) in educations.data.value"
          :key="index"
          v-bind="{ education }"
        />
      </div>
    </Container>
  </section>
  <hr class="my-4 sm:my-8 md:my-12 border-zinc-100/5" />
  <section class="py-14 sm:py-20 md:py-28 lg:py-32">
    <Container>
      <h2 class="text-4xl font-bold tracking-tight text-zinc-50 md:text-5xl">
        My Working Experience.
      </h2>
      <p class="mt-4 text-zinc-400 max-w-2xl md:text-lg">
        All the places I've worked at.
      </p>
      <div
        class="grid gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-2 xl:grid-cols-3"
      >
        <JobCard
          v-for="(job, index) in jobs.data.value"
          :key="index"
          v-bind="{ job }"
        />
      </div>
    </Container>
  </section>
  <hr class="my-4 sm:my-8 md:my-12 border-zinc-100/5" />
  <section class="py-14 sm:py-20 md:py-28 lg:py-32">
    <Container>
      <h2
        class="text-4xl font-bold tracking-tight text-zinc-50 md:text-5xl text-center"
      >
        My Stack.
      </h2>
      <p class="mt-4 text-zinc-400 max-w-2xl md:text-lg mx-auto text-center">
        Technologies that I understand and use.
      </p>
      <div
        class="grid gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      >
        <TechnologyCard
          v-for="(technology, index) in technologies.data.value"
          :key="index"
          v-bind="{ technology }"
        />
      </div>
    </Container>
  </section>
  <footer class="py-8 border-t border-zinc-100/5">
    <Container>
      <p class="text-center sm:text-left text-sm">&copy; 2022 &mdash; NukeJS</p>
    </Container>
  </footer>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import { calcYears } from "~~/utils/helpers";
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
const educations = useAsyncData("educations", () => $fetch("/api/educations"));
const jobs = useAsyncData("jobs", () => $fetch("/api/jobs"));
const technologies = useAsyncData("technologies", () =>
  $fetch("/api/technologies")
);
const age = calcYears(new Date("November 6, 2001, 00:00:00"), new Date());
/* -------------------------------------------------------------------------- */
</script>
