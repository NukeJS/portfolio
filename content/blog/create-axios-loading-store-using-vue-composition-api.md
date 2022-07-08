---
title: 'Create an Axios loading store using the Vue 3 Composition API'
thumbnail: 'create-axios-loading-store-using-vue-composition-api.png'
---

With Vue 3 you can easily store if the application is currently loading something with Axios using the [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html).

## Creating the loading store

I will create the loading store in `stores/loading.js`. In there, we need to import a few things.

```js
import { ref } from 'vue';
import axios from 'axios';
```

Next we add the `isLoading` ref under the imports, (don't forget to export it so we can use it later on).

```js
export const isLoading = ref(false);
```

The loading state is `false` by default.

After that, we want to register a request and response interceptor to the axios instance. I will be using the global axios instance for this.

In the request interceptor we want to set the `isLoading` state to `true`, since this is the interceptor that will be fired when you **make** a request. This interceptor requires a callback that receives the config, we want to return this config.

```js
axios.interceptors.request.use((config) => {
  isLoading.value = true;
  return config;
});
```

Now we make the response interceptor, here we want to set the `isLoading` state to `false`. Because, this is the interceptor that will be fired after the request has been made, or if the request throws an error.

You can pass two params to this interceptor. The first being the response callback, and the second being the error callback. For the response callback we want to return the response, and for the error callback we want to throw the error.

```js
axios.interceptors.response.use(
  (response) => {
    isLoading.value = false;
    return response;
  },
  (error) => {
    isLoading.value = false;
    throw error;
  }
);
```

The store is done. We can now make a simple test component, I will create it in `App.vue`.

```html
<template>
  <h1 v-if="isLoading">Application is loading</h1>
  <h1 v-else>Application is not loading</h1>
  <button @click="makeAxiosRequest">Make an Axios request</button>
</template>

<script setup>
import axios from 'axios';
import { isLoading } from './stores/loading';

const makeAxiosRequest = async () => {
  await axios.get('https://jsonplaceholder.typicode.com/photos');
};
</script>
```

When you click on the button, it will make a sample request to show that the application is loading.

## Conclusion

Having a loading store is much nicer than having to make a loading state for every request you make.

---

The GitHub repository for this example can be found [here](https://github.com/NukeJS/axios-loading-store-composition-api).