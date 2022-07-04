import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'NukeJS',
      titleTemplate: '%s - NukeJS',
      meta: [
        {
          name: 'msapplication-TileColor',
          content: '#ffffff'
        },
        {
          name: 'theme-color',
          contnet: '#ffffff'
        },

        {
          name: 'description',
          content:
            'A full-stack developer based in the Netherlands, that builds modern and functional web applications.'
        }
      ],
      link: [
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

  components: ['~/components', '~/components/common', '~/components/layout'],

  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],

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
