import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  typescript: {
    shim: false,
  },

  app: {
    head: {
      title: "NukeJS",
      meta: [
        {
          name: "description",
          content:
            "A full-stack developer based in the Netherlands, that builds modern and functional web applications.",
        },
        {
          name: "msapplication-TileColor",
          content: "#ffffff",
        },
        {
          name: "theme-color",
          contnet: "#ffffff",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
        {
          rel: "mask-icon",
          color: "#8b5cf6",
          href: "/safari-pinned-tab.svg",
        },

        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  css: ["~/assets/css/tailwind.css"],

  components: [
    "~/components",
    "~/components/common",
    "~/components/layout",
    "~/components/modals",
  ],

  modules: ["@nuxtjs/color-mode", "@nuxt/content"],

  colorMode: {
    classSuffix: "",
  },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
