<template>
  <header>
    <Container class="py-20 sm:py-28 md:py-36 lg:py-48">
      <h1
        class="dark:text-white text-neutral-900 text-4xl sm:text-5xl lg:text-6xl tracking-tight font-extrabold md:text-center"
      >
        Hey, I'm
        <span
          class="bg-clip-text bg-gradient-to-tr text-transparent from-pink-500 to-indigo-500"
          >Ronnie</span
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
        class="max-w-xl mt-6 text-lg text-neutral-500 dark:text-neutral-400 md:max-w-2xl md:text-xl lg:text-2xl sm:mt-10 md:mx-auto md:text-center"
      >
        I'm currently based in the Netherlands, creating modern and functional
        web applications.
      </p>
    </Container>
  </header>
  <hr
    class="my-4 sm:my-8 md:my-12 border-neutral-200 dark:border-neutral-800"
  />
  <section
    aria-labelledby="about-me-title"
    class="py-14 sm:py-20 md:py-28 lg:py-32"
  >
    <Container>
      <h2
        id="about-me-title"
        class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl"
      >
        About Me.
      </h2>
      <p
        class="mt-4 text-neutral-500 dark:text-neutral-400 max-w-2xl md:text-lg"
      >
        Let me introduce myself.
      </p>
      <div
        class="mt-10 sm:mt-12 md:mt-16 text-lg md:text-xl text-neutral-500 dark:text-neutral-400 space-y-6 md:space-y-8 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl"
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
          a while I chose to stick with it. But, I noticed that since Vue.js is
          a client-sided front-end framework, it wasn't the best for SEO, so I
          found out about Nuxt.js. Now I wanted to look into a better CSS
          framework/library instead of Bootstrap, this is how I found out about
          Tailwind CSS.
        </p>
        <p class="leading-relaxed">
          After learning a lot about front-end I wanted to learn more about the
          backside of web applications so I decided to give back-end development
          a try. The first library I used for back-end development was
          Express.js. I also picked up some TypeScript along the way. After
          building many APIs with Express.js I wanted to try the PHP framework,
          Laravel.
        </p>
        <p class="leading-relaxed">This is where I am now.</p>
      </div>
    </Container>
  </section>
  <hr
    class="my-4 sm:my-8 md:my-12 border-neutral-200 dark:border-neutral-800"
  />
  <section
    aria-labelledby="my-education-title"
    class="py-14 sm:py-20 md:py-28 lg:py-32"
  >
    <Container>
      <h2
        id="my-education-title"
        class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl"
      >
        My Education.
      </h2>
      <p
        class="mt-4 text-neutral-500 dark:text-neutral-400 max-w-2xl md:text-lg"
      >
        All the educations I've done.
      </p>
      <div class="grid gap-6 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-2">
        <div
          v-for="(education, index) in educations.data.value"
          :key="index"
          class="px-6 py-6 shadow-md bg-white dark:bg-neutral-800 rounded-xl space-y-2"
        >
          <Timeline :timeline="education" />
        </div>
      </div>
    </Container>
  </section>
  <hr
    class="my-4 sm:my-8 md:my-12 border-neutral-200 dark:border-neutral-800"
  />
  <section
    aria-labelledby="my-working-experience-title"
    class="py-14 sm:py-20 md:py-28 lg:py-32"
  >
    <Container>
      <h2
        id="my-working-experience-title"
        class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl"
      >
        My Working Experience.
      </h2>
      <p
        class="mt-4 text-neutral-500 dark:text-neutral-400 max-w-2xl md:text-lg"
      >
        All the places I've worked at.
      </p>
      <div class="grid gap-6 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-2">
        <div
          v-for="(job, index) in jobs.data.value"
          :key="index"
          class="px-6 py-6 shadow-md bg-white dark:bg-neutral-800 rounded-xl space-y-2"
        >
          <Timeline :timeline="job" />
        </div>
      </div>
    </Container>
  </section>
  <hr
    class="my-4 sm:my-8 md:my-12 border-neutral-200 dark:border-neutral-800"
  />
  <section
    aria-labelledby="what-i-know-title"
    class="py-14 sm:py-20 md:py-28 lg:py-32"
  >
    <Container>
      <h2
        id="what-i-know-title"
        class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl"
      >
        What I Know.
      </h2>
      <p
        class="mt-4 text-neutral-500 dark:text-neutral-400 max-w-2xl md:text-lg"
      >
        The things I know and feel most comfortable with.
      </p>
      <div class="grid gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-2">
        <TechnologyCard
          v-for="(technology, index) in technologies.data.value"
          :key="index"
          v-bind="{ technology }"
        />
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import { differenceInYears } from "date-fns";
import type { Job, Technology } from "~/types";
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
const educations = useAsyncData("educations", () => $fetch("/api/educations"));
const jobs = useAsyncData("jobs", () => $fetch("/api/jobs"));
const technologies = useAsyncData<Technology[]>("technologies", () =>
  $fetch("/api/technologies")
);

const age = differenceInYears(
  new Date(),
  new Date("November 6, 2001, GMT+0100")
);
/* -------------------------------------------------------------------------- */
</script>
