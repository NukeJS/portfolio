---
title: Change Markdown Code Highlight Theme in Nuxt Content Module
description: A quick guide on how to change your code highlighting theme in the Nuxt content module.
keywords: Blog, Nuxt, Content, Module, @nuxt/content, How To, Prism, Prism Themes, Themes, Highlight.js
labels: Nuxt
thumbnail: /blog/change-markdown-code-highlight-theme-in-nuxt-content-module/thumbnail.png
date: 2021-09-06
draft: false
---

## Using Prism Themes

First, install `prism-themes`.

```bash [terminal]
# Using NPM
npm install prism-themes
# Using Yarn
yarn add prism-themes
```

Next, edit the `content.markdown.prism.theme` property in `nuxt.config.js` to the desired theme, for example:

```js [nuxt.config.js]
export default {
  // ...
  markdown: {
    prism: {
      theme: "prism-themes/themes/prism-material-oceanic.css"
    }
  }
  // ...
}
```

[Here's](https://github.com/PrismJS/prism-themes) a list of all available Prism themes.