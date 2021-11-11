import { NuxtConfig } from '@nuxt/types'

import { format } from 'date-fns'

import meta from './meta.json'

export default {
  ssr: true,
  target: 'static',

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
    ],
  },

  loading: {
    color: '#6366f1',
  },

  css: ['~/assets/global.scss'],

  plugins: ['~/plugins/rc-ui'],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-webpack-optimisations'
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

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    'nuxt-protected-mailto',
    '@nuxtjs/robots',
    '@nuxtjs/google-fonts'
  ],

  axios: {
    baseURL:
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:7000'
        : 'https://api.ronniecodes.com',
  },

  pwa: {
    manifest: {
      lang: 'en',
      name: 'ronniecodes.com',
      short_name: 'ronniecodes',
      theme_color: '#6366f1',
    },
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://ronniecodes.com',
  },

  googleFonts: {
    display: 'swap',
    families: {
      Poppins: [500, 600, 700, 800, 900],
      'DM+Sans': [400, 500, 700]
    }
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

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension == '.md') {
        const readingTime = require('reading-time')(document.text)

        document.readingTime = readingTime
        document.formattedDate = format(document.date, 'PPP')
      }
    },
  },

  build: {},
} as NuxtConfig
