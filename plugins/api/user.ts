import _ from 'lodash'

const maleUsers = [
  { name: '陳家豪', age: 29, distance: 41257, height: 172, weight: 65, image: 'https://picsum.photos/id/194/800/800', like: 1, match: false },
  { name: '林志明', age: 25, distance: 23158, height: 178, weight: 70, image: 'https://picsum.photos/id/405/800/800', like: 3, match: true },
  { name: '黃俊傑', age: 20, distance: 10087, height: 168, weight: 58, image: 'https://picsum.photos/id/312/800/800', like: 0, match: false },
  { name: '張冠宇', age: 31, distance: 35674, height: 185, weight: 82, image: 'https://picsum.photos/id/77/800/800', like: 2, match: true },
  { name: '李承翰', age: 23, distance: 8975, height: 165, weight: 55, image: 'https://picsum.photos/id/258/800/800', like: 1, match: false },
  { name: '王彥廷', age: 34, distance: 49876, height: 190, weight: 88, image: 'https://picsum.photos/id/11/800/800', like: 3, match: true },
  { name: '吳宇軒', age: 27, distance: 1056, height: 170, weight: 62, image: 'https://picsum.photos/id/499/800/800', like: 0, match: false },
  { name: '劉哲瑋', age: 21, distance: 24567, height: 175, weight: 73, image: 'https://picsum.photos/id/3/800/800', like: 2, match: true },
  { name: '蔡恩碩', age: 30, distance: 17890, height: 182, weight: 79, image: 'https://picsum.photos/id/160/800/800', like: 1, match: false },
  { name: '楊亦辰', age: 26, distance: 12345, height: 162, weight: 52, image: 'https://picsum.photos/id/345/800/800', like: 3, match: true },
  { name: '許柏翰', age: 32, distance: 34567, height: 188, weight: 85, image: 'https://picsum.photos/id/90/800/800', like: 0, match: false },
  { name: '鄭傑', age: 24, distance: 6789, height: 167, weight: 60, image: 'https://picsum.photos/id/210/800/800', like: 2, match: true },
  { name: '謝偉', age: 28, distance: 29876, height: 174, weight: 68, image: 'https://picsum.photos/id/420/800/800', like: 1, match: false },
  { name: '郭豪', age: 19, distance: 19876, height: 163, weight: 51, image: 'https://picsum.photos/id/55/800/800', like: 3, match: true },
  { name: '洪明', age: 33, distance: 36789, height: 183, weight: 80, image: 'https://picsum.photos/id/380/800/800', like: 0, match: false },
  { name: '曾華', age: 22, distance: 21098, height: 179, weight: 75, image: 'https://picsum.photos/id/10/800/800', like: 2, match: true },
  { name: '邱強', age: 35, distance: 48901, height: 186, weight: 89, image: 'https://picsum.photos/id/477/800/800', like: 1, match: false },
  { name: '廖民', age: 20, distance: 2345, height: 160, weight: 50, image: 'https://picsum.photos/id/299/800/800', like: 3, match: true },
  { name: '賴柏勳', age: 29, distance: 14500, height: 171, weight: 63, image: 'https://picsum.photos/id/14/800/800', like: 0, match: false },
  { name: '徐政傑', age: 25, distance: 31200, height: 176, weight: 72, image: 'https://picsum.photos/id/49/800/800', like: 2, match: true },
  { name: '王士傑', age: 29, distance: 20500, height: 180, weight: 80, image: 'https://picsum.photos/id/486/800/800', like: 1, match: false },
  { name: '吳冠霖', age: 22, distance: 24000, height: 170, weight: 65, image: 'https://picsum.photos/id/123/800/800', like: 3, match: true },
  { name: '劉宇翔', age: 33, distance: 16000, height: 185, weight: 75, image: 'https://picsum.photos/id/357/800/800', like: 0, match: false },
  { name: '蔡明德', age: 27, distance: 30000, height: 178, weight: 70, image: 'https://picsum.photos/id/21/800/800', like: 2, match: true },
  { name: '楊宗翰', age: 20, distance: 10000, height: 168, weight: 60, image: 'https://picsum.photos/id/99/800/800', like: 1, match: false },
  { name: '許承恩', age: 30, distance: 38000, height: 182, weight: 88, image: 'https://picsum.photos/id/412/800/800', like: 3, match: true },
  { name: '鄭宏偉', age: 24, distance: 4000, height: 165, weight: 55, image: 'https://picsum.photos/id/78/800/800', like: 0, match: false },
  { name: '謝建宏', age: 35, distance: 2000, height: 190, weight: 90, image: 'https://picsum.photos/id/245/800/800', like: 2, match: true },
  { name: '郭子揚', age: 18, distance: 34000, height: 160, weight: 50, image: 'https://picsum.photos/id/1/800/800', like: 1, match: false },
  { name: '洪品睿', age: 22, distance: 22000, height: 173, weight: 68, image: 'https://picsum.photos/id/156/800/800', like: 3, match: true },
  { name: '曾瑞祥', age: 28, distance: 32000, height: 180, weight: 78, image: 'https://picsum.photos/id/301/800/800', like: 0, match: false },
  { name: '邱信宏', age: 31, distance: 8000, height: 170, weight: 63, image: 'https://picsum.photos/id/4/800/800', like: 2, match: true },
  { name: '廖致遠', age: 25, distance: 26000, height: 177, weight: 71, image: 'https://picsum.photos/id/400/800/800', like: 1, match: false },
  { name: '賴晉廷', age: 34, distance: 3000, height: 188, weight: 85, image: 'https://picsum.photos/id/88/800/800', like: 3, match: true },
  { name: '徐博凱', age: 21, distance: 18000, height: 166, weight: 57, image: 'https://picsum.photos/id/270/800/800', like: 0, match: false },
  { name: '陳韋辰', age: 29, distance: 36000, height: 181, weight: 76, image: 'https://picsum.photos/id/111/800/800', like: 2, match: true },
  { name: '黃俊凱', age: 23, distance: 5000, height: 169, weight: 61, image: 'https://picsum.photos/id/3/800/800', like: 1, match: false },
  { name: '林宏哲', age: 32, distance: 39000, height: 184, weight: 84, image: 'https://picsum.photos/id/450/800/800', like: 3, match: true },
  { name: '張宇廷', age: 26, distance: 14000, height: 172, weight: 66, image: 'https://picsum.photos/id/222/800/800', like: 0, match: false },
  { name: '李奕辰', age: 19, distance: 23000, height: 161, weight: 53, image: 'https://picsum.photos/id/333/800/800', like: 2, match: true },
  { name: '王思遠', age: 28, distance: 28000, height: 176, weight: 74, image: 'https://picsum.photos/id/17/800/800', like: 1, match: false },
  { name: '吳柏睿', age: 30, distance: 11000, height: 180, weight: 77, image: 'https://picsum.photos/id/66/800/800', like: 3, match: true },
  { name: '劉浩宇', age: 22, distance: 21000, height: 170, weight: 64, image: 'https://picsum.photos/id/288/800/800', like: 0, match: false },
  { name: '蔡秉宸', age: 31, distance: 33000, height: 187, weight: 86, image: 'https://picsum.photos/id/432/800/800', like: 2, match: true },
  { name: '楊文傑', age: 25, distance: 7000, height: 164, weight: 56, image: 'https://picsum.photos/id/80/800/800', like: 1, match: false },
  { name: '許冠倫', age: 33, distance: 38000, height: 189, weight: 89, image: 'https://picsum.photos/id/390/800/800', like: 3, match: true },
  { name: '鄭家銘', age: 27, distance: 17000, height: 173, weight: 69, image: 'https://picsum.photos/id/100/800/800', like: 0, match: false },
  { name: '謝宗霖', age: 20, distance: 2000, height: 160, weight: 51, image: 'https://picsum.photos/id/500/800/800', like: 2, match: true },
  { name: '郭柏宇', age: 29, distance: 25000, height: 178, weight: 75, image: 'https://picsum.photos/id/20/800/800', like: 1, match: false },
  { name: '洪建宇', age: 23, distance: 12000, height: 168, weight: 59, image: 'https://picsum.photos/id/360/800/800', like: 3, match: true },
  { name: '曾子豪', age: 34, distance: 35000, height: 186, weight: 87, image: 'https://picsum.photos/id/444/800/800', like: 0, match: false },
  { name: '邱承恩', age: 21, distance: 4000, height: 161, weight: 52, image: 'https://picsum.photos/id/7/800/800', like: 2, match: true },
  { name: '廖柏辰', age: 30, distance: 22000, height: 175, weight: 70, image: 'https://picsum.photos/id/130/800/800', like: 1, match: false },
  { name: '賴奕翔', age: 24, distance: 30000, height: 169, weight: 60, image: 'https://picsum.photos/id/370/800/800', like: 3, match: true },
  { name: '徐宗佑', age: 32, distance: 8000, height: 182, weight: 80, image: 'https://picsum.photos/id/95/800/800', like: 0, match: false },
  { name: '陳秉翰', age: 26, distance: 37000, height: 177, weight: 73, image: 'https://picsum.photos/id/265/800/800', like: 2, match: true },
  { name: '黃信廷', age: 19, distance: 10000, height: 163, weight: 53, image: 'https://picsum.photos/id/40/800/800', like: 1, match: false },
  { name: '林冠廷', age: 35, distance: 38000, height: 188, weight: 89, image: 'https://picsum.photos/id/460/800/800', like: 3, match: true },
  { name: '張宇哲', age: 28, distance: 3000, height: 171, weight: 65, image: 'https://picsum.photos/id/25/800/800', like: 0, match: false },
  { name: '李承哲', age: 22, distance: 26000, height: 167, weight: 58, image: 'https://picsum.photos/id/350/800/800', like: 2, match: true },
  { name: '王恩傑', age: 31, distance: 16000, height: 180, weight: 78, image: 'https://picsum.photos/id/180/800/800', like: 1, match: false }
]

