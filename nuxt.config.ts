// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-security',
  ],
  security: {
    basicAuth: {
      name: 'test',
      pass: 'test',
      enabled: true,
      message: 'Test BasicAuth'
    },
  },
})
