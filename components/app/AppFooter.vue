<template>
  <rc-footer
    class="py-8 bg-white border-t dark:bg-gray-900 dark:border-gray-700"
  >
    <rc-container
      class="flex flex-col space-y-6 md:space-y-0 md:space-x-8 md:flex-row"
    >
      <div>
        <nuxt-link
          :to="localePath('/')"
          class="inline-block text-lg font-bold select-none dark:text-white"
        >
          <nuxt-img class="h-6" src="/images/logo.svg" alt="RonnieCodes Logo" />
        </nuxt-link>
      </div>
      <div
        class="grid flex-grow text-sm font-medium sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6"
      >
        <div class="row-span-2 space-y-4">
          <h4
            class="text-xs font-semibold tracking-wide text-gray-900 uppercase dark:text-white"
          >
            {{ $t("components.AppFooter.websiteLinks") }}
          </h4>
          <ul class="space-y-3 text-gray-500 dark:text-gray-400">
            <li>
              <nuxt-link
                :to="localePath('/')"
                class="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
              >
                {{ $t("components.AppFooter.home") }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath('/blog')"
                class="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
              >
                {{ $t("components.AppFooter.blog") }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath('/projects')"
                class="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
              >
                {{ $t("components.AppFooter.projects") }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath('/contact')"
                class="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
              >
                {{ $t("components.AppFooter.contact") }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="row-span-2 space-y-4">
          <h4
            class="text-xs font-semibold tracking-wide text-gray-900 uppercase dark:text-white"
          >
            {{ $t("components.AppFooter.socialLinks") }}
          </h4>
          <ul class="space-y-3 text-gray-500 dark:text-gray-400">
            <li>
              <a
                class="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
                href="https://github.com/CodingWithNuke"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                class="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
                href="https://twitter.com/TheCodingNuke"
                target="_blank"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </rc-container>
  </rc-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>