const femaleUsers = [
  { name: '陳宜蓁', age: 28, distance: 17000, height: 165, weight: 55, image: 'https://picsum.photos/id/48/800/800', like: 2, match: false },
  { name: '林欣妤', age: 22, distance: 30000, height: 158, weight: 48, image: 'https://picsum.photos/id/102/800/800', like: 1, match: true },
  { name: '黃詩涵', age: 33, distance: 5000, height: 170, weight: 62, image: 'https://picsum.photos/id/302/800/800', like: 0, match: false },
  { name: '張詠晴', age: 20, distance: 36000, height: 160, weight: 50, image: 'https://picsum.photos/id/178/800/800', like: 3, match: true },
  { name: '李子晴', age: 30, distance: 2000, height: 168, weight: 58, image: 'https://picsum.photos/id/400/800/800', like: 1, match: false },
  { name: '王品萱', age: 24, distance: 22000, height: 162, weight: 52, image: 'https://picsum.photos/id/22/800/800', like: 2, match: true },
  { name: '吳語彤', age: 35, distance: 39000, height: 172, weight: 68, image: 'https://picsum.photos/id/490/800/800', like: 0, match: false },
  { name: '劉芯語', age: 19, distance: 8000, height: 159, weight: 49, image: 'https://picsum.photos/id/7/800/800', like: 3, match: true },
  { name: '蔡玲', age: 27, distance: 26000, height: 166, weight: 56, image: 'https://picsum.photos/id/150/800/800', like: 1, match: false },
  { name: '楊芳', age: 31, distance: 13000, height: 171, weight: 63, image: 'https://picsum.photos/id/320/800/800', like: 2, match: true },
  { name: '許麗', age: 25, distance: 34000, height: 164, weight: 54, image: 'https://picsum.photos/id/190/800/800', like: 0, match: false },
  { name: '鄭婷', age: 34, distance: 6000, height: 173, weight: 66, image: 'https://picsum.photos/id/440/800/800', like: 3, match: true },
  { name: '謝敏', age: 21, distance: 18000, height: 161, weight: 51, image: 'https://picsum.photos/id/60/800/800', like: 1, match: false },
  { name: '郭靜', age: 29, distance: 32000, height: 169, weight: 59, image: 'https://picsum.photos/id/275/800/800', like: 2, match: true },
  { name: '洪美', age: 23, distance: 10000, height: 157, weight: 47, image: 'https://picsum.photos/id/35/800/800', like: 0, match: false },
  { name: '曾芬', age: 32, distance: 38000, height: 170, weight: 64, image: 'https://picsum.photos/id/480/800/800', like: 3, match: true },
  { name: '邱娟', age: 26, distance: 2400, height: 163, weight: 53, image: 'https://picsum.photos/id/8/800/800', like: 1, match: false },
  { name: '廖英', age: 18, distance: 28000, height: 155, weight: 45, image: 'https://picsum.photos/id/250/800/800', like: 2, match: true },
  { name: '賴萍', age: 22, distance: 14000, height: 160, weight: 50, image: 'https://picsum.photos/id/135/800/800', like: 0, match: false },
  { name: '徐惠', age: 30, distance: 23000, height: 167, weight: 57, image: 'https://picsum.photos/id/390/800/800', like: 3, match: true },
  { name: '陳欣妤', age: 28, distance: 17000, height: 165, weight: 55, image: 'https://picsum.photos/id/19/800/800', like: 1, match: false },
  { name: '林詩涵', age: 22, distance: 30000, height: 158, weight: 48, image: 'https://picsum.photos/id/101/800/800', like: 2, match: true },
  { name: '黃詠晴', age: 33, distance: 5000, height: 170, weight: 62, image: 'https://picsum.photos/id/304/800/800', like: 0, match: false },
  { name: '張子晴', age: 20, distance: 36000, height: 160, weight: 50, image: 'https://picsum.photos/id/177/800/800', like: 3, match: true },
  { name: '李品萱', age: 30, distance: 2000, height: 168, weight: 58, image: 'https://picsum.photos/id/401/800/800', like: 1, match: false },
  { name: '王語彤', age: 24, distance: 22000, height: 162, weight: 52, image: 'https://picsum.photos/id/23/800/800', like: 2, match: true },
  { name: '吳恩碩', age: 35, distance: 39000, height: 172, weight: 68, image: 'https://picsum.photos/id/491/800/800', like: 0, match: false },
  { name: '劉亦辰', age: 19, distance: 8000, height: 159, weight: 49, image: 'https://picsum.photos/id/6/800/800', like: 3, match: true },
  { name: '蔡芯語', age: 27, distance: 26000, height: 166, weight: 56, image: 'https://picsum.photos/id/151/800/800', like: 1, match: false },
  { name: '楊柏翰', age: 31, distance: 13000, height: 171, weight: 63, image: 'https://picsum.photos/id/321/800/800', like: 2, match: true },
  { name: '許玲', age: 25, distance: 34000, height: 164, weight: 54, image: 'https://picsum.photos/id/191/800/800', like: 0, match: false },
  { name: '鄭芳', age: 34, distance: 6000, height: 173, weight: 66, image: 'https://picsum.photos/id/441/800/800', like: 3, match: true },
  { name: '謝麗', age: 21, distance: 18000, height: 161, weight: 51, image: 'https://picsum.photos/id/61/800/800', like: 1, match: false },
  { name: '郭婷', age: 29, distance: 32000, height: 169, weight: 59, image: 'https://picsum.photos/id/276/800/800', like: 2, match: true },
  { name: '洪敏', age: 23, distance: 10000, height: 157, weight: 47, image: 'https://picsum.photos/id/36/800/800', like: 0, match: false },
  { name: '曾靜', age: 32, distance: 38000, height: 170, weight: 64, image: 'https://picsum.photos/id/481/800/800', like: 3, match: true },
  { name: '邱美', age: 26, distance: 2400, height: 163, weight: 53, image: 'https://picsum.photos/id/9/800/800', like: 1, match: false },
  { name: '廖芬', age: 18, distance: 28000, height: 155, weight: 45, image: 'https://picsum.photos/id/251/800/800', like: 2, match: true },
  { name: '賴娟', age: 22, distance: 14000, height: 160, weight: 50, image: 'https://picsum.photos/id/136/800/800', like: 0, match: false },
  { name: '徐英', age: 30, distance: 23000, height: 167, weight: 57, image: 'https://picsum.photos/id/391/800/800', like: 3, match: true },
  { name: '陳萍', age: 28, distance: 17000, height: 165, weight: 55, image: 'https://picsum.photos/id/47/800/800', like: 1, match: false },
  { name: '林惠', age: 22, distance: 30000, height: 158, weight: 48, image: 'https://picsum.photos/id/103/800/800', like: 2, match: true },
  { name: '黃惠美', age: 33, distance: 5000, height: 170, weight: 62, image: 'https://picsum.photos/id/302/800/800', like: 0, match: false },
  { name: '張思涵', age: 20, distance: 36000, height: 160, weight: 50, image: 'https://picsum.photos/id/179/800/800', like: 3, match: true },
  { name: '李佳儀', age: 30, distance: 2000, height: 168, weight: 58, image: 'https://picsum.photos/id/399/800/800', like: 1, match: false },
  { name: '王若晴', age: 24, distance: 22000, height: 162, weight: 52, image: 'https://picsum.photos/id/21/800/800', like: 2, match: true },
  { name: '吳子涵', age: 35, distance: 39000, height: 172, weight: 68, image: 'https://picsum.photos/id/489/800/800', like: 0, match: false },
  { name: '劉雅婷', age: 19, distance: 8000, height: 159, weight: 49, image: 'https://picsum.photos/id/5/800/800', like: 3, match: true },
  { name: '蔡佩玲', age: 27, distance: 26000, height: 166, weight: 56, image: 'https://picsum.photos/id/149/800/800', like: 1, match: false },
  { name: '楊心儀', age: 31, distance: 13000, height: 171, weight: 63, image: 'https://picsum.photos/id/319/800/800', like: 2, match: true },
  { name: '許婉婷', age: 25, distance: 34000, height: 164, weight: 54, image: 'https://picsum.photos/id/189/800/800', like: 0, match: false },
  { name: '鄭雅萍', age: 34, distance: 6000, height: 173, weight: 66, image: 'https://picsum.photos/id/439/800/800', like: 3, match: true },
  { name: '謝怡敏', age: 21, distance: 18000, height: 161, weight: 51, image: 'https://picsum.photos/id/59/800/800', like: 1, match: false },
  { name: '郭淑靜', age: 29, distance: 32000, height: 169, weight: 59, image: 'https://picsum.photos/id/274/800/800', like: 2, match: true },
  { name: '洪佳美', age: 23, distance: 10000, height: 157, weight: 47, image: 'https://picsum.photos/id/34/800/800', like: 0, match: false },
  { name: '曾子萱', age: 32, distance: 38000, height: 170, weight: 64, image: 'https://picsum.photos/id/479/800/800', like: 3, match: true },
  { name: '邱依娟', age: 26, distance: 2400, height: 163, weight: 53, image: 'https://picsum.photos/id/4/800/800', like: 1, match: false },
  { name: '廖思穎', age: 18, distance: 28000, height: 155, weight: 45, image: 'https://picsum.photos/id/249/800/800', like: 2, match: true },
  { name: '賴雅惠', age: 22, distance: 14000, height: 160, weight: 50, image: 'https://picsum.photos/id/134/800/800', like: 0, match: false },
  { name: '徐珮芬', age: 30, distance: 23000, height: 167, weight: 57, image: 'https://picsum.photos/id/389/800/800', like: 3, match: true }
]

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
    },

    getNearby: async () => {
      return _.sortBy(femaleUsers, 'distance')
    },

    getMemberInfo: async (id: string) => {
      return {
        name: '陳宜蓁',
        age: 28,
        distance: 17000,
        height: 165,
        weight: 55,
        images: ['https://picsum.photos/id/48/720/1080', 'https://picsum.photos/id/60/720/1080'],
        like: 2,
        match: false
      }
    },

    setMemberLike: async (like: number) => {
      return true
    },

    getMatchList: async () => {
      return _.filter(femaleUsers, (user: object) => !user.like)
    }
  }
}