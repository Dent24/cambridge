export default () => {
  return {
    getProfile: async (phone: string) => {
      if (phone == '0911111111') {
        return {
          name: 'TEST',
          phone: '0911111111',
          email: 'test@test.com',
          gender: 0,
          age: 18
        }
      }
      return false
    }
  }
}