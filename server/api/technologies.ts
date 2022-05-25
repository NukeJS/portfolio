export default defineEventHandler((event) => {
  return [
    {
      title: "Front-end",
      items: [
        { name: "HTML", image: "html" },
        { name: "CSS", image: "css" },
        { name: "SASS/SCSS", image: "sass" },
        { name: "TypeScript", image: "typescript" },
        { name: "JavaScript", image: "javascript" },
        { name: "Node.js", image: "node" },
        { name: "Tailwind CSS", image: "tailwindcss" },
        { name: "Vue.js", image: "vue" },
        { name: "Nuxt.js", image: "nuxt" },
        { name: "Solid.js", image: "solid" },
      ],
    },
    {
      title: "Back-end",
      items: [
        { name: "Node.js", image: "node" },
        { name: "Express.js", image: "express" },
        { name: "PHP", image: "php" },
        { name: "Laravel", image: "laravel" },
        { name: "MySQL", image: "mysql" },
        { name: "MongoDB", image: "mongodb" },
      ],
    },
  ];
});
