---
title: How to Install Tailwind CSS in SolidJS
description: A quick guide on how to install Tailwind CSS in your SolidJS project.
keywords: Tailwind, Solid, Solid.js, solid-js, Vite, Vite.js, JavaScript, How To
thumbnail: /blog/install-tailwind-css-in-solid-js/thumbnail.png
date: 2021-08-18
draft: false
---

## Getting Started

First we need to generate a Solid project.

*You can skip this part if you already generated a project.*

```bash
# If you wish to use JavaScript
npx degit solidjs/templates/js my-cool-app

# If you wish to use TypeScript
npx degit solidjs/templates/ts my-cool-app
```

Next, navigate into your project directory and install the dependencies.

```bash
cd my-cool-app
npm install
```

Next, we need to install Tailwind CSS, PostCSS & Autoprefixer.

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Next, generate your `tailwind.config.js` and `postcss.config.js` file.

```bash
npx tailwindcss init -p
```

Open your `tailwind.config.js` file and change the contents to the following:

```js
module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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

Next, we need to import Tailwind CSS' styles in our `index.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Finally, check if your CSS file is being imported in your `src/index.js` (or `src/index.ts` when using TypeScript) file.
