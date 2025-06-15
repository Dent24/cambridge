import authApi from '~/plugins/api/auth'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      axios: {
        auth: authApi()
      }
    }
  }
})