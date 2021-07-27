---
title: How to Setup an Application using Vite
description: Learn how you can set up a React, Vue, Svelte, or vanilla JavaScript app using Vite.
keywords: Vite, Vite.js, Vue, Vue.js, React, React.js, Svelte, JavaScript, JS, TypeScript, TS, Node, Node.js
thumbnail: /images/blog/thumbnails/vite.png
date: 2021-07-27
draft: false
---

## Prerequisites

- Have [Node.js](/blog/install-nodejs-and-npm) installed, I recommend you have the latest LTS version installed.

## Getting Started

> **Compatibility Note**: Vite requires [Node.js](https://nodejs.org/en/) version >=12.0.0.

Open your terminal of choice.

Using NPM:

```bash
npm init vite@latest
```

Using Yarn:

```bash
yarn create vite
```

Using PNPM:

```bash
pnpx create-vite
```

It will then ask you what project should be called and which template you want to use.

You can aslo directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + React TypeScript project, run:

```bash
# npm 6.x
npm init vite@latest my-react-ts-app --template react-ts

# npm 7+
npm init vite@latest my-react-ts-app -- --template react-ts

# yarn
yarn create vite my-react-ts-app --template react-ts
```

Supported template presets inlude (at the moment of writing this article):

- `vanilla`
- `vanilla-ts`
- `vue`
- `vue-ts`
- `react`
- `react-ts`
- `preact`
- `preact-ts`
- `lit-element`
- `lit-element-ts`
- `svelte`
- `svelte-ts`

For more information about Vite, read through their [guide](https://vitejs.dev/guide).