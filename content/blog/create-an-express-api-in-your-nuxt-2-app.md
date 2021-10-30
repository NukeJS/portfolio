---
title: Create an Express API in your Nuxt 2 Application
description: Learn how you can create an Express API in your Nuxt 2 application.
keywords: Express, Express.js, Nuxt, Nuxt.js, Nuxt 2, Nuxt.js 2, API, REST, Node, Node.js
thumbnail: /blog/create-an-express-api-in-your-nuxt-2-app/thumbnail.png
date: 2021-10-30
draft: false
---

## Getting Started

Create a folder called `api` in your project's root directory.

Install Express:

```bash
# Using NPM
npm install express
# Using Yarn
yarn add express
```

## Creating a Basic API

Create an `index.js` file in the `api` folder.

In the `index.js` file put the following:

```js [api/index.js]
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
```

Notice that on line 12 we export the Express application. This is needed so Nuxt can use our API.

## Registering the Express API to Nuxt

Open your `nuxt.config.js` and add the following entry to the `serverMiddleware` property:

```js
export default {
  // ...
  serverMiddleware: [
    // ...
    {
      path: "/api",
      handler: "~/api"
    }
    // ...
  ]
  // ...
}
```

The `path` property assigns the given value as the path of the api, so if you make it `/server` the API will map to `/server`.

Now when you navigate to `/api`, it will display `Hello World!`.

## Further Information

You can also extend the API with adding database support, controllers, etc...