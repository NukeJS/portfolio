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
    }
  ]
})
