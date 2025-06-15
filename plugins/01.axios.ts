import authApi from '~/plugins/api/auth'
import userApi from '~/plugins/api/user'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      axios: {
        auth: authApi(),
        user: userApi()
      }
    }
  }
})