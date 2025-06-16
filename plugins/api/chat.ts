export default () => {
  return {
    getList: () => {
      return [
        {
          name: '陳宜蓁' ,
          lastTime: '2025/06/16 13:51',
          lastMessage: 'AA',
          lastFromSelf: true,
          notRead: 0,
          image: 'https://picsum.photos/id/48/800/800'
        },
        {
          name: '黃詩涵' ,
          lastTime: '2025/06/16 03:51',
          lastMessage: 'BB',
          lastFromSelf: false,
          notRead: 2,
          image: 'https://picsum.photos/id/302/800/800'
        },
        {
          name: '蔡玲' ,
          lastTime: '2025/06/15 12:51',
          lastMessage: 'CC',
          lastFromSelf: false,
          notRead: 1,
          image: 'https://picsum.photos/id/150/800/800'
        }
      ]
    }
  }
}