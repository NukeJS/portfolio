export default defineEventHandler(_event => {
  return [
    {
      name: 'portfolio',
      description:
        'My personal portfolio website, built using Nuxt.js & Tailwind CSS.',
      github_slug: 'portfolio',
      website_url: 'https://nukejs.dev'
    },
    {
      name: 'solidjs-hooks',
      description: 'A collection of useful SolidJS hooks.',
      github_slug: 'solidjs-hooks'
    },
    {
      name: 'todo-lists',
      description:
        'Todo lists that are built using a variety of JavaScript frameworks/libraries.',
      github_slug: 'todo-lists'
    },
    {
      name: 'laravel-error-store-composition-api',
      description:
        'A Vue 3 Laravel error store made using the Composition API.',
      github_slug: 'laravel-error-store-composition-api',
      blog_slug: 'create-laravel-error-store-in-vue'
    },
    {
      name: 'axios-loading-store-composition-api',
      description:
        'A Vue 3 Axios loading store made using the Composition API.',
      github_slug: 'axios-loading-store-composition-api',
      blog_slug: 'create-an-axios-loading-store-in-vue'
    },
    {
      name: 'modmail-bot',
      description: 'A Discord modmail bot made with Discord.js',
      github_slug: 'modmail-bot'
    },
    {
      name: 'laravel-vite-vue-spa-template',
      description: 'A Laravel 9, Vite, Vue 3 SPA (w/ Vue Router), Tailwind CSS (w/ Forms Plugin & Aspect Ratio Plugin), Axios, Headless UI, Heroicons & TypeScript starter template.',
      github_slug: 'laravel-vite-vue-spa-template'
    },
    {
      name: 'laravel-vite-svelte-spa-template',
      description: 'A Laravel 9, Vite, Svelte SPA, Tailwind CSS (w/ Forms Plugin & Aspect Ratio Plugin), Axios & TypeScript starter template.',
      github_slug: 'laravel-vite-svelte-spa-template'
    },
    {
      name: 'laravel-vite-react-spa-template',
      description: 'A Laravel 9, Vite, React SPA, Tailwind CSS (w/ Forums Plugin & Aspect Ratio Plugin), Axios & TypeScript starter template.',
      github_slug: 'laravel-vite-react-spa-template'
    },
    {
      name: 'laravel-vite-solid-spa-template',
      description: 'A Laravel 9, Vite, Solid SPA, Tailwind CSS (w/ Forms Plugin & Aspect Ratio Plugin), Axios & TypeScript starter template.',
      github_slug: 'laravel-vite-solid-spa-template'
    }
  ]
})
