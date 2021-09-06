---
title: Change Markdown Code Highlight Theme in Nuxt Content Module
description: A quick guide on how to change your code highlighting theme in the Nuxt content module.
keywords: Blog, Nuxt, Content, Module, @nuxt/content, How To, Prism, Prism Themes, Themes, Highlight.js
thumbnail: /blog/change-markdown-code-highlight-theme-in-nuxt-content-module/thumbnail.png
date: 2021-09-06
draft: false
---

## Using Prism Themes

First, install `prism-themes`.

<client-only>
<code-group>
  <code-block label="NPM" active>

  ```bash
  npm install prism-themes
  ```

  </code-block>
  <code-block label="Yarn">

  ```bash
  yarn add prism-themes
  ```

  </code-block>
</code-group>
</client-only>

Next, edit the `content.markdown.prism.theme` property in `nuxt.config.js` to the desired theme, for example:

```js
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