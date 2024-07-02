// 1.手动切换
// export const BASE_URL = 'https://netease.imqinhao.cn'
// export const BASE_URL = 'http://codercba.prod:9002'
export const TIME_OUT = 10000

// 2.依赖当前环境: development/production
let BASE_URL = ''
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'https://netease.imqinhao.cn'
} else {
  BASE_URL = 'https://netease.imqinhao.cn'
}

export { BASE_URL }

// 3.从定义的环境变量的配置文件中, 加载变量
// console.log(process.env.REACT_APP_BASE_URL)
