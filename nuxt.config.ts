import * as meta from './data/meta';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: meta.title,
      meta: [
        // Favicon stuff
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'theme-color', content: '#ec4899' },

        // Basic meta
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        // Favicons
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
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          color: '#8b5cf6',
          href: '/safari-pinned-tab.svg',
        },
      ],
    },
  },

  components: [
    '~/components',
    '~/components/common',
    '~/components/icons',
    '~/components/layout',
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
      },
    ],
  ],

  build: {
    transpile: ['@heroicons/vue', '@headlessui/vue'],
  },

  vite: {
    optimizeDeps: {
      exclude: ['@heroicons/vue', '@headlessui/vue'],
    },
  },
});
