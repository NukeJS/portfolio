<template>
  <rc-container>
    <section class="max-w-full py-12 text-center sm:py-16 md:py-20">
      <h1
        class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
      >
        Hi, I'm
        <span class="text-indigo-600 dark:text-indigo-500">Ronnie</span>. I'm a
        <span class="text-indigo-600 dark:text-indigo-500"
          >Full Stack Web Developer</span
        >.
      </h1>

      <p
        class="max-w-2xl mx-auto mt-6 mb-8 text-lg text-gray-500 dark:text-gray-300 sm:mt-10 sm:mb-12"
      >
        I'm a guy that is fond of creating full-stack web apps. I'm currently
        based in the Netherlands. I create modern and functional web apps.
      </p>

      <div
        class="flex-col justify-center space-y-4 sm:space-x-4 sm:flex-row sm:space-y-0"
      >
        <rc-btn
          nuxt
          to="/projects"
          class="flex-none w-full px-6 py-3 text-xl font-medium leading-6 text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 sm:w-auto"
        >
          My Projects
        </rc-btn>
        <rc-btn
          nuxt
          to="/projects"
          class="flex-none w-full px-6 py-3 text-xl font-medium leading-6 text-white bg-black rounded-full shadow-lg hover:bg-gray-600 dark:bg-white dark:text-black dark:hover:bg-gray-200 sm:w-auto"
        >
          My Blog
        </rc-btn>
      </div>
    </section>

    <section class="max-w-full py-12 sm:py-16 md:py-20">
      <h2
        class="text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
      >
        My <span class="text-indigo-600 dark:text-indigo-500">Stack</span>.
      </h2>

      <div class="grid gap-4 mt-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
        <rc-card
          v-for="(skill, index) in skills"
          :key="index"
          class="flex items-center px-3 py-3 space-x-4 bg-white border rounded shadow-sm dark:border-gray-700 dark:bg-gray-800"
        >
          <div class="flex items-center justify-center flex-none w-14 h-14">
            <nuxt-img :src="skill.image" :alt="`${skill.name} Logo`" />
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">
            {{ skill.name }}
          </h3>
        </rc-card>
      </div>
    </section>
  </rc-container>
</template>

<script lang="ts">
import Vue from "vue";

import { mapMetaInfo } from "~/utils/helpers";

export default Vue.extend({
  head(): object {
    return mapMetaInfo({
      title: "Home",
      description:
        "I'm a guy that is fond of creating full stack web apps. I'm currently based in the Netherlands. I create modern and functional web apps.",
      path: "/"
    });
  },

  data: () => ({
    email: "contact.ronniecodes@gmail.com",
    skills: [
      {
        image: "/images/skills/javascript.svg",
        name: "JavaScript"
      },
      {
        image: "/images/skills/typescript.svg",
        name: "TypeScript"
      },
      {
        image: "/images/skills/vuejs.svg",
        name: "Vue.js"
      },
      {
        image: "/images/skills/nuxtjs.svg",
        name: "Nuxt.js"
      },
      {
        image: "/images/skills/reactjs.svg",
        name: "React.js"
      },
      {
        image: "/images/skills/sass.svg",
        name: "SASS/SCSS"
      },
      {
        image: "/images/skills/tailwindcss.svg",
        name: "Tailwind CSS"
      },
      {
        image: "/images/skills/mongodb.svg",
        name: "MongoDB"
      },
      {
        image: "/images/skills/expressjs.svg",
        name: "Express.js"
      }
    ]
  })
});
</script>