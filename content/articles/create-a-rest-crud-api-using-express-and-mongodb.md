---
title: How to Create a REST CRUD API using Express & MongoDB
description: Learn how you can create a REST CRUD API by making use of Express and MongoDB.
thumbnail: /images/blog/thumbnails/express-mongodb-nodejs.png
draft: false
---

## Getting Started

Before we begin writing any code, you will need a few things:

- Have Node.js & NPM installed, you can go through [this](/blog/how-to-install-nodejs-and-npm) blog post to see how to.

Once you have everything installed, open a terminal in your projects folder and run the following commands:

```bash
mkdir express-mongodb-api
cd express-mongodb-api
```

## Creating the Node.js Application

Create a `.env` file in the root folder. We will initialize the Node.js application with a `package.json` file:

```bash
npm init
```

This will ask you a some questions:

```
package name: (api)
version: (1.0.0)
description: Node.js REST CRUD API using Express and MongoDB
entry point: (index.js)
test command:
git repository:
keywords: express, mongodb, nodejs, rest, api
author: RonnieCodes
license: (ISC) MIT

Is this OK? (yes) yes
```

Once you've answered the questions, edit the scripts part of the `package.json`:

```json
{
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  }
}
```

Next, we need to install some packages:

```bash
npm install express mongoose cors morgan dotenv
```

```bash
npm install -D nodemon
```

I'll go over what each of these packages do:

- `express`: Express is the library we're gonna use to easily make REST APIs within Node.js.
- `mongoose`: Mongoose is a library which we're gonna use to connect with MongoDB.
- `cors`: Cors is a package that is needed for Cross-Origin Resource Sharing.
- `morgan`: Morgan is a logger middleware for Express.
- `dotenv`: Dotenv is used to create our own process environment variables.
- `nodemon`: Nodemon is used to auto restart your Express API on change.

Once installed, create a `src` folder in the root folder.

### Setup a Express Web Server

In the `src` folder, create a new file called `index.js`:

```js
// src/index.js
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Express API running on http://localhost:${port}`));
```

What we've done so far is:
- Imported `dotenv`, `express`, `morgan` and `cors`.
- Created an Express app, added morgan and cors middleware using `app.use(...)`
- Made the app listen on either the environment variable `PORT` set in the `.env` file or use `5000` if the environment variable isn't set.

### Configure and Setup MongoDB & Mongoose

In the `src` folder, we're gonna make a new folder called `database`. In this folder we will put the configuration to connect to our MongoDB database. Don't forget to create a new `.env` variable `MONGODB_URL` with your MongoDB connection URL:

```env
PORT=5000
MONGODB_URL=mongodb://localhost:27017/mevn-stack-crud-app
```

Create a `index.js` file in the `database` folder:

```js
//  src/database/index.js
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to the database...");
  }
});
```

On line `18` in your `index.js` file in the `src` folder, add the following line:

```js
// src/index.js
require('./database');
```

### Adding Error Handling Middleware

Before we start writing the post model and controller, let's first write some basic error handling middlewares.

Create a `middlewares` folder in the `src` folder. In there, create a `index.js`, `routeNotFound.js` and a `errorHandler.js` file.

In the `index.js` file put the following:

```js
// src/middlewares/index.js
exports.errorHandler = require('./errorHandler');
exports.routeNotFound = require('./routeNotFound');
```

In the `errorHandler.js` file put the following:

```js
// src/middlewares/errorHandler.js
module.exports = async (error, req, res, next) => {
  res.status(error.status || res.statusCode == 200 ? 500 : res.statusCode);

  return res.json({
    message: error.message || "An error occurred...",
  });
};

```

And in the `routeNotFound.js` file put the following:

```js
// src/middlewares/routeNotFound.js
module.exports = (req, res, next) => {
  const error = new Error(`Not Found - ${req.method} ${req.originalUrl}`);

  error.status = 404;

  return next(error);
};

```

Now we need to make use of the newly created error handler middlewares. Head over to your `src/index.js` file and add the following after line `13`.

```js
// src/index.js
const { routeNotFound, errorHandler } = require('./middlewares');
app.use(routeNotFound);
app.use(errorHandler);
```

### Creating the Post Model

Next, create a `models` folder in the `src` folder. In there, create a `index.js` and `Post.js` file.

In the `Post.js` file we're gonna put the following:

```js
//  src/models/Post.js
const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
});

