import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  ssr: true,
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - RonnieCodes",
    title: "RonnieCodes",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "I'm a guy that is fond of creating full stack web apps.I'm currently based in the Netherlands. I create modern and functional web apps."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Web Development, Full Stack, Ronnie, RonnieCodes, Web Developer, Node.js, Vue.js, Nuxt.js, Node.js Developer"
      },

      {
        hid: "og:url",
        property: "og:url",
        content: "https://ronniecodes.com"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "I'm a guy that is fond of creating full stack web apps.I'm currently based in the Netherlands. I create modern and functional web apps."
      },

      { name: "twitter:site", content: "@TheCodingNuke" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://ronniecodes.com"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "I'm a guy that is fond of creating full stack web apps.I'm currently based in the Netherlands. I create modern and functional web apps."
      },

      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-config", content: "/favicons/browserconfig.xml" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicons/apple-touch-icon.png"
      },
      { rel: "icon", type: "image/png", href: "/favicons/favicon-32x32.png" },
      { rel: "icon", type: "image/png", href: "/favicons/favicon-16x16.png" },
      {
        rel: "mask-icon",
        href: "/favicons/safari-pinned-tab.svg",
        color: "#6366f1"
      },
      { rel: "shortcut icon", href: "/favicons/favicon.ico" },

      // Font Family
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/rc-ui.ts" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/composition-api/module",

    "@nuxt/typescript-build",

    "@nuxt/image",

    "@nuxtjs/color-mode",

    "@nuxtjs/tailwindcss"
  ],

  colorMode: {
    classSuffix: ""
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content", "@nuxtjs/axios", "@nuxtjs/pwa", "@nuxtjs/sitemap"],

  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css"
      }
    }
  },

  axios: {},

  pwa: {
    manifest: {
      lang: "en",
      name: "ronniecodes.com",
      short_name: "ronniecodes",
      theme_color: "#6366f1"
    }
  },

  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://ronniecodes.com"
  },

  generate: {
    fallback: true,

    async routes() {
      const { $content } = require("@nuxt/content");
      const files = await $content({ deep: true })
        .where({ draft: false })
        .only(["path"])
        .fetch();

      return files.map((file: any) =>
        file.path === "/index" ? "/" : file.path
      );
    }
  },

  hooks: {
    "content:file:beforeInsert": document => {
      if (document.extension == ".md") {
        const readingTime = require("reading-time")(document.text);

        document.readingTime = readingTime;
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};

export default config;
