<template>
  <div class="w-full">
    <section class="even:bg-indigo-600">
      <RcContainer
        :padding="false"
        class="flex flex-col items-center w-full py-20 text-center sm:py-28 md:py-36 lg:py-48"
      >
        <h1
          class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl md:text-6xl"
        >
          Hey, I'm <span class="text-indigo-600">Ronnie</span>.
          <br />
          A <span class="text-indigo-600">Full-stack</span> Developer.
        </h1>
        <p
          class="max-w-xl mt-6 text-lg text-gray-500 md:max-w-2xl md:text-xl lg:text-2xl sm:mt-10"
        >
          I'm currently based in the Netherlands, creating modern and functional
          web applications.
        </p>
        <div class="flex justify-center mt-8 space-x-6 sm:mt-12">
          <RcBtn
            nuxt
            to="/projects/"
            color="indigo"
            ring
            class="shadow-md hover:shadow-lg translate hover:-translate-y-1"
          >
            My Projects
          </RcBtn>
          <RcBtn
            nuxt
            to="/blog/"
            color="pink"
            ring
            class="shadow-md hover:shadow-lg translate hover:-translate-y-1"
          >
            My Blog
          </RcBtn>
        </div>
      </RcContainer>
    </section>
    <section class="even:bg-indigo-600">
      <RcContainer :padding="false" class="py-14 sm:py-20 md:py-28 lg:py-32">
        <div class="flex flex-col items-center">
          <h2
            class="text-4xl font-semibold tracking-tight text-gray-50 md:text-5xl"
          >
            About Me.
          </h2>
          <p class="max-w-2xl mt-2 text-gray-200 md:text-lg sm:mt-3 md:mt-4">
            Let me introduce myself.
          </p>
        </div>

        <div
          class="grid gap-6 mt-10 text-lg text-gray-100 md:text-xl sm:mt-12 md:mt-16 sm:grid-cols-2 md:grid-cols-3"
        >
          <div>
            <p class="leading-relaxed">
              Hey, I'm Ronnie. A
              <client-only>{{
                calcYears(new Date('November 6, 2001, 00:00:00'), new Date())
              }}</client-only
              >-year-old full-stack developer that is currently based in the
              Netherlands. Back in 2017-2018, I started to look into web
              development. I practiced the art of HTML, CSS & JavaScript.
            </p>
          </div>
          <div>
            <p class="leading-relaxed">
              After learning the basics (HTML, CSS & JavaScript), I started to
              look into front-end frameworks. This is where I found my love for
              <a
                href="https://vuejs.org/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white underline hover:text-gray-200"
                >Vue.js</a
              >. It was also at this point in time where I got my first look at
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white underline hover:text-gray-200"
                >Tailwind CSS</a
              >
              &
              <a
                href="https://nuxtjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white underline hover:text-gray-200"
                >Nuxt.js</a
              >.
            </p>
          </div>
          <div>
            <p class="leading-relaxed">
              I've also always wanted to do back-end development. And so, I gave
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white underline hover:text-gray-200"
                >Node.js</a
              >
              a try... (I also picked up some
              <a
                href="https://typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white underline hover:text-gray-200"
                >TypeScript</a
              >
              along the way...) After building many APIs using
              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white underline hover:text-gray-200"
                >Express.js</a
              >
              I moved onto learning
              <a
                href="https://laravel.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white underline hover:text-gray-200"
                >Laravel</a
              >.
            </p>
          </div>
        </div>
      </RcContainer>
    </section>
    <section class="even:bg-indigo-600">
      <RcContainer :padding="false" class="py-14 sm:py-20 md:py-28 lg:py-32">
        <div class="flex flex-col items-center text-center">
          <h2
            class="text-4xl font-semibold tracking-tight text-gray-800 md:text-5xl"
          >
            My Education.
          </h2>
          <p class="max-w-2xl mt-2 text-gray-500 md:text-lg sm:mt-3 md:mt-4">
            All the educations I've done.
          </p>
        </div>
        <div
          class="grid gap-6 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          <EducationCard
            v-for="(education, idx) in educations"
            :key="idx"
            :education="education"
          />
        </div>
      </RcContainer>
    </section>
    <section class="even:bg-indigo-600">
      <RcContainer :padding="false" class="py-14 sm:py-20 md:py-28 lg:py-32">
        <div class="flex flex-col items-center text-center">
          <h2
            class="text-4xl font-semibold tracking-tight text-gray-50 md:text-5xl"
          >
            My Working Experience.
          </h2>
          <p class="max-w-2xl mt-2 text-gray-200 md:text-lg sm:mt-3 md:mt-4">
            All the places I've worked at.
          </p>
        </div>
        <div
          class="grid gap-6 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          <JobCard v-for="(job, idx) in jobs" :key="idx" :job="job" />
        </div>
      </RcContainer>
    </section>
    <section class="even:bg-indigo-600">
      <RcContainer :padding="false" class="py-14 sm:py-20 md:py-28 lg:py-32">
        <div class="flex flex-col items-center text-center">
          <h2
            class="text-4xl font-semibold tracking-tight text-gray-800 md:text-5xl"
          >
            My Stack.
          </h2>
          <p class="max-w-2xl mt-2 text-gray-500 md:text-lg sm:mt-3 md:mt-4">
            Technologies that I understand and use.
          </p>
        </div>
        <div
          class="grid grid-cols-2 gap-6 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        >
          <TechnologyCard
            v-for="(technology, idx) in technologies"
            :key="idx"
            :technology="technology"
          />
        </div>
      </RcContainer>
    </section>
    <section class="mt-40 bg-gray-600 sm:mt-36 md:mt-20 lg:mt-28">
      <RcContainer :padding="false" class="py-10 sm:py-14 md:py-20 lg:py-28">
        <div
          class="flex flex-col px-6 py-8 -mt-40 bg-white shadow-md lg:flex-row lg:items-center rounded-xl"
        >
          <div>
            <h2
              class="text-4xl font-semibold tracking-tight text-gray-800 md:text-5xl"
            >
              Let's Talk.
            </h2>
            <p class="max-w-2xl mt-2 text-gray-500 md:text-lg sm:mt-3 md:mt-4">
              Want to get in touch? Feel free to send me an e-mail at
              <Mailto
                mail="info@ronniecodes.com"
                class="text-indigo-600 underline"
              >
                info@ronniecodes.com
              </Mailto>
            </p>
          </div>
          <div class="mt-8 lg:ml-auto lg:mt-0">
            <Mailto mail="info@ronniecodes.com">
              <RcBtn
                color="indigo"
                class="inline-flex items-center shadow-md whitespace-nowrap hover:shadow-lg translate hover:-translate-y-1"
              >
                <IconMail class="w-6 h-6 mr-2" /> <span>Contact Me</span>
              </RcBtn>
            </Mailto>
          </div>
        </div>
      </RcContainer>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import educations from '~/data/educations.json'
import jobs from '~/data/jobs.json'
import technologies from '~/data/technologies.json'

import { meta } from '~/utils/meta'
import { calcYears } from '~/utils/helpers'

import { description } from '~/meta.json'

export default Vue.extend({
  head() {
    return meta({
      description,
    })
  },

  data: () => ({
    educations,
    jobs,
    technologies,
  }),

  methods: {
    calcYears,
  },
})
</script>
