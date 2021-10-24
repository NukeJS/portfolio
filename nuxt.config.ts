import { NuxtConfig } from '@nuxt/types'

import meta from './meta.json'

export default {
  ssr: true,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - RonnieCodes',
    title: meta.title,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: meta.description },
      { hid: 'keywords', name: 'keywords', content: meta.keywords },

      { hid: 'og:url', name: 'og:url', content: meta.url },
      {
        hid: 'og:description',
        name: 'og:description',
        content: meta.description,
      },

      { hid: 'twitter:site', name: 'twitter:site', content: meta.twitter.site },
      { hid: 'twitter:card', name: 'twitter:card', content: meta.twitter.card },
      { hid: 'twitter:url', name: 'twitter:url', content: meta.url },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: meta.description,
      },
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/rc-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    workbox: false,
    manifest: {
      lang: 'en',
      name: 'ronniecodes.com',
      short_name: 'ronniecodes',
      theme_color: '#6366f1',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  generate: {
    fallback: true,

    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true })
        .where({ draft: false })
        .only(['path'])
        .fetch()

      return files.map((file: any) =>
        file.path === '/index' ? '/' : file.path
      )
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
} as NuxtConfig
