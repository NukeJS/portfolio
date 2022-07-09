export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.$router.options.scrollBehavior = (to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        top: document.querySelector(to.hash).offsetTop - 80,
        behavior: 'smooth'
      }
    }

    return {
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
  }
})
