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
  }
}