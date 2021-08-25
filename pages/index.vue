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
        >
          My Projects
        </rc-btn>
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