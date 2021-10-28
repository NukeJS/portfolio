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
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#6366f1' },

      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap',
      },
    ],
  },

  loading: {
    color: '#6366f1',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/global.scss'],

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
    '@nuxt/image',
  ],

  image: {
    presets: {
      blog: {
        modifiers: {
          format: 'webp',
          fit: 'cover',
          quality: 60,
        },
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:7000'
        : 'https://api.ronniecodes.com',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
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

  i18n: {
    baseUrl: meta.url,
    vueI18n: {
      fallbackLocale: 'en',
    },
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.ts' },
      { code: 'nl', iso: 'nl-NL', file: 'nl.ts' },
    ],
    defaultLocale: 'en',
    langDir: '~/locales/',
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
