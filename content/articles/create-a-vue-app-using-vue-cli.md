---
title: How to Create a Vue Application using Vue CLI
description: Learn how you can make a Vue application using Vue CLI.
thumbnail: /images/blog/thumbnails/vue-cli.png
draft: false
---

##  Getting Started

Before we start on creating the application, you will need a few things.

1.  Have NPM & Node.js installed (or you can use Yarn instead of NPM)
2.  Have `@vue/cli` installed

If you haven't installed NPM and Node.js yet, you can go through [this](/blog/install-nodejs-and-npm) blog post on how to.

### Installing `@vue/cli`

The Vue CLI is used to create new Vue applications and to easily add plugins to your application.

```bash
# Using NPM
npm install -g @vue/cli

# Using Yarn
yarn global add @vue/cli
```

After installation, you will have access to the `vue` command in your command line. You can verify that it is properly installed by running `vue`, which should show you a help message listing all available commands.

You can check that you have the right version installed by running this command:
```bash
vue --version
```

### Upgrading `@vue/cli`

To upgrade the global Vue CLI package, you can run this command:

```bash
# Using NPM
npm update -g @vue/cli

# Using Yarn
yarn global upgrade --latest @vue/cli
```

You can read more about how to use the Vue CLI on their [website](https://cli.vuejs.org/guide/installation.html).

## Creating the Vue Application

We will start by running the following command:

```bash
vue create my-vue-app
```

### Preset

It will now prompt you with a few questions:
```
Vue CLI v4.5.13
? Please pick a preset: (Use arrow keys)
> Default ([Vue 2] babel, eslint)
  Default (Vue 3) ([Vue 3] babel, eslint)
  Manually select features
```

- `Default ([Vue 2] babel, eslint)` is a default preset for Vue 2.
- `Default (Vue 3) ([Vue 3] babel, eslint)` is a default preset for Vue 3.
- `Manually select features` choosing this option, you can (as it says) manually select the features you want.

I prefer to pick the `Manually select features` option.

### Features

Next it will ask you with features you want to add to your project:

```
Vue CLI v4.5.13
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
> (*) Choose Vue Version
  (*) Babel
  ( ) TypeScript
  ( ) Progressive Web App (PWA) Support
  ( ) Router
  ( ) Vuex
  ( ) CSS Pre-processors
  (*) Linter / Formatter
  ( ) Unit Testing
  ( ) E2E Testing
```

I'll go over what each of these options mean.

- **Choose Vue Version** basically means that you can decide which version of Vue you want to use. You can pick either **Vue 2** or **Vue 3**.
- **Babel** this adds babel to the project.
- **TypeScript** this adds TypeScript support to the project.
- **Progressive Web App (PWA) Support** makes it possible for you to make your web app a PWA.
- **Router** this adds `vue-router` to the project.
- **Vuex** this adds `vuex` to the project, this is used for state management.
- **CSS Pre-processors** this allows you to choose which CSS Pre-processor you want to use (SASS, LESS, etc...).
- **Linter/Formatter** this allows you to choose which linter and/or formatter you want to use.
- **Unit Testing** this adds Unit Testing to the project.
- **E2E Testing** this adds E2E Testing to the project.

Most of the time I pick the following:

- **Choose Vue Version** > Vue 2 or Vue 3, depends on which version I need
- **Babel**
- **TypeScript**
- **Router** — I only ever pick this if I need routing
- **Vuex**
- **CSS Pre-processors** > SASS/SCSS
- **Linter/Formatter** > ESLint with error prevention only

After you've picked the features that you'll want it will ask you questions about those features. Answer them as how you want them.

The Vue CLI will now create your project...

Once created, use these commands:
```bash
cd my-vue-app
npm run serve
```

This will open your Vue application on http://localhost:8080. If there's already something running on port `8080`, it will just increase the default port `8080` by 1.

---

And that's how you can create a Vue application using Vue CLI.