---
title: Create a Blog using Nuxt Content Module
description: A guide on how you can create your own blog in Nuxt.js using the Nuxt Content module.
keywords: Blog, Nuxt, Content, Module, @nuxt/content, How To
thumbnail: /blog/create-a-blog-using-nuxt-content-module/thumbnail.png
date: 2021-09-02
draft: false
---

## Installing the Nuxt Content Module

*Don't have an existing Nuxt project yet? Follow [this](/blog/setup-a-nuxt-app-using-create-nuxt-app) quick guide on how to.*

Open your terminal in your Nuxt project and install the `@nuxt/content` package:

```bash
# Using NPM
npm install @nuxt/content
# Using Yarn
yarn add @nuxt/content
```

Now, open your project in your preferred editor of use.

Open the `nuxt.config.js` file and add `@nuxt/content` to the modules array.

```js
export default {
  // ...
  modules: [
    // ...
    '@nuxt/content'
    // ...
  ]
  // ...
};
```

## Writing Content for the Blog

Create a `content` folder in the root directory of your Nuxt project, and inside of that folder create a `blog` folder.

Create a markdown file inside of the `content/blog` folder, for example `first-post.md`.

Inside of `first-post.md` put the following:

```md
---
title: First Blog Post Made using the Nuxt Content Module
description: This is my very first blog post that makes use of the Nuxt Content module.
---

## This is a H2 Heading

This is a paragraph with a [link](/) that directs to the homepage
```

## Displaying your Content

Create a `blog` folder inside of your `pages` folder, and inside of that folder create an `index.vue` and `_slug.vue` file.

Open the `index.vue` file that's inside of the `pages/blog` folder and put the following inside of it:

```vue
<template>
  <div>
    <h1>My Blog Posts</h1>

    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="`/blog/${post.slug}`">
          <h3>{{post.title}}</h3>
          <p>{{post.description}}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content }) {
      const posts = await $content("blog")
        .only(["slug", "title", "description"])
        .fetch();

      return {
        posts
      }
    }
  }
</script>
```

I'll explain what the code above does.

The `asyncData` uses the `$content` module function, since we passed `blog` as the param in `$content()`, it will fetch all posts from the `content/blog` folder. Using the `only` chainable function, we tell the content module to only fetch the `slug`, `title`, and `description` of the posts. We finish off the fetch request by using the `fetch()` function to fetch the posts. We then return the array of posts in the `asyncData`.

In the HTML, we just loop over the posts data and display it nicely.

If you now navigate to http://localhost:3000/blog, it shows you a list of posts.

## Displaying a Single Post

Open the `pages/blog/_slug.vue` file and put the following inside of it:

```vue
<template>
  <article>
    <h1>{{ post.title }}</h1>

    <p>post.description</p>

    <nuxt-content :document="post" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const post = await $content("blog", params.slug)
      .fetch()
      .catch(() => {
        error({
          statusCode: 404,
          message: "This post could not be found"
        });
      });

    return {
      post
    };
  }
};
</script>
```

Again, I'll explain what the code above does.

The `asyncData` uses the `$content` module function to fetch the post from `content/blog` with the current URL parameter of `slug`. If it can't find it, it will throw an error and redirect you to the error page.

In the HTML, we use the custom `<nuxt-document/>` component to display the post as HTML.

## Useful Links

Here are some useful links that can help you make an even better blog!

- [Nuxt](https://nuxtjs.org/)
- [Nuxt Content Module](https://content.nuxtjs.org/)
- [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography)

## Source Code

You can find the source code of this article on [GitHub](https://github.com/CodingWithNuke/nuxt-content-example).