---
title: Create a Laravel error store using the Vue 3 Composition API
keywords: ['laravel', 'vue', 'composition api', 'axios']
thumbnail: create-laravel-error-store-using-vue-compositon-api.png
---

With Vue 3 you can easily store and display all Laravel based errors using the [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html).

For this example I will make use of Axios as my HTTP client. You can combine this with **any** HTTP client.

## Creating the error store

I'm creating my store in `stores/error.ts`. I'm using `.ts` since I will make use of TypeScript.

```ts
import { reactive } from 'vue';
import axios from 'axios';

type Errors = Record<string, string | string[]>;

const errors = reactive<Errors>({});
```

`errors` will be the reactive object containing all the errors, the key being the name that we get from the Laravel error object.

## Defining the actions

### `getError`

Get the error by property name.

```ts
export const getError = (property: string) => errors[property];
```

### `setError`

Set an error to the given property name.

```ts
export const setError = (property: string, error: string | string[]) => {
  errors[property] = error;
}
```

### `hasError`

Check if an error exists by the given property name.

```ts
export const hasError = (property: string) => !!errors[property];
```

### `hasErrors`

This action is the same as [`hasError`](#haserror) but to check if multiple properties have any errors

```ts
export const hasErrors = (...properties: string[]) => {
  return properties.some((property) => !!errors[property]);
}
```

### `hasAnyErrors`

Check if there are **any** errors in the error store object.

```ts
export const hasAnyErrors = () => !!Object.keys(errors).length;
```

### `getFirstError`

Return the first error of the given property name since an error can be a string array.

```ts
export const getFirstError = (property: string) => {
    if (!Array.isArray(errors[property])) return errors[property] as string;
    return errors[property][0];
};
```

### `clearErrors`

Clear the error store object.

```ts
export const clearErrors = () => {
    for (const property in errors) delete errors[property];
};
```

## Creating the Axios interceptors

We want to define both the request and response interceptor.

Note that this will be different based on the HTTP client that you are using.

### The request interceptor

When making a request we want to clear the error store.

```ts
axios.interceptors.request.use((config) => {
  clearErrors();
  return config;
});
```

### The response interceptor

When getting a successfull response we want to just clear the error store. But, when getting an error, we want to handle that differently.

```ts
axios.interceptors.response.use(
  (response) => {
    clearErrors();
    return response;
  },
  (error) => {
    if (!axios.isAxiosError(error)) throw error;
    if (!(error.response as any)?.data.errors) {
      setError(
        'message',
        (error.response as any)?.data.message || 'Something went wrong.'
      );
      return;
    }
    for (const property in (error.response as any)?.data.errors) {
      errors[property] = (error.response as any)?.data.errors[property];
    }
    throw error;
  }
);
```

## Making use of the interceptors

To register the the Axios interceptors we need to import it in `main.ts`.

```ts
import { createApp } from 'vue'
import App from './App.vue'

import './stores/error'

createApp(App).mount('#app')
```

## Clearing the error store on route change

Everytime the current route changes, we want to clear the error store so the next page doesn't show any errors.

```ts
router.beforeEach(clearErrors);
```

Don't forget to import your router at the top of the file!

```ts
import { reactive } from 'vue';
import axios from 'axios';

import router from '../router';
```

## How do I use this store?

Here's an example on how to use it.

```html
<template>
  <form @submit.prevent="onSubmit">
    <div>
      <input v-model="user.username" />
      <p v-if="hasError('username')">
        {{ getFirstError('username') }}
      </p>
    </div>
    <div>
      <input v-model="user.password" />
      <p v-if="hasError('password')">
        {{ getFirstError('password') }}
      </p>
    </div>
    <button type="submit">Register</button>
  </form>
</template>

<script setup lang="ts">
import axios from 'axios';
import { reactive } from 'vue';

import { hasError, getFirstError } from './stores/error';

const user = reactive({
  username: '',
  password: '',
});

const onSubmit = async () => {
  axios.post('/some-api-endpoint', user);
};
</script>
```

As you can see, to display the error we use 2 functions repetitively, `hasError` and `getFirstError`.

We can improve this by just making an `ErrorField` component that requires a name prop.

```html
<!-- components/ErrorField.vue -->

<template>
  <div v-if="hasError(name)">
    <p>
      {{ getFirstError(name) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { hasError, getFirstError } from '../stores/error';

defineProps<{
  name: string;
}>();
</script>
```

Which we can then use as this.

```html
<template>
  <form @submit.prevent="onSubmit">
    <div>
      <input v-model="user.username" />
      <ErrorField name="username" />
    </div>
    <div>
      <input v-model="user.password" />
      <ErrorField name="password" />
    </div>
    <button type="submit">Register</button>
  </form>
</template>
```

## Conclusion

Having an errors store makes it really easy for you to manage your Laravel errors in the front-end.

---

The GitHub repository for this example can be found [here](https://github.com/NukeJS/laravel-error-store-composition-api).