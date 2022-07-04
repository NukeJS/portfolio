export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.$router.options.scrollBehavior = (_to, _from, savedPosition) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          left: savedPosition?.left || 0,
          top: savedPosition?.top || 0
        })
      }, 200)
    })
  }
})
