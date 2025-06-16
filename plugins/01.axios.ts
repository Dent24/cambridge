import authApi from '~/plugins/api/auth'
import userApi from '~/plugins/api/user'
import chatApi from '~/plugins/api/chat'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      axios: {
        auth: authApi(),
        user: userApi(),
        chat: chatApi()
      }
    }
  }
})