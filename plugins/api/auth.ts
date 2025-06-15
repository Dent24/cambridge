export default () => {
  return {
    login: async (phone: string) => {
      if (phone == '0911111111') {
        return true
      }
      return false
    },

    checkSms: async (phone: string, sms: string) => {
      if (sms == '111111') {
        return true
      }
      return false
    },

    reSendSms: async (phone: string) => {
      return true
    },

    register: async (data: Object) => {
      const errors = []
      if (data.sms != '111111') {
        errors.push('驗證碼錯誤')
      }
      if (data.email == 'test@test.com') {
        errors.push('此電子信箱已被註冊')
      }
      return errors
    },
  }
}