import { defineStore } from 'pinia'
import _ from 'lodash'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})

  const isLogin = computed(() => {
    return !!_.size(userInfo.value)
  })

  const setUserInfo = (profile: Object) => {
    userInfo.value = profile
  }

  return {
    userInfo,
    isLogin,
    setUserInfo
  }
}, { persist: true })