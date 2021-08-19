---
title: How to Install Tailwind CSS in Nuxt.js
description: A quick guide on how to install Tailwind CSS in your Nuxt.js project.
keywords: Tailwind, Nuxt, Nuxt.js, JavaScript, How To
thumbnail: /blog/install-tailwind-css-in-nuxt-js/thumbnail.png
date: 2021-08-19
draft: false
---

## Getting Started

First we need to generate a Nuxt.js project.

*You can skip this part if you already generated a project.*

```bash
npx create-nuxt-app my-cool-app
```

Then follow the prompts...

Next, navigate into the project directory and install `@nuxtjs/tailwindcss` as well as Tailwind and its peer-dependencies.

```bash
cd my-cool-app
npm install -D @nuxtjs/tailwindcss tailwindcss@latest postcss@latest autoprefixer@latest
```

Add the `@nuxtjs/tailwindcss` module to the `buildModules` option of your `nuxt.config.js` file:

```js
// nuxt.config.js
export default {
  // ...
  buildModules: ['@nuxtjs/tailwindcss']
  // ...
}
```

Next, generate your `tailwind.config.js`.

```bash
npx tailwindcss init
```

Open the `tailwind.config.js` file and change the contents to the following:

```js
module.exports = {
  purge: [
     './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

Next, open the `./assets/css/tailwind.css` file that Nuxt.js generates for you by default and replace the contents to the following:

```css
/* ./assets/css/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

And we're finished! Now when you execute `npm run dev`, Tailwind CSS will be ready to be used in your project.