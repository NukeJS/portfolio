<template>
  <div class="w-full">
    <section>
      <RcContainer :padding="false" class="py-14 sm:py-20 md:py-28 lg:py-32">
        <div class="text-center">
          <h2
            class="text-4xl font-semibold tracking-tight text-gray-800 md:text-5xl"
          >
            {{ project.name }}
          </h2>
          <p
            class="max-w-2xl mx-auto mt-2 text-gray-500 md:text-lg sm:mt-3 md:mt-4"
          >
            {{ project.description }}
          </p>
          <div class="flex justify-center mt-6 sm:mt-8">
            <RcBtn
              color="black"
              :href="`https://github.com/CodingWithNuke/${project.github_slug}/`"
              target="_blank"
              rel="noopener noreferrer"
              class="shadow-md hover:shadow-lg translate hover:-translate-y-1"
            >
              <IconGithub class="w-6 h-6 mr-2" /> <span>GitHub</span>
            </RcBtn>
          </div>
        </div>
        <div class="mt-10 sm:mt-12 md:mt-16">
          <div class="aspect-w-16 aspect-h-9">
            <NuxtImg
              :src="project.image_url"
              preset="blog"
              class="object-cover w-full border shadow-lg rounded-xl"
              alt="Thumbnail image"
            />
          </div>
        </div>
      </RcContainer>
    </section>
    <section class="even:bg-indigo-600">
      <RcContainer :padding="false" class="py-14 sm:py-20 md:py-28 lg:py-32">
        <div class="text-center">
          <h2
            class="text-4xl font-semibold tracking-tight text-gray-50 md:text-5xl"
          >
            Tech Stack.
          </h2>
          <p
            class="max-w-2xl mx-auto mt-2 text-gray-200 md:text-lg sm:mt-3 md:mt-4"
          >
            Technologies that I used to build this project.
          </p>
        </div>

        <div
          class="grid grid-cols-2 gap-6 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        >
          <TechnologyCard
            v-for="(technology, idx) in project.technologies"
            :key="idx"
            :technology="technology"
          />
        </div>
      </RcContainer>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import projects from '~/data/projects.json'
import { Project } from '~/components/ProjectCard.vue'

import { meta } from '~/utils/meta'

export default Vue.extend({
  head() {
    return meta({
      title: this.project.name,
      description: this.project.description,
      path: `/projects/${this.project.slug}`,
    })
  },

  asyncData({ params, error }) {
    const project = (projects as Project[]).find(
      (p) => p.slug === params.slug && !p.hidden
    )

    if (!project) {
      error({ statusCode: 404, message: 'This project could not be found' })
    }

    return {
      project,
    }
  },

  data: () => ({
    project: {} as Project,
  }),
})
</script>
