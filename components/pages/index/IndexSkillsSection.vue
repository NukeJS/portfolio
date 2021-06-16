<template>
  <section class="max-w-full py-12 sm:py-16 md:py-20">
    <h2
      class="text-gray-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none"
    >
      My <span class="text-indigo-600 dark:text-indigo-500">Stack</span>.
    </h2>

    <div
      class="mt-6 sm:mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8"
    >
      <div
        v-for="(skill, skillIndex) in skills"
        :key="skillIndex"
        class="flex items-start space-x-4 px-3 py-3 rounded-md border dark:border-gray-700"
      >
        <div class="w-14 h-14 flex-none flex items-center justify-center">
          <img :src="skill.image" :alt="`${skill.name} Logo`" />
        </div>
        <div class="flex-auto">
          <h3
            class="text-gray-900 dark:text-gray-200 font-bold text-lg"
            v-text="skill.name"
          ></h3>
          <p
            class="text-gray-500 dark:text-gray-400 mt-1 leading-snug"
            v-text="skill.description"
          ></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
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
          "Nuxt.js is a Vue.js framework, it allows me to create server-side rendered or statically generated web applications. Which are better for SEO."
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
};
</script>