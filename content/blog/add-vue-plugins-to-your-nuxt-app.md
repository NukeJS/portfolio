---
title: Add Vue Plugins to your Nuxt App
description: A quick guide on how to add Vue plugins to your Nuxt app.
keywords: Vue, Vue plugins, Nuxt, plugin, Nuxt plugins
thumbnail: blog/add-vue-plugins-to-your-nuxt-app/thumbnail.png
date: 2021-09-13
draft: false
---

## Installing the NPM Package

For this guide I will be using the [Vue Tooltip Plugin](https://github.com/Akryum/v-tooltip).

<client-only>
<code-group>
  <code-block label="NPM" active>
  
  ```bash
  npm install v-tooltip
  ```
  
  </code-block>
  <code-block label="Yarn">
  
  ```bash
  yarn add v-tooltip
  ```
  
  </code-block>
</code-group>
</client-only>

## Creating the Nuxt Plugin

To use Vue plugins in Nuxt, we need to create a Nuxt plugin. We can do this by creating a new file in the `~/plugins` folder. Let's create a file named `v-tooltip.js` where we Import Vue register the plugin:

```js
// ~/plugins/v-tooltip.js

import Vue from "vue";
import VTooltip from "v-tooltip";

Vue.use(VTooltip);
```

## Registering the Plugin

To register the plugin we simply add the file path to the `plugins` array in our `nuxt.config.js` file.

```js
// ~/nuxt.config.js

export default {
  // ...
  plugins: [
    // ...
    "~/plugins/v-tooltip.js"
    // ...
  ]
  // ...
}
```

You can now use the plugin as defined in its documentation.

## Using Client Side Plugins

If you want to use a plugin that needs access to the window object or document, then you will need to let Nuxt know that the plugin is client side only. You can do this by adding `.client.js` as the file extension to your plugin. This lets Nuxt know that the plugin shouldn't be used server-sided but client-sided.

## Useful Links

- [Vue Tooltip Plugin](https://github.com/Akryum/v-tooltip)
- [Nuxt Vue Plugin Documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins#vue-plugins)