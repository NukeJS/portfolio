<template>
  <RcContainer>
    <header
      class="flex flex-col items-center justify-center w-full py-12 text-center sm:py-20 md:py-32 lg:py-36"
    >
      <h1
        class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
      >
        Hey, I'm <span class="text-indigo-500">Ronnie</span>.
        <br />
        A <span class="text-indigo-500">Full-stack Developer</span>.
      </h1>
      <p
        class="max-w-xl mt-6 text-lg text-gray-200 md:max-w-2xl md:text-xl lg:text-2xl sm:mt-10"
      >
        I'm currently based in the Netherlands, creating modern and functional
        web applications.
      </p>
      <!-- <div class="flex mt-8 space-x-4 sm:mt-12">
        <RcBtn nuxt to="/blog/" color="indigo">My Blog</RcBtn>
      </div> -->
    </header>
    <section class="w-full py-6 sm:py-10 md:py-16 lg:py-20">
      <div>
        <h2
          class="text-4xl font-semibold tracking-tight text-white md:text-5xl"
        >
          My <span class="text-indigo-500">Projects</span>.
        </h2>
        <p class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5">
          A collection of projects I've created.
        </p>
      </div>
      <div class="grid gap-4 mt-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="(project, idx) in projects"
          :key="idx"
          :project="project"
        />
      </div>
      <p class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5">
        You can discover more of my projects on my
        <a
          href="https://github.com/CodingWithNuke"
          target="_blank"
          rel="noopener"
          class="text-indigo-400 underline hover:text-indigo-300"
          >GitHub page</a
        >.
      </p>
    </section>
    <section class="w-full py-6 sm:py-10 md:py-16 lg:py-20">
      <div>
        <h2
          class="text-4xl font-semibold tracking-tight text-white md:text-5xl"
        >
          My <span class="text-indigo-500">Stack</span>.
        </h2>
        <p class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5">
          Technologies that I understand and use.
        </p>
      </div>
      <div
        class="grid grid-cols-2 gap-4 mt-6 sm:mt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7"
      >
        <TechnologyCard
          v-for="(technology, idx) in technologies"
          :key="idx"
          :technology="technology"
        />
      </div>
    </section>
    <section class="w-full py-6 sm:py-10 md:py-16 lg:py-20">
      <div>
        <h2
          class="text-4xl font-semibold tracking-tight text-white md:text-5xl"
        >
          My <span class="text-indigo-500">Education</span>.
        </h2>
        <p class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5">
          All the educations I've done.
        </p>
      </div>
      <div class="grid gap-4 mt-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <EducationCard
          v-for="(education, idx) in educations"
          :key="idx"
          :education="education"
          :class="{ 'opacity-30 shadow-none': idx === educations.length - 1 }"
        />
      </div>
    </section>
    <section class="w-full py-6 sm:py-10 md:py-16 lg:py-20">
      <div>
        <h2
          class="text-4xl font-semibold tracking-tight text-white md:text-5xl"
        >
          My <span class="text-indigo-500">Working Experience</span>.
        </h2>
        <p class="max-w-2xl mt-3 text-gray-300 md:text-lg sm:mt-4 md:mt-5">
          All the places I've worked at.
        </p>
      </div>
      <div class="grid gap-4 mt-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <JobCard
          v-for="(job, idx) in jobs"
          :key="idx"
          :job="job"
          :class="{ 'opacity-30 shadow-none': idx === jobs.length - 1 }"
        />
      </div>
    </section>
  </RcContainer>
</template>

<script lang="ts">
import Vue from 'vue'

import projects from '~/data/projects.json'
import educations from '~/data/educations.json'
import jobs from '~/data/jobs.json'
import technologies from '~/data/technologies.json'

import { meta } from '~/utils/meta'

import { title, description } from '~/meta.json'

export default Vue.extend({
  head() {
    return meta({
      title,
      description,
    })
  },

  data: () => ({
    projects,
    educations,
    jobs,
    technologies,
  }),
})
</script>
