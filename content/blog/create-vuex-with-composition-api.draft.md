---
title: 'Create your own Vuex with the Vue 3 Composition API'
thumbnail: 'create-vuex-with-composition-api.png'
---

With Vue 3 you can really easily make your own Vuex like stores using the [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html).

## Creating a store

I prefer to create my stores in a `stores/` directory right within the `src/` directory.

For this example I will create a store called `user`, so the file will be called `user.ts` (since I will be using TypeScript). You will also need to import `reactive` and `computed` from `vue`.

First I will define the state for the user, I will do this by creating a reactive variable called `user`.

```ts
import { reactive, computed } from 'vue'

// The currently authenticated user
export const user = reactive({
  isLoggedIn: false,
  account: null,
})
```

Now we want to be able to let the user login, let's make a login action as an example. This code will be right under the user object.

```ts
export const login = async (username: string, password: string) => {
  const response = await fetch('some-api-url');
  const json = await response.json();

  /**
   * Let's say the returned json is an object
   * containing an ID, firstName, and lastName.
   */
  user.isLoggedIn = true;
  user.account = json;
} 
```

Now the user is able to login, let's make a getter to display their fullname. This code will be right under the login action.

```ts
export const fullName = computed(() => `${user.account?.firstName} ${user.account?.lastName}`)
```