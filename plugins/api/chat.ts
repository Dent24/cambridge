export default () => {
  return {
    getList: () => {
      return [
        {
          name: '陳宜蓁',
          lastTime: '2025/06/16 13:51',
          lastMessage: 'AA',
          lastFromSelf: true,
          notRead: 0,
          image: 'https://picsum.photos/id/48/800/800'
        },
        {
          name: '黃詩涵',
          lastTime: '2025/06/16 03:51',
          lastMessage: 'BB',
          lastFromSelf: false,
          notRead: 2,
          image: 'https://picsum.photos/id/302/800/800'
        },
        {
          name: '蔡玲',
          lastTime: '2025/06/15 12:51',
          lastMessage: 'CC',
          lastFromSelf: false,
          notRead: 1,
          image: 'https://picsum.photos/id/150/800/800'
        }
      ]
    },

    getMemberChat: () => {
      return {
        name: '陳宜蓁',
        image: 'https://picsum.photos/id/48/800/800',
        history: [
          { text: 'AAA', type: 'received', time: '2025/06/16 10:00' },
          { text: 'BBBBBB', type: 'sent', time: '2025/06/16 10:01' },
          { text: 'AAA', type: 'received', time: '2025/06/16 10:02' },
          { text: 'BBBB', type: 'sent', time: '2025/06/16 10:03' },
          { text: 'A', type: 'received', time: '2025/06/16 10:04' },
          { text: 'BBBBBBBB', type: 'sent', time: '2025/06/16 10:05' },
          { text: 'AA', type: 'received', time: '2025/06/16 10:06' },
          { text: 'BBB', type: 'sent', time: '2025/06/16 10:07' },
          { text: 'AAAAAAAAA', type: 'received', time: '2025/06/16 10:08' },
          { text: 'B', type: 'sent', time: '2025/06/16 10:09' },
          { text: 'BBBBB', type: 'sent', time: '2025/06/16 10:09' },
          { text: 'AAAAAAAAA', type: 'received', time: '2025/06/16 10:10' },
          { text: 'BBBBB', type: 'sent', time: '2025/06/16 10:15' },
          { text: 'BBBBB', type: 'sent', time: '2025/06/16 10:15' },
          { text: 'BBBBBBBB', type: 'sent', time: '2025/06/16 10:16' },
          { text: 'AAAAAAA', type: 'received', time: '2025/06/16 10:20' },
        ]
      }
    },

    addChat: (msg: string) => {
      return true
    }
  }
}