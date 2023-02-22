<template>
  <component
    :is="to ? NuxtLink : 'button'"
    v-bind="{
      target,
      disabled,
      type,
      to,
    }"
    :class="[
      'inline-flex items-center justify-center rounded-full font-medium transition focus:outline-none focus:ring focus:ring-offset-4 focus:ring-offset-zinc-900 disabled:opacity-75',
      {
        'w-full': block,
      },
      {
        'px-10 py-3 text-lg': size === 'md',
      },
      {
        ...(variant === 'primary' && {
          'bg-pink-500 text-white': true,
          'hover:bg-pink-600 focus:ring-pink-500 active:bg-pink-700': !disabled,
        }),
        ...(variant === 'secondary' && {
          'bg-white text-zinc-900': true,
          'hover:bg-zinc-300 focus:ring-white active:bg-zinc-400': !disabled,
        }),
        ...(variant === 'success' && {
          'bg-green-500 text-white': true,
          'hover:bg-green-600 focus:ring-green-500 active:bg-green-700':
            !disabled,
        }),
        ...(variant === 'warning' && {
          'bg-amber-500 text-white': true,
          'hover:bg-amber-600 focus:ring-amber-500 active:bg-amber-700':
            !disabled,
        }),
        ...(variant === 'danger' && {
          'bg-red-500 text-white': true,
          'hover:bg-red-600 focus:ring-red-500 active:bg-red-700': !disabled,
        }),
        ...(variant === 'info' && {
          'bg-sky-500 text-white': true,
          'hover:bg-sky-600 focus:ring-sky-500 active:bg-sky-700': !disabled,
        }),
      },
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
/* --------------------------------- Imports -------------------------------- */
import type { RouteLocationRaw } from 'vue-router';
import { NuxtLink } from '#components';
/* -------------------------------------------------------------------------- */

/* --------------------------------- Globals -------------------------------- */
withDefaults(
  defineProps<{
    to?: RouteLocationRaw;
    target?: string;
    type?: string;
    disabled?: boolean;
    variant?:
      | 'primary'
      | 'secondary'
      | 'success'
      | 'warning'
      | 'danger'
      | 'info';
    block?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  }>(),
  {
    to: undefined,
    href: undefined,
    target: undefined,
    type: 'button',
    variant: 'primary',
    size: 'md',
  }
);
/* -------------------------------------------------------------------------- */
</script>
