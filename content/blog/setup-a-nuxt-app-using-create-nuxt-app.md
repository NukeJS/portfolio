---
title: How to Setup a Nuxt.js Application using Create Nuxt App
description: A quick guide on how to set up a Nuxt.js application using Create Nuxt App.
keywords: Nuxt, Nuxt.js, Vue, Vue.js, JavaScript, JS, Front-end, Create Nuxt App, Node, Node.js
thumbnail: /blog/setup-a-nuxt-app-using-create-nuxt-app/thumbnail.png
date: 2021-07-26
draft: false
---

## Prerequisites

- Have [Node.js](/blog/install-nodejs-and-npm) installed, I recommend you have the latest LTS version installed.

## Getting Started

Open your terminal of choice.

> Make sure you have npx installed (npx is shipped by default since npm v5.2.0) or npm v6.1 or yarn.

Using Yarn:

```bash
yarn create nuxt-app <project-name>
```

Using NPX:

```bash
npx create-nuxt-app <project-name>
```

Using NPM:

```bash
npm init nuxt-app <project-name>
```

It will ask you some questions: project name, Nuxt options, UI framework, TypeScript, linter, testing framework, etc... To learn more about what all these options mean you can read the `README.md` of Create Nuxt App [here](https://github.com/nuxt/create-nuxt-app)

Once all questions have been answered, it will install all the required dependencies.

You can now navigate to the project folder and start coding!