import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})

  const setUserInfo = (profile: Object) => {
    userInfo.value = profile
  }

  return {
    userInfo,
    setUserInfo
  }
}, { persist: true })