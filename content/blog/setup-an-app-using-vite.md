---
title: How to Setup an Application using Vite
description: Learn how you can set up a React, Vue, Svelte, or vanilla JavaScript app using Vite.
keywords: Vite, Vite.js, Vue, Vue.js, React, React.js, Svelte, JavaScript, JS, TypeScript, TS, Node, Node.js
thumbnail: /blog/setup-an-app-using-vite/thumbnail.png
date: 2021-07-27
draft: false
---

## Prerequisites

- Have [Node.js](https://nodejs.org/en/) installed, I recommend you have the latest LTS version installed.

## Getting Started

<alert>

**Compatibility Note**

Vite requires [Node.js](https://nodejs.org/en/) version `>=12.0.0`.

</alert>

Open your terminal of choice.

```bash
# Using NPM
npm init vite@latest
# Using PNPM
pnpx create-vite
# Using Yarn
yarn create vite
```

It will then ask you what project should be called and which template you want to use.

Now you want to move into the project's directory and run:

```bash
# Using NPM
npm install
# Using Yarn
yarn
```

You can also directly specify the project name and the template you want to use via additional command-line options. For example, to scaffold a Vite + React TypeScript project, run:

```bash
# Using NPM v6.x
npm init vite@latest my-react-ts-app --template react-ts
# Using NPM v7+
npm init vite@latest my-react-ts-app -- --template react-ts
# Using Yarn
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