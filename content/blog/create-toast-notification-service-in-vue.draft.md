---
title: Create a toast notification service in Vue
labels: [Vue, Composition API]
keywords: [toast, popup, notification, service, vue, vue 3, composition api]
thumbnail: create-toast-notification-service-in-vue.png
published_at: 7-14-2022
---

Create your own custom toast notification service in Vue using the [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html).

## Before we begin

For this tutorial I will be using a couple packages:

- [`tailwindcss`](https://tailwindcss.com/) for styling
- [`@heroicons/vue`](https://heroicons.com/) for icons

The toast notification service will include a few things such as:

- A way to store the toasts that are currently visible.
- A way to create toasts. Also different types of toasts like warning, error, success, and info types.
- A way to render the toasts.

### Creat