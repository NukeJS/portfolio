<template>
  <footer class="mt-6 py-4 shadow md:py-8">
    <Container>
      <div class="sm:flex sm:items-center sm:justify-between">
        <ul
          class="mb-6 flex flex-wrap items-center space-x-4 sm:mb-0 md:space-x-6"
        >
          <li>
            <NuxtLink to="/" class="hover:underline"> Home </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about-me" class="hover:underline">
              About Me
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" class="hover:underline"> My Blog </NuxtLink>
          </li>
        </ul>
      </div>

      <hr class="my-6 border-zinc-700 sm:mx-auto lg:my-8" />

      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="sm:text-center">
          © 2022 NukeJS. All Rights Reserved.
        </span>
        <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <NuxtLink
            to="https://twitter.com/nuke_js"
            target="_blank"
            class="hover:text-white"
          >
            <TwitterIcon class="h-6 w-6" />
          </NuxtLink>
          <NuxtLink
            to="https://github.com/NukeJS"
            target="_blank"
            class="hover:text-white"
          >
            <GithubIcon class="h-6 w-6" />
          </NuxtLink>
        </div>
      </div>
    </Container>
  </footer>
</template>
