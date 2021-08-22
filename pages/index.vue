<template>
  <rc-container>
    <section class="max-w-full py-12 sm:py-16 md:py-20">
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
        class="max-w-2xl mt-6 mb-8 text-lg text-gray-500 dark:text-gray-300 sm:mt-8 sm:mb-10"
      >
        I'm a guy that is fond of creating full-stack web apps. I'm currently
        based in the Netherlands. I create modern and functional web apps.
      </p>

      <div class="flex space-y-4 sm:space-y-0">
        <rc-btn
          nuxt
          to="/projects"
          class="flex-none w-full px-6 py-3 text-xl font-medium leading-6 text-white bg-indigo-600 rounded-md shadow-lg hover:bg-indigo-700 sm:rounded-full sm:w-auto"
          >My Projects</rc-btn
        >
      </div>
    </section>

    <section class="max-w-full py-12 sm:py-16 md:py-20">
      <h2
        class="text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
      >
        My <span class="text-indigo-600 dark:text-indigo-500">Stack</span>.
      </h2>

      <div class="grid gap-4 mt-6 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
        <SkillCard
          v-for="(skill, index) in skills"
          :key="index"
          :skill="skill"
        />
      </div>
    </section>

    <section class="max-w-full py-12 sm:py-16 md:py-20">
      <h2
        class="text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
      >
        <span class="text-indigo-600 dark:text-indigo-500">Contact</span> Me.
      </h2>

      <div class="mt-6 sm:mt-10">
        <div class="flex items-center gap-4">
          <rc-btn
            href="https://github.com/CodingWithNuke"
            target="_blank"
            class="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-full shadow hover:bg-indigo-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
              ></path>
            </svg>
          </rc-btn>
          <rc-btn
            :href="`mailto:${email}`"
            class="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-full shadow hover:bg-indigo-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </rc-btn>
        </div>

        <p
          class="max-w-2xl mt-4 text-lg font-medium text-gray-500 dark:text-gray-300 sm:mt-8"
        >
          You can send me an e-mail at
          <a
            class="text-indigo-600 dark:text-indigo-400"
            :href="`mailto:${email}`"
            v-text="email"
          >
          </a
          >.
        </p>
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
        name: "JavaScript",
        description:
          "JavaScript is the main programming language I use to create all my web applications with."
      },
      {
        image: "/images/skills/typescript.svg",
        name: "TypeScript",
        description:
          "TypeScript is JavaScript but it adds static typing to the language."
      },
      {
        image: "/images/skills/vuejs.svg",
        name: "Vue.js",
        description:
          "Vue.js is a JavaScript framework which allows me to easily create highly interactive web applications."
      },
      {
        image: "/images/skills/nuxtjs.svg",
        name: "Nuxt.js",
        description:
          "Nuxt.js is a Vue.js framework, it allows me to create server-side rendered or statically generated web applications."
      },
      {
        image: "/images/skills/sass.svg",
        name: "SASS/SCSS",
        description: "SASS/SCSS lets me write CSS faster and with superpowers."
      },
      {
        image: "/images/skills/tailwindcss.svg",
        name: "Tailwind CSS",
        description: "Tailwind CSS is the CSS framework I use the most."
      },
      {
        image: "/images/skills/mongodb.svg",
        name: "MongoDB",
        description:
          "MongoDB is the database program I use for most of my applications that require a back-end."
      },
      {
        image: "/images/skills/expressjs.svg",
        name: "Express.js",
        description:
          "Express.js is a Node.js framework. It lets me create back-end applications with ease."
      }
    ]
  })
});
</script>