module.exports = model("Post", PostSchema);
```

This Mongoose model represents the **posts** collection in our MongoDB database. These fields will be automatically generated for each post document: `_id`, `title`, `content`, `createdAt`, `updatedAt` and `__v`.

Once we've made the Post model, we're just gonna export it in `src/models/index.js` so we can easily target the `index.js` file once we need to require the Post model.

```js
// src/models/index.js
exports.Post = require('./Post')
```

### Create the Post Controller

Create a folder called `controllers` inside of `api/src`. In there create a `index.js` and `post.controller.js`, in the `post.controller.js` file put the following:

```js
// src/controllers/post.controller.js
const { Post } = require('../models');

exports.create = async (req, res, next) => {

}

exports.findAll = async (req, res, next) => {

}

exports.findOne = async (req, res, next) => {

}

exports.update = async (req, res, next) => {

}

exports.delete = async (req, res, next) => {

}
```

Let's implement these function.

#### The `create` function

```js
exports.create = async (req, res, next) => {
  const { title, content } = req.body;

  if (!title) {
    res.status(400);
    return res.json({
      message: "Title is required."
    })
  }

  if (!content) {
    res.status(400);
    return res.json({
      message: "Content is required."
    })
  }

  try {
    const post = await Post.create({
      title,
      content
    });

    res.status(201);
    return res.json(post);
  } catch (error) {
    // Forward an error message to the errorHandler middleware.
    next(new Error("An error occurred whilst trying to create the post."))
  }
}
```

#### The `findAll` function

```js
exports.findAll = async (req, res, next) => {
  try {
    const posts = await Post.find();

    return res.json(posts);
  } catch (error) {
    // Forward an error message to the errorHandler middleware.
    next(new Error(`An error occurred whilst trying to find all posts.`))
  }
}
```

#### The `findOne` function

```js
exports.findOne = async (req, res, next) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);

    if (!post) {
      res.status(404);
      return next(new Error(`No post found to update with ID: ${id}`));
    }

    return res.json(post);
  } catch (error) {
    // Forward an error message to the errorHandler middleware.
    next(new Error(`An error occurred whilst trying to find a post with ID: ${id}.`))
  }
}
```

#### The `update` function

```js
exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(411);
    return next(new Error("Data to update the post cannot be empty."))
  }

  try {
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true });

    if (!post) {
      res.status(404);
      return next(new Error(`No post found to update with ID: ${id}`));
    }

    return res.json(post);
  } catch (error) {
    // Forward an error message to the errorHandler middleware.
    next(new Error(`An error occurred whilst trying to update a post with ID: ${id}.`))
  }
}
```

#### The `delete` function

```js
exports.delete = async (req, res, next) => {
  const { id } = req.params;

  try {
    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      res.status(404);
      return next(new Error(`No post found to delete with ID: ${id}`));
    }

    return res.json(post);
  } catch (error) {
    // Forward an error message to the errorHandler middleware.
    next(new Error(`An error occurred whilst trying to delete a post with ID: ${id}.`))
  }
}
```

### Define the Routes

When a client sends requests for an endpoint using HTTP requests (GET, POST, PUT, PATCH, DELETE), we need to make sure that the server knows how to handle these.

These will be our endpoints:
- `/v1/posts`: GET, POST
- `/v1/posts/:id`: GET, PUT, DELETE

Create a `routes` folder in the `src` folder. In there, create 2 files `index.js` and `post.routes.js`.

Put the following in the `index.js` file:

```js
// src/routes/index.js
module.exports = app => {
  app.use('/v1/posts', require('./post.routes'));
}
```

And put this in the `post.routes.js` file:

```js
// src/routes/post.routes.js
const { Router } = require('express');

const router = Router();

const { PostController } = require('../controllers')

router.get('/', PostController.findAll);
router.get('/:id', PostController.findOne);
router.post('/', PostController.create);
router.put('/:id', PostController.update);
router.delete('/:id', PostController.delete);

module.exports = router;
```

You can see that we use the controller from `src/controllers/post.controller.js`.

We also need to include the newly created routes in `src/index.js` (right before the error handling middlewares).

Our updated `src/index.js` file will look like this:

```js
// src/index.js
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

require('./routes')(app);

const { routeNotFound, errorHandler } = require('./middlewares');
app.use(routeNotFound);
app.use(errorHandler);

require('./database')

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Express API running on http://localhost:${port}`));
```

### Testing the API

Run the Node.js application using `npm run dev`.

You can now test the routes using [Postman](https://www.postman.com/) or any other HTTP client.

## Conclusion

We've learned how to create a Node.js REST API using Express. We also know how to use connect to MongoDB and create/read/update/delete collections with Mongoose.

## Source Code

You can find the complete source code for this blog post on [GitHub](https://github.com/CodingWithNuke/express-mongodb-api)