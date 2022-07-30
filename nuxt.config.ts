import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

import meta from './meta.json'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: meta.title,
      meta: [
        // Favicon stuff
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'theme-color', content: '#ec4899' },

        // Basic meta
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        // Favicons
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        },
        {
          rel: 'mask-icon',
          color: '#8b5cf6',
          href: '/safari-pinned-tab.svg'
        },

        // Fonts
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
        }
      ]
    }
  },

  components: [
    '~/components',
    '~/components/common',
    '~/components/icons',
    '~/components/layout'
  ],

  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/image-edge'],

  content: {
    highlight: {
      theme: 'material-darker'
    }
  },

  typescript: {
    shim: false
  },

  vite: {
    plugins: [eslintPlugin()]
  },

  build: {
    transpile: ['@heroicons/vue']
  }
})
