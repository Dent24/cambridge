// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2025-05-15',
  css: ['@/assets/scss/_base.scss', 'vuetify/styles', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true }
})
